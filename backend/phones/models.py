from django.db import models
from brands.models import Brand
from django.utils.text import slugify
from django.db.models.signals import pre_save
from django.dispatch import receiver

class Phone(models.Model):
    brand = models.ForeignKey(Brand, related_name="phones", on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=210, unique=True, blank=True)

    def __str__(self):
        return self.name

@receiver(pre_save, sender=Phone)
def create_slug(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = slugify(instance.name)

class Display(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='display')
    size = models.CharField(max_length=500)
    resolution = models.CharField(max_length=500)
    technology = models.CharField(max_length=500)
    refresh_rate = models.CharField(max_length=500)
    screen_to_body_ratio = models.CharField(max_length=500)
    features = models.TextField()

class Hardware(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='hardware')
    system_chip = models.CharField(max_length=500)
    processor = models.CharField(max_length=500)
    gpu = models.CharField(max_length=500)
    ram = models.CharField(max_length=500)
    internal_storage = models.CharField(max_length=500)
    storage_expansion = models.CharField(max_length=500)
    device_type = models.CharField(max_length=500)
    os = models.CharField(max_length=500)

class Battery(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='battery')
    capacity = models.CharField(max_length=500)
    charging = models.CharField(max_length=500)
    max_charge_speed = models.CharField(max_length=500)

class Camera(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='camera')
    rear = models.CharField(max_length=500)
    main_camera = models.CharField(max_length=500)
    specifications = models.CharField(max_length=500)
    second_camera = models.CharField(max_length=500)
    third_camera = models.CharField(max_length=500)
    video_recording = models.CharField(max_length=500)
    front = models.CharField(max_length=500)

class Design(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='design')
    dimensions = models.CharField(max_length=500)
    weight = models.CharField(max_length=500)
    materials = models.CharField(max_length=500)
    resistance = models.CharField(max_length=500)
    biometrics = models.CharField(max_length=500)
    keys = models.CharField(max_length=500)
    colors = models.TextField()

class Cellular(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='cellular')
    five_g = models.CharField(max_length=500)
    four_g_fdd = models.CharField(max_length=500)
    four_g_tdd = models.CharField(max_length=500)
    three_g = models.CharField(max_length=500)
    data_speed = models.CharField(max_length=500)
    dual_sim = models.CharField(max_length=500, null=True)
    sim_type = models.CharField(max_length=500)

class Multimedia(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='multimedia')
    headphones = models.CharField(max_length=500)
    speakers = models.CharField(max_length=500)
    screen_mirroring = models.CharField(max_length=500)
    additional_microphones = models.CharField(max_length=500)

class ConnectivityAndFeatures(models.Model):
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, null=True, related_name='connectivity_and_features')
    bluetooth = models.CharField(max_length=500)
    wifi = models.CharField(max_length=500)
    usb = models.CharField(max_length=500)
    features = models.TextField()
    location = models.CharField(max_length=500)
    sensors = models.CharField(max_length=500)
    other = models.TextField()
