from django.test import TestCase

# Create your tests here.
class Phone:
    def __init__(self, name, specs):
        self.name = name
        self.specs = specs

def compare_phones(phone1, phone2):
    common_specs = {}
    for key, value in phone1.specs.items():
        if key in phone2.specs and phone2.specs[key] == value:
            common_specs[key] = value
    return common_specs

class PhoneCompareTestCase(TestCase):

    def test_compare_phones(self):  # Note the 'test_' prefix
        iphone_14_pro_specs = {
            "Display": "6.1 inch OLED",
            "Camera": "Triple 12MP system",
            "Battery": "3100 mAh",
            "Processor": "A16",
            "Storage": "128GB base",
            "Water Resistance": "IP68",
            "5G": "Yes"
        }

        iphone_14_pro_max_specs = {
            "Display": "6.7 inch OLED",
            "Camera": "Triple 12MP system",
            "Battery": "4000 mAh",
            "Processor": "A16",
            "Storage": "128GB base",
            "Water Resistance": "IP68",
            "5G": "Yes"
        }

        iphone_14_pro = Phone("iPhone 14 Pro", iphone_14_pro_specs)
        iphone_14_pro_max = Phone("iPhone 14 Pro Max", iphone_14_pro_max_specs)

        common_specs = compare_phones(iphone_14_pro, iphone_14_pro_max)

        print("Common Specs: ")
        for key, value in common_specs.items():
            print(f"{key}: {value}")

        self.assertIn("Processor", common_specs)
        self.assertNotIn("Display", common_specs)
