from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    homepage = open('static/index.html').read()
    return HttpResponse(homepage)