from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.template import loader

from rest_framework.decorators import api_view

from .models import User

# Create your views here.
# @api_view(["GET"])
# def index(request):

#     data = {}

#     template = loader.get_template('api/index.html')
#     return HttpResponse(template.render(data,request))
#     # return JsonResponse({"test": 1})


@api_view(["GET", "POST"])
def users(request):

    if request.method == 'GET':
        users = User.objects.all()

        # TODO query for json response
        response = {}
        
        for user in users:
            response[user.id.int] = user.name

        return JsonResponse({"users": response})

    elif request.method == 'POST':
        jsonData = request.data

        try:
            name = jsonData['name']
        except:
            return HttpResponse(status=400)

        new_user = User(name=name)
        new_user.save()

        return HttpResponse(status=200)

    else:
        return HttpResponse(status=400)