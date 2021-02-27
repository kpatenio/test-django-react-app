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

# Note: makemigrations and migrate should be run locally by the developers
# question: should we run migrate first to initialize data or commit migrations?
# todo: revisit later
RUN python manage.py migrate

# Ensure we get all the UI stuff we need
RUN python manage.py collectstatic

# what happens when you run this image
# gunicorn needs to know where the wsgi file is
# 0.0.0.0 is a "bind all interfaces" ip address - anyone can connect to port 8000
CMD [ "gunicorn", "--bind=0.0.0.0:8000", "mysite.wsgi:application" ]