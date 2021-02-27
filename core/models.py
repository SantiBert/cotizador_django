from django.db import models
from django.utils import timezone
# Create your models here.


class Coin(models.Model):
    btc = models.CharField(max_length=50)
    eth = models.CharField(max_length=50)
    ltc = models.CharField(max_length=50)
    bch = models.CharField(max_length=50)
    dai = models.CharField(max_length=50)
    eth = models.CharField(max_length=50)
    created_date = models.DateTimeField(default=timezone.now)
