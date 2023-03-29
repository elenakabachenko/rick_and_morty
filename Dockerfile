FROM node:16.15.1-alpine as builder

RUN mkdir -p /tmp/app
WORKDIR /tmp/app
COPY . .
RUN npm i && npm run build

FROM nginx:stable

WORKDIR /var/www
COPY --from=builder /tmp/app/build/ /var/www/


RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf.template

# This is a hack around the envsubst nginx config. Because we have `$uri` set
# up, it would replace this as well. Now we just reset it to its original value.
ENV uri \$uri


ENV PORT 80
ENV SERVER_NAME _
CMD ["sh", "-c", "envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]