from django.urls import path
from . import views

urlpatterns = [
    path('scrape/', views.ScrapeAndReturnJSON.as_view(), name='scrape-phone-data'),  # Moved this line up
    path('', views.PhoneListCreateView.as_view(), name='phone-list-create'),
    path('compare/<int:id1>,<int:id2>/', views.PhoneCompareView.as_view(), name='phone-compare'),
    path('<str:pk_or_name>/', views.PhoneDetailViewName.as_view(), name='phone-detail-name'),
]
