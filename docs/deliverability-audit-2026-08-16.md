# CTSEG teslim edilebilirlik denetimi

## Kaynaklar

- https://resend.com/docs/dashboard/domains/introduction — Resend verified domains: gönderim için doğrulanmış domain gerekir; gönderim itibarı için subdomain önerilir.
- https://resend.com/docs/dashboard/domains/dmarc — Resend DMARC rehberi: verified domain SPF ve DKIM geçişini ifade eder; DMARC için önce SPF/DKIM doğrulanmalı, başlangıçta `p=none`, sonrasında `quarantine` veya `reject` önerilir.

## 2026-08-16 DNS gözlemleri

- `ctseg.com.tr` MX kayıtları iCloud: `mx01.mail.icloud.com`, `mx02.mail.icloud.com`.
- Root SPF: `v=spf1 include:icloud.com ~all`.
- Root DMARC: `v=DMARC1; p=none; rua=mailto:9e79d8cb09b449c88392429eb119301e@dmarc-reports.cloudflare.net,mailto:info@ctseg.com.tr; adkim=r; aspf=r`.
- Resend/SES gönderim alt alanı için `send.send.ctseg.com.tr` üzerinde MX `feedback-smtp.eu-west-1.amazonses.com` ve SPF `v=spf1 include:amazonses.com ~all` mevcut.
- DKIM public key `resend._domainkey.send.ctseg.com.tr` üzerinde TXT olarak mevcut.
- Sonuç: CTSEG’in Resend gönderim altyapısı için ayrı `send.ctseg.com.tr` subdomain kayıtları mevcut; root mail alıcısı iCloud olarak korunuyor. DMARC izleme modunda (`p=none`); sıkılaştırma, tüm meşru gönderim kaynakları doğrulandıktan sonra yapılmalı.
