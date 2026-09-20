-- CreateEnum
CREATE TYPE "DealStage" AS ENUM ('NEW_REQUEST', 'RESEARCH', 'SUPPLIERS_FOUND', 'RFQ_SENT', 'QUOTATIONS_RECEIVED', 'NEGOTIATION', 'SAMPLE', 'ORDER_PENDING', 'ORDER_CONFIRMED', 'LOGISTICS', 'COMPLETED', 'LOST', 'ON_HOLD');

-- CreateEnum
CREATE TYPE "TradePriority" AS ENUM ('LOW', 'NORMAL', 'HIGH');

-- CreateEnum
CREATE TYPE "CompanyRole" AS ENUM ('SUPPLIER', 'MANUFACTURER', 'DISTRIBUTOR', 'BUYER', 'IMPORTER', 'LOGISTICS', 'AGENT', 'OTHER');

-- CreateEnum
CREATE TYPE "CaseCompanyRole" AS ENUM ('SUPPLIER', 'BUYER', 'LOGISTICS', 'OTHER');

-- CreateEnum
CREATE TYPE "CaseCompanyStatus" AS ENUM ('DISCOVERED', 'CONTACTED', 'REPLIED', 'QUOTED', 'REJECTED', 'SHORTLISTED', 'SELECTED');

