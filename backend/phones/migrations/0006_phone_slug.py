# Generated by Django 4.2.4 on 2023-08-20 22:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0005_alter_phone_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='phone',
            name='slug',
            field=models.SlugField(blank=True, max_length=210, unique=True),
        ),
    ]