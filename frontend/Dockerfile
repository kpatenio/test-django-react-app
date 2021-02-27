# goal to compile react app into build folder
# builder is a variable here
FROM node:12 AS builder

WORKDIR /usr/src/app

# copy both package.json and lock to image
# do this for faster building + caching
COPY ./package.json ./package-lock.json ./

# CMD - for running servers, long term applications
# RUN - for quick commands
RUN npm install

# copy from current directory to image
# copy after npm install for speed
COPY . .

# files will be made in /usr/src/app/build
RUN npm run build


FROM nginx:alpine

# copy build folder to nginx path
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html