from rest_framework import generics
from phones.models import Phone # Import Phone from the phones app
from phones.serializers import PhoneSerializer # Import PhoneSerializer from phones app
from .models import Brand
from .serializers import BrandSerializer

class BrandListCreateView(generics.ListCreateAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class BrandDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class BrandPhonesListView(generics.ListAPIView):
    serializer_class = PhoneSerializer

    def get_queryset(self):
        brand_id = self.kwargs['brand_id']
        return Phone.objects.filter(brand_id=brand_id)