-- CreateEnum
CREATE TYPE "QuotationStatus" AS ENUM ('RECEIVED', 'UNDER_REVIEW', 'SHORTLISTED', 'REJECTED', 'ACCEPTED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "TradeTaskStatus" AS ENUM ('OPEN', 'DONE', 'CANCELLED');

-- CreateEnum
CREATE TYPE "DealActivityType" AS ENUM ('CASE_CREATED', 'STAGE_CHANGED', 'COMPANY_ADDED', 'CONTACT_ADDED', 'RFQ_PREPARED', 'RFQ_SENT', 'REPLY_RECEIVED', 'QUOTATION_ADDED', 'TASK_CREATED', 'TASK_COMPLETED', 'DOCUMENT_ADDED', 'NOTE_ADDED');

-- CreateEnum
CREATE TYPE "TradeDocumentType" AS ENUM ('COA', 'TDS', 'MSDS', 'CERTIFICATE', 'QUOTATION', 'PROFORMA', 'INVOICE', 'PACKING_LIST', 'CATALOG', 'OTHER');

-- CreateEnum
CREATE TYPE "RfqChannel" AS ENUM ('EMAIL', 'WHATSAPP');

-- AlterTable
ALTER TABLE "TradeCase" ADD COLUMN     "buyerCompanyId" TEXT,
ADD COLUMN     "closedAt" TIMESTAMP(3),
ADD COLUMN     "destinationCountry" TEXT,
ADD COLUMN     "frequency" TEXT,
ADD COLUMN     "incoterm" TEXT,
ADD COLUMN     "nextAction" TEXT,
ADD COLUMN     "nextActionAt" TIMESTAMP(3),
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "ownerUserEmail" TEXT,
ADD COLUMN     "paymentPreference" TEXT,
ADD COLUMN     "priority" "TradePriority" NOT NULL DEFAULT 'NORMAL',
ADD COLUMN     "productSpecification" TEXT,
ADD COLUMN     "quantityUnit" TEXT,
ADD COLUMN     "sourceCountry" TEXT,
ADD COLUMN     "stage" "DealStage" NOT NULL DEFAULT 'NEW_REQUEST',
ADD COLUMN     "targetCurrency" TEXT,
ADD COLUMN     "targetPrice" DECIMAL(18,4);

-- Preserve operational meaning of existing research cases and their owners.
UPDATE "TradeCase" AS c SET
    "stage" = CASE c."status"
        WHEN 'RESEARCHING' THEN 'RESEARCH'::"DealStage"
        WHEN 'SHORTLISTED' THEN 'SUPPLIERS_FOUND'::"DealStage"
        WHEN 'CONTACTING' THEN 'SUPPLIERS_FOUND'::"DealStage"
        WHEN 'QUOTED' THEN 'QUOTATIONS_RECEIVED'::"DealStage"
        WHEN 'NEGOTIATING' THEN 'NEGOTIATION'::"DealStage"
        WHEN 'WON' THEN 'COMPLETED'::"DealStage"
        WHEN 'LOST' THEN 'LOST'::"DealStage"
        WHEN 'ARCHIVED' THEN 'ON_HOLD'::"DealStage"
        ELSE 'NEW_REQUEST'::"DealStage" END,
    "ownerUserEmail" = u."email",
    "sourceCountry" = c."sourceRegion",
    "destinationCountry" = c."destination"
FROM "User" AS u WHERE c."createdById" = u."id";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "address" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "lastContactAt" TIMESTAMP(3),
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "roles" "CompanyRole"[] DEFAULT ARRAY[]::"CompanyRole"[],
ADD COLUMN     "whatsapp" TEXT;

UPDATE "Company" SET "roles" = CASE "type"
    WHEN 'MANUFACTURER' THEN ARRAY['MANUFACTURER'::"CompanyRole"]
    WHEN 'DISTRIBUTOR' THEN ARRAY['DISTRIBUTOR'::"CompanyRole"]
    WHEN 'IMPORTER' THEN ARRAY['IMPORTER'::"CompanyRole"]
    WHEN 'BUYER' THEN ARRAY['BUYER'::"CompanyRole"]
    WHEN 'LOGISTICS' THEN ARRAY['LOGISTICS'::"CompanyRole"]
    ELSE ARRAY['OTHER'::"CompanyRole"] END;

-- AlterTable
ALTER TABLE "CaseCompany" ADD COLUMN     "notes" TEXT,
ADD COLUMN     "roleInCase" "CaseCompanyRole" NOT NULL DEFAULT 'OTHER',
ADD COLUMN     "source" TEXT,
ADD COLUMN     "status" "CaseCompanyStatus" NOT NULL DEFAULT 'DISCOVERED';

UPDATE "CaseCompany" AS cc SET
    "status" = CASE WHEN cc."shortlisted" THEN 'SHORTLISTED'::"CaseCompanyStatus" ELSE 'DISCOVERED'::"CaseCompanyStatus" END,
    "roleInCase" = CASE c."type"
        WHEN 'SOURCING' THEN 'SUPPLIER'::"CaseCompanyRole"
        WHEN 'BUYER_SEARCH' THEN 'BUYER'::"CaseCompanyRole"
        WHEN 'LOGISTICS' THEN 'LOGISTICS'::"CaseCompanyRole"
        ELSE 'OTHER'::"CaseCompanyRole" END
FROM "TradeCase" AS c WHERE cc."caseId" = c."id";

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "notes" TEXT,
ADD COLUMN     "preferredChannel" "RfqChannel",
ADD COLUMN     "title" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Quotation" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "contactId" TEXT,
    "quotationDate" TIMESTAMP(3) NOT NULL,
    "validUntil" TIMESTAMP(3),
    "currency" TEXT NOT NULL,
    "unitPrice" DECIMAL(18,4) NOT NULL,
    "unit" TEXT NOT NULL,
    "quantity" DECIMAL(18,4),
    "quantityUnit" TEXT,
    "totalPrice" DECIMAL(18,4),
    "incoterm" TEXT,
    "deliveryLocation" TEXT,
    "moq" TEXT,
    "leadTimeDays" INTEGER,
    "paymentTerms" TEXT,
    "originCountry" TEXT,
    "productName" TEXT NOT NULL,
    "specification" TEXT,
    "notes" TEXT,
    "status" "QuotationStatus" NOT NULL DEFAULT 'RECEIVED',
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Quotation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TradeTask" (
    "id" TEXT NOT NULL,
    "caseId" TEXT,
    "companyId" TEXT,
    "contactId" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "TradeTaskStatus" NOT NULL DEFAULT 'OPEN',
    "priority" "TradePriority" NOT NULL DEFAULT 'NORMAL',
    "dueAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "assignedToEmail" TEXT NOT NULL,
    "createdByEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TradeTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DealActivity" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "companyId" TEXT,
    "userEmail" TEXT NOT NULL,
    "type" "DealActivityType" NOT NULL,
    "summary" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DealActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TradeDocument" (
    "id" TEXT NOT NULL,
    "caseId" TEXT,
    "companyId" TEXT,
    "quotationId" TEXT,
    "type" "TradeDocumentType" NOT NULL,
    "name" TEXT NOT NULL,
    "sourceUrl" TEXT,
    "storageRef" TEXT,
    "notes" TEXT,
    "uploadedByEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TradeDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RfqDraft" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "channel" "RfqChannel" NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdByEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RfqDraft_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Quotation_caseId_quotationDate_idx" ON "Quotation"("caseId", "quotationDate");

-- CreateIndex
CREATE INDEX "TradeTask_status_dueAt_idx" ON "TradeTask"("status", "dueAt");

-- CreateIndex
CREATE INDEX "DealActivity_caseId_createdAt_idx" ON "DealActivity"("caseId", "createdAt");

-- CreateIndex
CREATE INDEX "TradeDocument_caseId_createdAt_idx" ON "TradeDocument"("caseId", "createdAt");

-- CreateIndex
CREATE INDEX "RfqDraft_caseId_createdAt_idx" ON "RfqDraft"("caseId", "createdAt");

-- AddForeignKey
ALTER TABLE "Quotation" ADD CONSTRAINT "Quotation_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "TradeCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quotation" ADD CONSTRAINT "Quotation_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quotation" ADD CONSTRAINT "Quotation_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeTask" ADD CONSTRAINT "TradeTask_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "TradeCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeTask" ADD CONSTRAINT "TradeTask_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeTask" ADD CONSTRAINT "TradeTask_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DealActivity" ADD CONSTRAINT "DealActivity_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "TradeCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DealActivity" ADD CONSTRAINT "DealActivity_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeDocument" ADD CONSTRAINT "TradeDocument_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "TradeCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeDocument" ADD CONSTRAINT "TradeDocument_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeDocument" ADD CONSTRAINT "TradeDocument_quotationId_fkey" FOREIGN KEY ("quotationId") REFERENCES "Quotation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RfqDraft" ADD CONSTRAINT "RfqDraft_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "TradeCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RfqDraft" ADD CONSTRAINT "RfqDraft_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeCase" ADD CONSTRAINT "TradeCase_buyerCompanyId_fkey" FOREIGN KEY ("buyerCompanyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
