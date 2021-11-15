from django.db.models import fields
from rest_framework import serializers
from .models import Contacts

class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = ('id', 'name', 'contact_number')