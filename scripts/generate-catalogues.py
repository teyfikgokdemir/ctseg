from pathlib import Path
import subprocess
import sys
import reportlab
from io import BytesIO
from PIL import Image as PILImage, ImageDraw, ImageFont
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas as pdfcanvas
from reportlab.lib.utils import ImageReader
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, Image, KeepTogether, HRFlowable
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "downloads"
OUT.mkdir(parents=True, exist_ok=True)

FONT = Path(reportlab.__file__).resolve().parent / "fonts" / "Vera.ttf"
FONT_BOLD = Path(reportlab.__file__).resolve().parent / "fonts" / "VeraBd.ttf"
pdfmetrics.registerFont(TTFont("CTSEG Sans", str(FONT), asciiReadable=True, shapable=False))

PAPER = colors.HexColor("#F2EFE7")
INK = colors.HexColor("#22231F")
CHARCOAL = colors.HexColor("#272923")
TERRACOTTA = colors.HexColor("#A95638")
OLIVE = colors.HexColor("#747A5C")
STONE = colors.HexColor("#D3CEC1")
MUTED = colors.HexColor("#6F7068")

products = [
    ("Pistachios","Antep Fıstığı","Akbari Pistachios","Akbari Antep Fıstığı","Iran","İran","Long kernels for premium retail, hospitality and gifting programmes.","Uzun taneli yapı; premium perakende, ikram ve hediye programları."),
    ("Pistachios","Antep Fıstığı","Kalleh Ghouchi Pistachios","Kalleh Ghouchi Antep Fıstığı","Iran","İran","Large, round jumbo-class pistachios for strong in-shell presentation.","İri ve yuvarlak jumbo sınıfı; güçlü kabuklu ürün sunumu."),
    ("Pistachios","Antep Fıstığı","Fandoghi Pistachios","Fandoghi Antep Fıstığı","Iran","İran","Small, round pistachios suited to efficient packing and volume trade.","Küçük ve yuvarlak yapı; verimli paketleme ve hacimli ticaret."),
    ("Pistachios","Antep Fıstığı","Ahmad Aghaei Pistachios","Ahmad Aghaei Antep Fıstığı","Iran","İran","Long pistachios with light shells across commercial export grades.","Uzun, açık kabuklu yapı; farklı ticari ihracat kalibreleri."),
    ("Pistachios","Antep Fıstığı","Green Peeled Pistachio Kernels","Yeşil Soyulmuş İç Fıstık","Iran","İran","Vivid kernels for pastry, gelato, chocolate and premium production.","Canlı yeşil iç; pastacılık, dondurma, çikolata ve premium üretim."),
    ("Pistachios","Antep Fıstığı","Broken and Granulated Pistachio","Kırık ve Granül İç Fıstık","Iran","İran","Calibrated crumb and granules for coating, filling and decoration.","Kaplama, dolgu ve dekor uygulamaları için kalibre edilmiş kırık ve granül."),
    ("Dates","Hurma","Mazafati Dates","Mazafati Hurması","Iran","İran","Soft, dark dates for chilled retail and controlled foodservice.","Soğuk zincir planlamalı perakende ve horeca için yumuşak, koyu hurma."),
    ("Dates","Hurma","Date Paste and Syrup","Hurma Ezmesi ve Şurubu","Verified source","Doğrulanmış kaynak","Natural sweetness, binding and colour for bakery and formulations.","Fırıncılık ve reçetelerde doğal tatlılık, bağlayıcılık ve renk."),
    ("Dried fruit","Kuru meyve","Raisins","Kuru Üzüm","Iran / Turkey","İran / Türkiye","Selected by colour, berry size, moisture and intended use.","Renk, tane boyu, nem ve kullanım amacına göre seçilir."),
    ("Nuts","Kuruyemiş","Almonds","Badem","Iran / Turkey","İran / Türkiye","Matched by variety, size, skin and processing requirement.","Çeşit, kalibre, kabuk durumu ve işleme ihtiyacına göre eşleştirilir."),
    ("Nuts","Kuruyemiş","Walnuts","Ceviz","Iran / Turkey","İran / Türkiye","Graded by colour, half-to-piece ratio and oxidation control.","Renk sınıfı, yarım-parça oranı ve oksidasyon kontrolüne göre sınıflanır."),
    ("Dried fruit","Kuru meyve","Dried Apricots and Apricot Kernels","Kuru Kayısı ve Kayısı Çekirdeği","Turkey / verified source","Türkiye / doğrulanmış kaynak","Assessed separately by type, colour, size and processing status.","Tür, renk, boy ve işleme niteliğine göre ayrı değerlendirilir."),
    ("Seeds","Tohumlar","Pumpkin Seeds","Kabak Çekirdeği","Verified source","Doğrulanmış kaynak","Specified by format, size, roasting and microbiological needs.","Form, kalibre, kavurma ve mikrobiyolojik ihtiyaca göre tanımlanır."),
    ("Seeds","Tohumlar","Sunflower Seeds","Ay Çekirdeği","Verified source","Doğrulanmış kaynak","Graded for seed integrity, foreign matter and roasting performance.","Tane bütünlüğü, yabancı madde ve kavurma performansına göre sınıflanır."),
    ("Specialities","Özel ürünler","Saffron","Safran","Iran","İran","Verified for filament integrity, colouring strength, aroma and purity.","İplik bütünlüğü, renk gücü, aroma ve saflık temelinde doğrulanır."),
    ("Dried fruit","Kuru meyve","Dried Mulberries","Kurutulmuş Dut","Iran","İran","Chosen for sweetness, light colour, integrity and low foreign matter.","Tatlılık, açık renk, bütünlük ve düşük yabancı madde için seçilir."),
    ("Specialities","Özel ürünler","Zereshk Barberries","Zereshk","Iran","İran","Vivid, tart barberries for rice, sauces, garnish and formulations.","Pilav, sos, garnitür ve reçeteler için canlı renkli, ekşi berberis."),
    ("Nuts","Kuruyemiş","Mixed Nuts and Specialities","Karışık Kuruyemiş ve Özel Ürünler","Project-specific","Proje bazlı","Recipes defined by ratio, allergen control, roasting and pack format.","Oran, alerjen yönetimi, kavurma ve ambalaj formatına göre geliştirilir.")
]

copy = {
    "en": {
        "file":"ctseg-trade-products-catalogue.pdf","title":"CTSEG Trade Products Catalogue",
        "subtitle":"A concise B2B portfolio for specification-led commercial assessment",
        "intro":"CTSEG coordinates strategic sourcing, supplier verification, quotation comparison and international commercial decisions. This catalogue presents 18 trade-product groups without asserting unverified price, capacity, certification, MOQ or lead time.",
        "origin":"Origin","use":"Commercial use","pack":"Packaging is confirmed at quotation stage according to producer, order structure and target market.",
        "docs":"Quality and document requirements are verified by producer and shipment lot. Samples, COA, traceability and target-market fit are assessed for the specific transaction.",
        "contact":"Commercial assessment","company":"CTSEG Sanayi ve Ticaret Limited Şirketi","founded":"Established 2022 - Founder: Teyfik Gökdemir",
        "address":"Fevzipaşa Caddesi, Fatih, Istanbul, Türkiye","web":"ctseg.com.tr - info@ctseg.com.tr",
        "note":"Commercial note","category_index":0,"name_index":2,"origin_index":4,"desc_index":6
    },
    "tr": {
        "file":"ctseg-ticari-urunler-katalogu.pdf","title":"CTSEG Ticari Ürünler Kataloğu",
        "subtitle":"Spesifikasyon temelli ticari değerlendirme için kısa B2B portföyü",
        "intro":"CTSEG stratejik tedarik, tedarikçi doğrulaması, teklif karşılaştırması ve uluslararası ticari karar süreçlerini koordine eder. Bu katalog 18 ticari ürün grubunu; doğrulanmamış fiyat, kapasite, sertifika, MOQ veya termin iddiası olmadan sunar.",
        "origin":"Menşe","use":"Ticari kullanım","pack":"Ambalaj bilgisi; üretici, sipariş yapısı ve hedef pazara göre teklif aşamasında teyit edilir.",
        "docs":"Kalite ve belge gereksinimleri üretici ve sevk partisi bazında doğrulanır. Numune, COA, izlenebilirlik ve hedef pazar uygunluğu işlem özelinde değerlendirilir.",
        "contact":"Ticari değerlendirme","company":"CTSEG Sanayi ve Ticaret Limited Şirketi","founded":"Kuruluş: 2022 - Kurucu: Teyfik Gökdemir",
        "address":"Fevzipaşa Caddesi, Fatih, İstanbul, Türkiye","web":"ctseg.com.tr - info@ctseg.com.tr",
        "note":"Ticari not","category_index":1,"name_index":3,"origin_index":5,"desc_index":7
    }
}

