from django.urls import path
from . import views

urlpatterns = [
    path('', views.PhoneListCreateView.as_view(), name='phone-list-create'),
    path('compare/<int:id1>,<int:id2>/', views.PhoneCompareView.as_view(), name='phone-compare'),  # Moved this line up
    path('<str:pk_or_name>/', views.PhoneDetailViewName.as_view(), name='phone-detail-name'),
]
