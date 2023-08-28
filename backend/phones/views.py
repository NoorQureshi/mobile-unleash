from django.http import Http404
from rest_framework import generics
from .models import Phone
from .serializers import PhoneSerializer
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from .phone_compare_utils import compare_phones

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
    
