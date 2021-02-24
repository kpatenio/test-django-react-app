from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.template import loader

from rest_framework.decorators import api_view

from .models import User

# Create your views here.
@api_view(["GET", "POST"])
def users(request):

    if request.method == 'GET':
        users = User.objects.all()

        # TODO query for json response
        response = {}
        
        for user in users:
            response[user.id.int] = {"name": user.name, "email": user.email}

        return JsonResponse({"users": response})

    elif request.method == 'POST':
        jsonData = request.data

        try:
            name = jsonData['name']
            email = jsonData['email']

            # just for testing
            assert u'@' in email

            new_user = User(name=name, email=email)
            new_user.save()
        except:
            return HttpResponse(status=400)

        return HttpResponse(status=200)

    else:
        return HttpResponse(status=400)