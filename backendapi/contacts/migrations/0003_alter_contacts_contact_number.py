# Generated by Django 3.2.9 on 2021-11-15 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0002_alter_contacts_contact_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contacts',
            name='contact_number',
            field=models.IntegerField(blank=True),
        ),
    ]
