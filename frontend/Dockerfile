# goal to compile react app into build folder
# builder is a variable here
FROM node:12 AS builder

WORKDIR /usr/src/app

COPY . .

# CMD - for running servers, long term applications
# RUN - for quick commands
RUN npm install

# files will be made in /usr/src/app/build
RUN npm run build


FROM nginx:alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html