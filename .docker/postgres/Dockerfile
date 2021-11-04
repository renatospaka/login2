FROM postgres:11-alpine3.14

RUN apk add --no-cache bash \
    && apk add --no-cache tzdata \
    && cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

RUN apk add --no-cache shadow \
    && usermod -u 1000 postgres \
    && groupmod -g 1000 postgres
