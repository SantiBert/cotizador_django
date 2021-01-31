from core import views
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.IndexView, name="index"),
    path('2/', views.IndexxView, name="indexx"),
]

urlpatterns += static(settings.MEDIA_URL,
                      document_root=settings.MEDIA_ROOT)
