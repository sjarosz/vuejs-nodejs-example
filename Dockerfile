FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY vuenodejs-app/ ./vuenodejs-app/
RUN cd vuenodejs-app && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/vuenodejs-app/dist ./vuenodejs-app/dist
COPY api/package*.json ./api/
RUN cd api && npm install
COPY api/server.js ./api/

EXPOSE 3070

CMD ["node", "./api/server.js"]
