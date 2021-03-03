from django.contrib import admin
from django.urls import path
from .views import IndexView, AdministrationView, DescriptionAdminView, DescriptionUpdateView

urlpatterns = [
    path('', IndexView.as_view(), name="index"),
    path('administration/', AdministrationView.as_view(), name="administration"),
    path('description/', DescriptionAdminView.as_view(), name='Descrition'),
    path('description/update/<int:pk>/',
         DescriptionUpdateView.as_view(), name='DescriptionUpdate')
]
