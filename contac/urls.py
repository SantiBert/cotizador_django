from django.contrib import admin
from django.urls import path
from .views import ContacListView, ContacCreateView, ContacUpdateView, ContacDeleteView

urlpatterns = [
    path('contac/list/', ContacListView.as_view(), name='contacList'),
    path('contac/create/', ContacCreateView.as_view(), name='contacCreate'),
    path('contac/update/<int:pk>/',
         ContacUpdateView.as_view(), name='contacUpdate'),
    path('contac/delete/<int:pk>/', ContacDeleteView.as_view(), name='contacDelete')
]