def build(lang):
    c = copy[lang]
    styles = getSampleStyleSheet()
    title = ParagraphStyle("Title",fontName="CTSEG Sans Bold",fontSize=28,leading=32,textColor=INK,spaceAfter=9)
    subtitle = ParagraphStyle("Subtitle",fontName="CTSEG Sans",fontSize=12,leading=17,textColor=MUTED,spaceAfter=22)
    heading = ParagraphStyle("Heading",fontName="CTSEG Sans Bold",fontSize=20,leading=24,textColor=INK,spaceAfter=16)
    product_title = ParagraphStyle("Product",fontName="CTSEG Sans Bold",fontSize=13,leading=16,textColor=INK,spaceAfter=5)
    body = ParagraphStyle("Body",fontName="CTSEG Sans",fontSize=9.5,leading=14,textColor=INK,spaceAfter=8)
    small = ParagraphStyle("Small",fontName="CTSEG Sans",fontSize=8.5,leading=12,textColor=MUTED)
    label = ParagraphStyle("Label",fontName="CTSEG Sans Bold",fontSize=8,leading=10,textColor=TERRACOTTA,spaceAfter=3)
    path = OUT / c["file"]

    def page(canvas, doc):
        canvas.saveState()
        canvas.setFillColor(PAPER);canvas.rect(0,0,A4[0],A4[1],fill=1,stroke=0)
        canvas.setStrokeColor(STONE);canvas.line(20*mm,16*mm,A4[0]-20*mm,16*mm)
        canvas.setFont("CTSEG Sans",7.5);canvas.setFillColor(MUTED)
        canvas.drawString(20*mm,10*mm,"CTSEG")
        canvas.drawRightString(A4[0]-20*mm,10*mm,str(doc.page))
        canvas.restoreState()

    doc = SimpleDocTemplate(str(path),pagesize=A4,rightMargin=20*mm,leftMargin=20*mm,topMargin=20*mm,bottomMargin=22*mm,
                            title=c["title"],author="CTSEG")
    story = []
    logo = ROOT / "public" / "images" / "ctseg-logo-transparent.png"
    if logo.exists():
        im=Image(str(logo),width=47*mm,height=15.1*mm)
        logo_band=Table([[im]],colWidths=[58*mm],rowHeights=[22*mm],style=TableStyle([
            ("BACKGROUND",(0,0),(-1,-1),CHARCOAL),("VALIGN",(0,0),(-1,-1),"MIDDLE"),
            ("ALIGN",(0,0),(-1,-1),"CENTER"),("LEFTPADDING",(0,0),(-1,-1),5),
            ("RIGHTPADDING",(0,0),(-1,-1),5),("TOPPADDING",(0,0),(-1,-1),4),
            ("BOTTOMPADDING",(0,0),(-1,-1),4)
        ]))
        logo_band.hAlign="LEFT";story += [logo_band,Spacer(1,18)]
    story += [Paragraph(c["title"],title),Paragraph(c["subtitle"],subtitle),
              Table([["",Paragraph(c["intro"],body)]],colWidths=[4*mm,151*mm],
                    style=TableStyle([("BACKGROUND",(0,0),(0,0),TERRACOTTA),("BACKGROUND",(1,0),(1,0),colors.white),
                                      ("BOX",(0,0),(-1,-1),.7,STONE),("VALIGN",(0,0),(-1,-1),"TOP"),
                                      ("LEFTPADDING",(1,0),(1,0),12),("RIGHTPADDING",(1,0),(1,0),12),
                                      ("TOPPADDING",(1,0),(1,0),12),("BOTTOMPADDING",(1,0),(1,0),12)])),
              Spacer(1,24)]
    facts=[[Paragraph(c["company"],product_title),Paragraph(c["founded"],small)],
           [Paragraph(c["address"],body),Paragraph(c["web"],body)]]
    story += [Table(facts,colWidths=[82*mm,73*mm],style=TableStyle([
        ("BACKGROUND",(0,0),(-1,-1),colors.HexColor("#E8E3D8")),("BOX",(0,0),(-1,-1),.7,STONE),
        ("INNERGRID",(0,0),(-1,-1),.5,STONE),("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(-1,-1),10),("RIGHTPADDING",(0,0),(-1,-1),10),
        ("TOPPADDING",(0,0),(-1,-1),10),("BOTTOMPADDING",(0,0),(-1,-1),10)])),PageBreak()]

    categories=[]
    for item in products:
        category=item[c["category_index"]]
        if category not in categories: categories.append(category)
    for category in categories:
        story += [Paragraph(category,heading)]
        group=[item for item in products if item[c["category_index"]]==category]
        for item in group:
            origin_line=f'<font color="#A95638"><b>{c["origin"]}</b></font>&nbsp;&nbsp;&nbsp; {item[c["origin_index"]]}'
            use_line=f'<font color="#A95638"><b>{c["use"]}</b></font>&nbsp;&nbsp;&nbsp; {item[c["desc_index"]]}'
            story += [
                Paragraph(item[c["name_index"]],product_title),
                Paragraph(origin_line,body),Paragraph(use_line,body),
                HRFlowable(width="100%",thickness=.5,color=STONE,spaceBefore=1,spaceAfter=1),
                Spacer(1,10)
            ]
        story += [Spacer(1,8),Paragraph(c["note"],label),Paragraph(c["pack"],small),Spacer(1,5),Paragraph(c["docs"],small),PageBreak()]

    story += [Paragraph(c["contact"],heading),Paragraph(c["company"],product_title),Paragraph(c["founded"],body),
              Paragraph(c["address"],body),Spacer(1,8),Paragraph(c["web"],product_title),Spacer(1,26),
              Table([["",Paragraph(c["pack"],body)],["",Paragraph(c["docs"],body)]],colWidths=[4*mm,151*mm],
                    style=TableStyle([("BACKGROUND",(0,0),(0,-1),OLIVE),("BACKGROUND",(1,0),(1,-1),colors.white),
                                      ("BOX",(0,0),(-1,-1),.7,STONE),("INNERGRID",(0,0),(-1,-1),.5,STONE),
                                      ("LEFTPADDING",(1,0),(1,-1),12),("RIGHTPADDING",(1,0),(1,-1),12),
                                      ("TOPPADDING",(1,0),(1,-1),12),("BOTTOMPADDING",(1,0),(1,-1),12)]))]
    doc.build(story,onFirstPage=page,onLaterPages=page)
    return path

def _wrap(text, font, size, width):
    words=text.split()
    lines=[];current=""
    for word in words:
        candidate=f"{current} {word}".strip()
        if pdfmetrics.stringWidth(candidate,font,size)<=width:
            current=candidate
        else:
            if current: lines.append(current)
            current=word
    if current: lines.append(current)
    return lines

def build_canvas(lang):
    c=copy[lang];path=OUT/c["file"];width,height=A4
    cv=pdfcanvas.Canvas(str(path),pagesize=A4,pageCompression=0)
    cv.setTitle(c["title"]);cv.setAuthor("CTSEG")
    page_no=0

    def background():
        nonlocal page_no
        page_no+=1
        cv.setFillColor(PAPER);cv.rect(0,0,width,height,fill=1,stroke=0)

    def footer():
        cv.setStrokeColor(STONE);cv.line(20*mm,16*mm,width-20*mm,16*mm)
        cv.setFont("CTSEG Sans",7.5);cv.setFillColor(MUTED)
        cv.drawString(20*mm,10*mm,"CTSEG");cv.drawRightString(width-20*mm,10*mm,str(page_no))

    def lines(text,x,y,font="CTSEG Sans",size=9.5,leading=14,max_width=155*mm,color=INK):
        cv.setFont(font,size);cv.setFillColor(color)
        for line in _wrap(text,font,size,max_width):
            cv.drawString(x,y,line);y-=leading
        return y

    background()
    cv.setFillColor(CHARCOAL);cv.rect(20*mm,height-45*mm,58*mm,22*mm,fill=1,stroke=0)
    logo=ROOT/"public"/"images"/"ctseg-logo-transparent.png"
    if logo.exists(): cv.drawImage(str(logo),25.5*mm,height-41.5*mm,width=47*mm,height=15.1*mm,mask="auto",preserveAspectRatio=True)
    y=height-60*mm
    y=lines(c["title"],20*mm,y,"CTSEG Sans",28,32,170*mm,INK)-4
    y=lines(c["subtitle"],20*mm,y,"CTSEG Sans",12,17,170*mm,MUTED)-14
    intro_lines=_wrap(c["intro"],"CTSEG Sans",9.5,145*mm)
    box_h=(len(intro_lines)*14+20)*1
    cv.setFillColor(colors.white);cv.setStrokeColor(STONE);cv.rect(25*mm,y-box_h+5,155*mm,box_h,fill=1,stroke=1)
    cv.setFillColor(TERRACOTTA);cv.rect(25*mm,y-box_h+5,4*mm,box_h,fill=1,stroke=0)
    lines(c["intro"],33*mm,y-8,"CTSEG Sans",9.5,14,140*mm,INK)
    y-=box_h+22
    cv.setFillColor(colors.HexColor("#E8E3D8"));cv.setStrokeColor(STONE);cv.rect(25*mm,y-36*mm,155*mm,36*mm,fill=1,stroke=1)
    cv.line(105*mm,y,105*mm,y-36*mm);cv.line(25*mm,y-18*mm,180*mm,y-18*mm)
    lines(c["company"],29*mm,y-9*mm,"CTSEG Sans",12,15,72*mm,INK)
    lines(c["founded"],109*mm,y-9*mm,"CTSEG Sans",8.5,12,67*mm,MUTED)
    lines(c["address"],29*mm,y-27*mm,"CTSEG Sans",9,12,72*mm,INK)
    lines(c["web"],109*mm,y-27*mm,"CTSEG Sans",9,12,67*mm,INK)
    footer();cv.showPage()

    categories=[]
    for item in products:
        category=item[c["category_index"]]
        if category not in categories: categories.append(category)
    catalogue_no=0
    for category_index,category in enumerate(categories):
        if lang=="en":
            page_font="Helvetica"
            page_bold="Helvetica-Bold"
        else:
            page_font=f"CTSEG Sans Page {category_index + 1}"
            pdfmetrics.registerFont(TTFont(page_font, str(FONT), asciiReadable=True, shapable=False))
            page_bold=page_font
        background();y=height-24*mm
        y=lines(category,20*mm,y,page_bold,21,25,170*mm,INK)-10
        for item in [p for p in products if p[c["category_index"]]==category]:
            catalogue_no+=1
            y=lines(item[c["name_index"]],20*mm,y,page_bold,13,16,170*mm,INK)-4
            origin_line=f'{catalogue_no}. {c["origin"]}: {item[c["origin_index"]]}'
            y=lines(origin_line,20*mm,y,page_font,9.5,13,165*mm,INK)-3
            use_line=f'{catalogue_no}. {c["use"]}: {item[c["desc_index"]]}'
            y=lines(use_line,20*mm,y,page_font,9.5,13,165*mm,INK)-5
            cv.setStrokeColor(STONE);cv.line(25*mm,y,width-20*mm,y);y-=12
        cv.setFont(page_bold,8);cv.setFillColor(TERRACOTTA);cv.drawString(20*mm,y,c["note"]);y-=13
        y=lines(c["pack"],20*mm,y,page_font,8.5,12,165*mm,MUTED)-3
        lines(c["docs"],20*mm,y,page_font,8.5,12,165*mm,MUTED)
        footer();cv.showPage()

    background();y=height-30*mm
    y=lines(c["contact"],20*mm,y,"CTSEG Sans",23,27,170*mm,INK)-16
    y=lines(c["company"],20*mm,y,"CTSEG Sans",14,18,170*mm,INK)-6
    y=lines(c["founded"],20*mm,y,"CTSEG Sans",10,14,170*mm,INK)-2
    y=lines(c["address"],20*mm,y,"CTSEG Sans",10,14,170*mm,INK)-8
    y=lines(c["web"],20*mm,y,"CTSEG Sans",13,17,170*mm,TERRACOTTA)-20
    for note,color in [(c["pack"],TERRACOTTA),(c["docs"],OLIVE)]:
        note_lines=_wrap(note,"CTSEG Sans",10,145*mm);box_h=len(note_lines)*15+20
        cv.setFillColor(colors.white);cv.setStrokeColor(STONE);cv.rect(25*mm,y-box_h+5,155*mm,box_h,fill=1,stroke=1)
        cv.setFillColor(color);cv.rect(25*mm,y-box_h+5,4*mm,box_h,fill=1,stroke=0)
        lines(note,33*mm,y-8,"CTSEG Sans",10,15,140*mm,INK);y-=box_h+12
    footer();cv.save()
    return path

def build_raster(lang):
    c=copy[lang]
    output=OUT/c["file"]
    width_px,height_px=1240,1754
    margin=118
    usable=width_px-(2*margin)
    fonts={}

    def hex_color(value):
        return f"#{value.hexval()[2:]}"

    def font(size,bold=False):
        key=(size,bold)
        if key not in fonts:
            fonts[key]=ImageFont.truetype(
                str(FONT_BOLD if bold else FONT),
                size,
                layout_engine=ImageFont.Layout.BASIC,
            )
        return fonts[key]

    def wrapped(draw,text,font_obj,max_width):
        words=text.split()
        result=[]
        current=""
        for word in words:
            candidate=f"{current} {word}".strip()
            if current and draw.textbbox((0,0),candidate,font=font_obj)[2] > max_width:
                result.append(current)
                current=word
            else:
                current=candidate
        if current:
            result.append(current)
        return result

    def text_block(draw,text,x,y,size,leading,max_width,color=INK,bold=False):
        font_obj=font(size,bold)
        for line in wrapped(draw,text,font_obj,max_width):
            draw.text((x,y),line,font=font_obj,fill=hex_color(color))
            y+=leading
        return y

    def new_page():
        image=PILImage.new("RGB",(width_px,height_px),hex_color(PAPER))
        return image,ImageDraw.Draw(image)

    def footer(draw,page_no):
        footer_y=1660
        draw.line((margin,footer_y,width_px-margin,footer_y),fill=hex_color(STONE),width=2)
        draw.text((margin,1680),"CTSEG",font=font(13),fill=hex_color(MUTED))
        number=str(page_no)
        bbox=draw.textbbox((0,0),number,font=font(13))
        draw.text((width_px-margin-(bbox[2]-bbox[0]),1680),number,font=font(13),fill=hex_color(MUTED))

    pages=[]
    image,draw=new_page()
    draw.rectangle((margin,82,460,212),fill=hex_color(CHARCOAL))
    logo_path=ROOT/"public"/"images"/"ctseg-logo-transparent.png"
    if logo_path.exists():
        logo=PILImage.open(logo_path).convert("RGBA")
        logo.thumbnail((285,100))
        image.paste(logo,(145,97),logo)
    y=248
    y=text_block(draw,c["title"],margin,y,48,58,usable,INK,False)+22
    y=text_block(draw,c["subtitle"],margin,y,24,32,usable,MUTED,False)+36
    intro_lines=wrapped(draw,c["intro"],font(18),usable-90)
    box_h=(len(intro_lines)*29)+38
    draw.rectangle((margin+30,y,width_px-margin-30,y+box_h),fill="#FFFFFF",outline=hex_color(STONE),width=2)
    draw.rectangle((margin+30,y,margin+55,y+box_h),fill=hex_color(TERRACOTTA))
    text_block(draw,c["intro"],margin+78,y+20,18,29,usable-110,INK,False)
    y+=box_h+52
    table_left=margin+30
    table_right=width_px-margin-30
    table_mid=(table_left+table_right)//2
    table_top=y
    table_bottom=y+215
    draw.rectangle((table_left,table_top,table_right,table_bottom),fill="#E8E3D8",outline=hex_color(STONE),width=2)
    draw.line((table_mid,table_top,table_mid,table_bottom),fill=hex_color(STONE),width=2)
    draw.line((table_left,table_top+108,table_right,table_top+108),fill=hex_color(STONE),width=2)
    text_block(draw,c["company"],table_left+24,table_top+28,21,29,(table_mid-table_left)-48,INK,False)
    text_block(draw,c["founded"],table_mid+24,table_top+34,15,22,(table_right-table_mid)-48,MUTED,False)
    text_block(draw,c["address"],table_left+24,table_top+142,16,23,(table_mid-table_left)-48,INK,False)
    text_block(draw,c["web"],table_mid+24,table_top+142,16,23,(table_right-table_mid)-48,INK,False)
    footer(draw,1)
    pages.append(image)

    categories=[]
    for item in products:
        category=item[c["category_index"]]
        if category not in categories:
            categories.append(category)
    catalogue_no=0
    for page_no,category in enumerate(categories,start=2):
        image,draw=new_page()
        y=95
        y=text_block(draw,category,margin,y,38,47,usable,INK,True)+34
        category_items=[p for p in products if p[c["category_index"]]==category]
        for item_index,item in enumerate(category_items):
            catalogue_no+=1
            y=text_block(draw,item[c["name_index"]],margin,y,25,32,usable,INK,True)+14
            origin_line=f'{catalogue_no}. {c["origin"]}: {item[c["origin_index"]]}'
            y=text_block(draw,origin_line,margin,y,18,27,usable,INK,False)+6
            use_line=f'{catalogue_no}. {c["use"]}: {item[c["desc_index"]]}'
            y=text_block(draw,use_line,margin,y,18,27,usable,INK,False)+18
            if item_index < len(category_items)-1:
                draw.line((margin+30,y,width_px-margin,y),fill=hex_color(STONE),width=2)
                y+=16
        draw.line((margin+30,y,width_px-margin,y),fill=hex_color(STONE),width=2)
        y+=16
        y=text_block(draw,c["note"],margin,y,16,24,usable,TERRACOTTA,True)+4
        y=text_block(draw,c["pack"],margin,y,15,23,usable,MUTED,False)+3
        text_block(draw,c["docs"],margin,y,15,23,usable,MUTED,False)
        footer(draw,page_no)
        pages.append(image)

    image,draw=new_page()
    y=130
    y=text_block(draw,c["contact"],margin,y,43,53,usable,INK,True)+48
    y=text_block(draw,c["company"],margin,y,26,34,usable,INK,True)+18
    y=text_block(draw,c["founded"],margin,y,19,28,usable,INK,False)
    y=text_block(draw,c["address"],margin,y,19,28,usable,INK,False)+18
    y=text_block(draw,c["web"],margin,y,24,32,usable,TERRACOTTA,True)+46
    for note,color in ((c["pack"],TERRACOTTA),(c["docs"],OLIVE)):
        note_lines=wrapped(draw,note,font(19),usable-110)
        box_h=(len(note_lines)*31)+44
        draw.rectangle((margin+30,y,width_px-margin-30,y+box_h),fill="#FFFFFF",outline=hex_color(STONE),width=2)
        draw.rectangle((margin+30,y,margin+55,y+box_h),fill=hex_color(color))
        text_block(draw,note,margin+78,y+20,19,31,usable-120,INK,False)
        y+=box_h+26
    footer(draw,len(pages)+1)
    pages.append(image)

    cv=pdfcanvas.Canvas(str(output),pagesize=A4,pageCompression=1)
    cv.setTitle(c["title"])
    cv.setAuthor("CTSEG")
    for page in pages:
        buffer=BytesIO()
        page.save(buffer,format="JPEG",quality=92,optimize=True)
        buffer.seek(0)
        cv.drawImage(ImageReader(buffer),0,0,width=A4[0],height=A4[1])
        cv.showPage()
    cv.save()
    return output

if __name__ == "__main__":
    if len(sys.argv) == 2 and sys.argv[1] in {"tr", "en"}:
        print(build_raster(sys.argv[1]))
    else:
        for language in ("tr", "en"):
            subprocess.run([sys.executable, str(Path(__file__).resolve()), language], check=True)
