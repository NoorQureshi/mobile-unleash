# phone_compare_utils.py

def compare_phones(phone1, phone2):
    common_specs = {}

    # Compare Display
    if phone1.display.screen_size == phone2.display.screen_size:
        common_specs['screen_size'] = phone1.display.screen_size
    if phone1.display.screen_resolution == phone2.display.screen_resolution:
        common_specs['screen_resolution'] = phone1.display.screen_resolution
    if phone1.display.screen_quality == phone2.display.screen_quality:
        common_specs['screen_quality'] = phone1.display.screen_quality
    if phone1.display.colors == phone2.display.colors:
        common_specs['colors'] = phone1.display.colors

    # Compare Camera
    if phone1.camera.primary_camera == phone2.camera.primary_camera:
        common_specs['primary_camera'] = phone1.camera.primary_camera
    if phone1.camera.secondary_camera == phone2.camera.secondary_camera:
        common_specs['secondary_camera'] = phone1.camera.secondary_camera
    if phone1.camera.photo_quality == phone2.camera.photo_quality:
        common_specs['photo_quality'] = phone1.camera.photo_quality
    if phone1.camera.video_quality == phone2.camera.video_quality:
        common_specs['video_quality'] = phone1.camera.video_quality
    if phone1.camera.special_features == phone2.camera.special_features:
        common_specs['camera_special_features'] = phone1.camera.special_features

    # Compare Performance
    if phone1.performance.cpu == phone2.performance.cpu:
        common_specs['cpu'] = phone1.performance.cpu
    if phone1.performance.ram == phone2.performance.ram:
        common_specs['ram'] = phone1.performance.ram
    if phone1.performance.speed == phone2.performance.speed:
        common_specs['speed'] = phone1.performance.speed
    if phone1.performance.multitasking == phone2.performance.multitasking:
        common_specs['multitasking'] = phone1.performance.multitasking

    # Compare Storage
    if phone1.storage.internal_storage == phone2.storage.internal_storage:
        common_specs['internal_storage'] = phone1.storage.internal_storage
    if phone1.storage.expandable_storage == phone2.storage.expandable_storage:
        common_specs['expandable_storage'] = phone1.storage.expandable_storage

    # Compare Battery
    if phone1.battery.capacity == phone2.battery.capacity:
        common_specs['battery_capacity'] = phone1.battery.capacity
    if phone1.battery.charging_speed == phone2.battery.charging_speed:
        common_specs['charging_speed'] = phone1.battery.charging_speed
    if phone1.battery.wireless_charging == phone2.battery.wireless_charging:
        common_specs['wireless_charging'] = phone1.battery.wireless_charging

    # Compare Additional Features
    if phone1.additional_features.water_resistance == phone2.additional_features.water_resistance:
        common_specs['water_resistance'] = phone1.additional_features.water_resistance
    if phone1.additional_features.operating_system == phone2.additional_features.operating_system:
        common_specs['operating_system'] = phone1.additional_features.operating_system
    if phone1.additional_features.security_features == phone2.additional_features.security_features:
        common_specs['security_features'] = phone1.additional_features.security_features

    return common_specs
