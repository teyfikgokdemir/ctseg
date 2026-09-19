FROM docker.io/searxng/searxng:latest

COPY config/settings.yml /etc/searxng/settings.yml

ENV SEARXNG_SETTINGS_PATH=/etc/searxng/settings.yml
ENV SEARXNG_LIMITER=false
ENV SEARXNG_PUBLIC_INSTANCE=false

EXPOSE 8080
