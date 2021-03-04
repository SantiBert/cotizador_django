from django.db import models
from django.utils import timezone


class Coin(models.Model):
    btc = models.CharField(max_length=50)
    eth = models.CharField(max_length=50)
    ltc = models.CharField(max_length=50)
    bch = models.CharField(max_length=50)
    dai = models.CharField(max_length=50)
    usdt = models.CharField(max_length=50)
    created_date = models.DateTimeField(default=timezone.now)


class Comision(models.Model):
    SCORE_CHOICES_S = zip(range(1, 100), range(1, 100))
    SCORE_CHOICES_B = zip(range(1, 100), range(1, 100))
    id = models.AutoField(primary_key=True)
    sell = models.IntegerField(choices=SCORE_CHOICES_S, blank=True)
    buy = models.IntegerField(choices=SCORE_CHOICES_B, blank=True)
    created_date = models.DateTimeField(default=timezone.now)


class Description(models.Model):
    id = models.AutoField(primary_key=True)
    descrip = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
