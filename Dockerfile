FROM node:lts-slim as firststage
WORKDIR /front/app
COPY . .
RUN npm install 
RUN npm run build


FROM node:lts-slim
WORKDIR /front/prod
COPY --from=firststage /front/app/build/ .
RUN npm install -g serve
EXPOSE 3030
ENTRYPOINT ["serve", "-s", ".", "-l", "3030"]