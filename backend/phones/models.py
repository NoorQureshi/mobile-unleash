from django.db import models
from brands.models import Brand
from django.utils.text import slugify
from django.db.models.signals import pre_save
from django.dispatch import receiver

class Phone(models.Model):
    brand = models.ForeignKey(Brand, related_name="phones" , on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='phones/images/')
    key_features = models.TextField()
    price = models.FloatField()  # added here for easier access
    currency = models.CharField(max_length=10)  # added here for easier access
    where_to_buy = models.TextField()  # added here for easier access
    slug = models.SlugField(max_length=210, unique=True, blank=True)
    release_date = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.name
    
@receiver(pre_save, sender=Phone)
def create_slug(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = slugify(instance.name)

class Display(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='display')
    screen_size = models.CharField(max_length=500)
    screen_resolution = models.CharField(max_length=500)
    screen_quality = models.CharField(max_length=500)
    colors = models.CharField(max_length=500)

class Camera(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='camera')
    primary_camera = models.CharField(max_length=500)
    secondary_camera = models.CharField(max_length=500)
    photo_quality = models.CharField(max_length=500)
    video_quality = models.CharField(max_length=500)
    special_features = models.TextField()

class Performance(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='performance')
    cpu = models.CharField(max_length=500)
    ram = models.CharField(max_length=500)
    speed = models.CharField(max_length=500)
    multitasking = models.CharField(max_length=500)

class Storage(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='storage')
    internal_storage = models.CharField(max_length=500)
    expandable_storage = models.CharField(max_length=500, null=True, blank=True)

class Battery(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='battery')
    capacity = models.CharField(max_length=500)
    charging_speed = models.CharField(max_length=500)
    wireless_charging = models.BooleanField()

class AdditionalFeatures(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='additional_features')
    water_resistance = models.BooleanField()
    operating_system = models.CharField(max_length=500)
    security_features = models.TextField()

