from django.urls import path
from .views import BrandListCreateView, BrandDetailView, BrandPhonesListView

urlpatterns = [
    path('', BrandListCreateView.as_view(), name='brand-list-create'),
    path('<int:pk>/', BrandDetailView.as_view(), name='brand-detail'),
    path('<int:brand_id>/phones/', BrandPhonesListView.as_view(), name="brand_phones"),
]
