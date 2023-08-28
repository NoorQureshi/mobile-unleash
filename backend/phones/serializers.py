from rest_framework import serializers
from .models import (
    Phone, Display, Camera, Performance, Storage,
    Battery, AdditionalFeatures
)

class DisplaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Display
        fields = '__all__'

class CameraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Camera
        fields = '__all__'

class PerformanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Performance
        fields = '__all__'

class StorageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Storage
        fields = '__all__'

class BatterySerializer(serializers.ModelSerializer):
    class Meta:
        model = Battery
        fields = '__all__'

class AdditionalFeaturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdditionalFeatures
        fields = '__all__'

class PhoneSerializer(serializers.ModelSerializer):
    display = DisplaySerializer()
    camera = CameraSerializer()
    performance = PerformanceSerializer()
    storage = StorageSerializer()
    battery = BatterySerializer()
    additional_features = AdditionalFeaturesSerializer()

    class Meta:
        model = Phone
        fields = '__all__'

    def create(self, validated_data):
        display_data = validated_data.pop('display')
        camera_data = validated_data.pop('camera')
        performance_data = validated_data.pop('performance')
        storage_data = validated_data.pop('storage')
        battery_data = validated_data.pop('battery')
        additional_features_data = validated_data.pop('additional_features')

        phone = Phone.objects.create(**validated_data)

        display_data.pop('phone', None)
        Display.objects.create(phone=phone, **display_data)

        camera_data.pop('phone', None)
        Camera.objects.create(phone=phone, **camera_data)

        performance_data.pop('phone', None)
        Performance.objects.create(phone=phone, **performance_data)

        storage_data.pop('phone', None)
        Storage.objects.create(phone=phone, **storage_data)

        battery_data.pop('phone', None)
        Battery.objects.create(phone=phone, **battery_data)

        additional_features_data.pop('phone', None)
        AdditionalFeatures.objects.create(phone=phone, **additional_features_data)
            
        return phone
    

    def update(self, instance, validated_data):
        display_data = validated_data.pop('display')
        camera_data = validated_data.pop('camera')
        performance_data = validated_data.pop('performance')
        storage_data = validated_data.pop('storage')
        battery_data = validated_data.pop('battery')
        additional_features_data = validated_data.pop('additional_features')

        # Update Phone details
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        # Update related models
        Display.objects.update_or_create(phone=instance, defaults=display_data)
        Camera.objects.update_or_create(phone=instance, defaults=camera_data)
        Performance.objects.update_or_create(phone=instance, defaults=performance_data)
        Storage.objects.update_or_create(phone=instance, defaults=storage_data)
        Battery.objects.update_or_create(phone=instance, defaults=battery_data)
        AdditionalFeatures.objects.update_or_create(phone=instance, defaults=additional_features_data)

        return instance
