from rest_framework import serializers
from .models import (
    Phone, Display, Hardware, Battery, Camera, 
    Design, Cellular, Multimedia, ConnectivityAndFeatures
)

class DisplaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Display
        fields = '__all__'

class HardwareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hardware
        fields = '__all__'

class BatterySerializer(serializers.ModelSerializer):
    class Meta:
        model = Battery
        fields = '__all__'

class CameraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Camera
        fields = '__all__'

class DesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Design
        fields = '__all__'

class CellularSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cellular
        fields = '__all__'

class MultimediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Multimedia
        fields = '__all__'

class ConnectivityAndFeaturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConnectivityAndFeatures
        fields = '__all__'

class PhoneSerializer(serializers.ModelSerializer):
    display = DisplaySerializer()
    hardware = HardwareSerializer()
    battery = BatterySerializer()
    camera = CameraSerializer()
    design = DesignSerializer()
    cellular = CellularSerializer()
    multimedia = MultimediaSerializer()
    connectivity_and_features = ConnectivityAndFeaturesSerializer()
    image = serializers.ImageField(required=True)

    class Meta:
        model = Phone
        fields = '__all__'

    def create(self, validated_data):
        # Nested serializers data
        display_data = validated_data.pop('display')
        hardware_data = validated_data.pop('hardware')
        battery_data = validated_data.pop('battery')
        camera_data = validated_data.pop('camera')
        design_data = validated_data.pop('design')
        cellular_data = validated_data.pop('cellular')
        multimedia_data = validated_data.pop('multimedia')
        connectivity_and_features_data = validated_data.pop('connectivity_and_features')

        # Create Phone instance
        phone = Phone.objects.create(**validated_data)

        # Create related instances
        Display.objects.create(phone=phone, **display_data)
        Hardware.objects.create(phone=phone, **hardware_data)
        Battery.objects.create(phone=phone, **battery_data)
        Camera.objects.create(phone=phone, **camera_data)
        Design.objects.create(phone=phone, **design_data)
        Cellular.objects.create(phone=phone, **cellular_data)
        Multimedia.objects.create(phone=phone, **multimedia_data)
        ConnectivityAndFeatures.objects.create(phone=phone, **connectivity_and_features_data)

        return phone

    def update(self, instance, validated_data):
        # Nested serializers data
        display_data = validated_data.pop('display')
        hardware_data = validated_data.pop('hardware')
        battery_data = validated_data.pop('battery')
        camera_data = validated_data.pop('camera')
        design_data = validated_data.pop('design')
        cellular_data = validated_data.pop('cellular')
        multimedia_data = validated_data.pop('multimedia')
        connectivity_and_features_data = validated_data.pop('connectivity_and_features')

        # Update Phone details
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        # Update related models
        Display.objects.update_or_create(phone=instance, defaults=display_data)
        Hardware.objects.update_or_create(phone=instance, defaults=hardware_data)
        Battery.objects.update_or_create(phone=instance, defaults=battery_data)
        Camera.objects.update_or_create(phone=instance, defaults=camera_data)
        Design.objects.update_or_create(phone=instance, defaults=design_data)
        Cellular.objects.update_or_create(phone=instance, defaults=cellular_data)
        Multimedia.objects.update_or_create(phone=instance, defaults=multimedia_data)
        ConnectivityAndFeatures.objects.update_or_create(phone=instance, defaults=connectivity_and_features_data)

        return instance
    
    

class ScrapedDataSerializer(serializers.Serializer):
    url = serializers.CharField(max_length=2000)
