from django.http import Http404
from .models import Phone
from .serializers import PhoneSerializer, DisplaySerializer, HardwareSerializer, BatterySerializer, CameraSerializer, DesignSerializer, CellularSerializer, MultimediaSerializer, ConnectivityAndFeaturesSerializer, ScrapedDataSerializer
from rest_framework.response import Response
from rest_framework import status, generics
from django.http import JsonResponse
from .phone_compare_utils import compare_phones
from .scrapper import scrape_phone_data
from bs4 import BeautifulSoup
import requests


class ScrapeAndReturnJSON(generics.CreateAPIView):
    serializer_class = ScrapedDataSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            url = serializer.validated_data.get('url')
            scraped_data = scrape_phone_data(url)  # Assuming this function returns the scraped data
            
            if scraped_data is not None:
                # Prepare the data for saving
                phone_data = {
                    'name': 'Samsung Galaxy A54 5G',  # Replace with actual name
                    'brand': 1,  # Replace with actual brand ID
                    'display': {k.strip(' :'): v for k, v in scraped_data['Display'].items()},
                    'hardware': {k.strip(' :'): v for k, v in scraped_data['Hardware'].items()},
                    'battery': {k.strip(' :'): v for k, v in scraped_data['Battery'].items()},
                    'camera': {k.strip(' :'): v for k, v in scraped_data['Camera'].items()},
                    'design': {k.strip(' :'): v for k, v in scraped_data['Design'].items()},
                    'cellular': {k.strip(' :'): v for k, v in scraped_data['Cellular'].items()},
                    'multimedia': {k.strip(' :'): v for k, v in scraped_data['Multimedia'].items()},
                    'connectivity_and_features': {k.strip(' :'): v for k, v in scraped_data['Connectivity & Features'].items()},
                }

                # Use your existing PhoneSerializer to save the data
                phone_serializer = PhoneSerializer(data=phone_data)
                if phone_serializer.is_valid():
                    phone_serializer.save()
                    return Response({'message': 'Data scraped and saved successfully'}, status=status.HTTP_201_CREATED)
                else:
                    return Response(phone_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            else:
                return Response({'error': 'Failed to scrape data'}, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PhoneListCreateView(generics.ListCreateAPIView):
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer


class PhoneDetailViewName(generics.RetrieveUpdateDestroyAPIView):
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer

    def get_object(self):
        pk_or_name = self.kwargs.get('pk_or_name')
        print("pk_or_name:", pk_or_name)
        # pk_or_name = pk_or_name.replace('-', ' ')
        print("pk_or_name without space:", pk_or_name)
        try:
            if pk_or_name.isdigit():
                return self.queryset.get(pk=pk_or_name)
            else:
                return self.queryset.get(slug=pk_or_name)
        except Phone.DoesNotExist:
            raise Http404("Phone not found")
            
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class PhoneCompareView(generics.GenericAPIView):
    def get(self, request, id1, id2, *args, **kwargs):
        try:
            phone1 = Phone.objects.get(id=id1)
            phone2 = Phone.objects.get(id=id2)
        except Phone.DoesNotExist:
            return JsonResponse({'error': 'Phone not found'}, status=404)
        
        common_specs = compare_phones(phone1, phone2)
        return JsonResponse(common_specs)
    