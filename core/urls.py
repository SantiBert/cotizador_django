from django.contrib import admin
from django.urls import path
from .views import (IndexView,
                    AdministrationView,
                    DescriptionAdminView,
                    DescriptionUpdateView,
                    ComisionAdminView,
                    ComisionUpdateView,
                    ExtrasAdminView,
                    ExtraUpdateView,
                    CitasAdminView,
                    CitasCreateView,
                    CitasUpdateView,
                    CitasDeleteView
                    )

urlpatterns = [
    path('', IndexView.as_view(), name="index"),
    path('administration/', AdministrationView.as_view(), name="administration"),
    path('description/', DescriptionAdminView.as_view(), name='Descrition'),
    path('description/update/<int:pk>/',
         DescriptionUpdateView.as_view(), name='DescriptionUpdate'),
    path('comision/list/', ComisionAdminView.as_view(), name='comisionAdmin'),
    path('comision/update/<int:pk>/',
         ComisionUpdateView.as_view(), name='comisionUpdate'),
    path('extras/list/', ExtrasAdminView.as_view(), name='extrasAdmin'),
    path('extras/update/<int:pk>/', ExtraUpdateView.as_view(), name='extrasUpdate'),
    path('notes/list/', CitasAdminView.as_view(), name='notesAdmin'),
    path('notes/create/', CitasCreateView.as_view(), name='notesCreate'),
    path('notes/update/<int:pk>/', CitasUpdateView.as_view(), name='notesUpdate'),
    path('notes/delete/<int:pk>/', CitasDeleteView.as_view(), name='notesDelete'),
]
