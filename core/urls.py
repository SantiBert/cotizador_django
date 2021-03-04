from django.contrib import admin
from django.urls import path
from .views import (IndexView,
                    AdministrationView,
                    DescriptionAdminView,
                    DescriptionUpdateView,
                    ComisionAdminView,
                    ComisionUpdateView
                    )

urlpatterns = [
    path('', IndexView.as_view(), name="index"),
    path('administration/', AdministrationView.as_view(), name="administration"),
    path('description/', DescriptionAdminView.as_view(), name='Descrition'),
    path('description/update/<int:pk>/',
         DescriptionUpdateView.as_view(), name='DescriptionUpdate'),
    path('comision/list/', ComisionAdminView.as_view(), name='comisionAdmin'),
    path('comision/update/<int:pk>/',
         ComisionUpdateView.as_view(), name='comisionUpdate')
]
