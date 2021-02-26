FROM python:3.7

# cd to container dir
# don't have to change!
WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# copy from host (current) to container (current)
COPY . .

# Go to proper directory so that we can run the command below
WORKDIR ./mysite

EXPOSE 8000

# what happens when you run this image
# gunicorn needs to know where the wsgi file is
# 0.0.0.0 is a "bind all interfaces" ip address - anyone can connect to port 8000
CMD [ "gunicorn", "--bind=0.0.0.0:8000", "mysite.wsgi:application" ]