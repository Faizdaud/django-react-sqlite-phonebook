from django.db import models

# Create your models here.

def leading_zeroes(value):
    return value.zfill(4)

class Contacts(models.Model):
    name = models.CharField(max_length=100)
    contact_number = models.CharField(max_length=100, validators = [leading_zeroes])
