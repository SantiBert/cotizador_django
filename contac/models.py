from django.db import models
from django.utils import timezone


class Contac(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    whasapp = models.CharField(max_length=25, null=True, blank=True)
    telegram = models.CharField(max_length=50, null=True, blank=True)
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
