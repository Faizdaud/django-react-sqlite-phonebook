# Generated by Django 3.2.9 on 2021-11-15 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contacts',
            name='contact_number',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
