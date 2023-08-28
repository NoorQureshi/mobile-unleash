from django.db import models

class Brand(models.Model):
    name = models.CharField(max_length=200, unique=True)
    logo = models.ImageField(upload_to='brands/')

    def __str__(self):
        return self.name

class Device(models.Model):
    brand = models.ForeignKey(Brand, related_name='devices', on_delete=models.CASCADE)