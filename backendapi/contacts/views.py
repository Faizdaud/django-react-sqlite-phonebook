from rest_framework import viewsets
from .models import Contacts
from .serializer import ContactsSerializer
from django.shortcuts import render

# Create your views here.
class ContactsViewSet(viewsets.ModelViewSet):
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer