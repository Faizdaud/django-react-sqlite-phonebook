# Generated by Django 3.2.9 on 2021-11-15 17:25

import contacts.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0004_alter_contacts_contact_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contacts',
            name='contact_number',
            field=models.PositiveIntegerField(validators=[contacts.models.leading_zeroes]),
        ),
    ]
