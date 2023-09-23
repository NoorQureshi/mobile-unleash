# phone_compare_utils.py

def compare_phones(phone1, phone2):
    common_specs = {}

    # Compare Display
    if phone1.display.size == phone2.display.size:
        common_specs['screen_size'] = phone1.display.size
    if phone1.display.resolution == phone2.display.resolution:
        common_specs['screen_resolution'] = phone1.display.resolution
    if phone1.display.technology == phone2.display.technology:
        common_specs['screen_technology'] = phone1.display.technology
    if phone1.display.refresh_rate == phone2.display.refresh_rate:
        common_specs['refresh_rate'] = phone1.display.refresh_rate
    if phone1.display.screen_to_body_ratio == phone2.display.screen_to_body_ratio:
        common_specs['screen_to_body_ratio'] = phone1.display.screen_to_body_ratio
    if phone1.display.features == phone2.display.features:
        common_specs['display_features'] = phone1.display.features

    # Compare Hardware
    if phone1.hardware.system_chip == phone2.hardware.system_chip:
        common_specs['system_chip'] = phone1.hardware.system_chip
    if phone1.hardware.processor == phone2.hardware.processor:
        common_specs['processor'] = phone1.hardware.processor
    if phone1.hardware.gpu == phone2.hardware.gpu:
        common_specs['gpu'] = phone1.hardware.gpu
    if phone1.hardware.ram == phone2.hardware.ram:
        common_specs['ram'] = phone1.hardware.ram
    if phone1.hardware.internal_storage == phone2.hardware.internal_storage:
        common_specs['internal_storage'] = phone1.hardware.internal_storage
    if phone1.hardware.storage_expansion == phone2.hardware.storage_expansion:
        common_specs['storage_expansion'] = phone1.hardware.storage_expansion
    if phone1.hardware.device_type == phone2.hardware.device_type:
        common_specs['device_type'] = phone1.hardware.device_type
    if phone1.hardware.os == phone2.hardware.os:
        common_specs['os'] = phone1.hardware.os

    # Compare Battery
    if phone1.battery.capacity == phone2.battery.capacity:
        common_specs['battery_capacity'] = phone1.battery.capacity
    if phone1.battery.charging == phone2.battery.charging:
        common_specs['charging'] = phone1.battery.charging
    if phone1.battery.max_charge_speed == phone2.battery.max_charge_speed:
        common_specs['max_charge_speed'] = phone1.battery.max_charge_speed

    # Compare Camera
    if phone1.camera.rear == phone2.camera.rear:
        common_specs['camera_rear'] = phone1.camera.rear
    if phone1.camera.main_camera == phone2.camera.main_camera:
        common_specs['main_camera'] = phone1.camera.main_camera
    if phone1.camera.specifications == phone2.camera.specifications:
        common_specs['camera_specifications'] = phone1.camera.specifications
    if phone1.camera.second_camera == phone2.camera.second_camera:
        common_specs['second_camera'] = phone1.camera.second_camera
    if phone1.camera.third_camera == phone2.camera.third_camera:
        common_specs['third_camera'] = phone1.camera.third_camera
    if phone1.camera.video_recording == phone2.camera.video_recording:
        common_specs['video_recording'] = phone1.camera.video_recording
    if phone1.camera.front == phone2.camera.front:
        common_specs['front_camera'] = phone1.camera.front

    # Compare Design
    if phone1.design.dimensions == phone2.design.dimensions:
        common_specs['dimensions'] = phone1.design.dimensions
    if phone1.design.weight == phone2.design.weight:
        common_specs['weight'] = phone1.design.weight
    if phone1.design.materials == phone2.design.materials:
        common_specs['materials'] = phone1.design.materials
    if phone1.design.resistance == phone2.design.resistance:
        common_specs['resistance'] = phone1.design.resistance
    if phone1.design.biometrics == phone2.design.biometrics:
        common_specs['biometrics'] = phone1.design.biometrics
    if phone1.design.keys == phone2.design.keys:
        common_specs['keys'] = phone1.design.keys
    if phone1.design.colors == phone2.design.colors:
        common_specs['colors'] = phone1.design.colors

    # Compare Connectivity and Features
    if phone1.connectivity_and_features.bluetooth == phone2.connectivity_and_features.bluetooth:
        common_specs['bluetooth'] = phone1.connectivity_and_features.bluetooth
    if phone1.connectivity_and_features.wifi == phone2.connectivity_and_features.wifi:
        common_specs['wifi'] = phone1.connectivity_and_features.wifi
    if phone1.connectivity_and_features.usb == phone2.connectivity_and_features.usb:
        common_specs['usb'] = phone1.connectivity_and_features.usb
    if phone1.connectivity_and_features.features == phone2.connectivity_and_features.features:
        common_specs['features'] = phone1.connectivity_and_features.features
    if phone1.connectivity_and_features.location == phone2.connectivity_and_features.location:
        common_specs['location'] = phone1.connectivity_and_features.location
    if phone1.connectivity_and_features.sensors == phone2.connectivity_and_features.sensors:
        common_specs['sensors'] = phone1.connectivity_and_features.sensors
    if phone1.connectivity_and_features.other == phone2.connectivity_and_features.other:
        common_specs['other'] = phone1.connectivity_and_features.other

    # Compare Multimedia
    if phone1.multimedia.headphones == phone2.multimedia.headphones:
        common_specs['headphones'] = phone1.multimedia.headphones
    if phone1.multimedia.speakers == phone2.multimedia.speakers:
        common_specs['speakers'] = phone1.multimedia.speakers
    if phone1.multimedia.screen_mirroring == phone2.multimedia.screen_mirroring:
        common_specs['screen_mirroring'] = phone1.multimedia.screen_mirroring
    if phone1.multimedia.additional_microphones == phone2.multimedia.additional_microphones:
        common_specs['additional_microphones'] = phone1.multimedia.additional_microphones

    # Continue comparing other categories (Additional Features, etc.) in a similar way.

    return common_specs
