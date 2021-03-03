from django.db import models
from django.utils import timezone


class Coin(models.Model):
    btc = models.DecimalField(max_digits=19, decimal_places=2)
    eth = models.DecimalField(max_digits=19, decimal_places=2)    
    ltc = models.DecimalField(max_digits=19, decimal_places=2)    
    bch = models.DecimalField(max_digits=19, decimal_places=2)   
    dai = models.DecimalField(max_digits=19, decimal_places=2)   
    usdt = models.DecimalField(max_digits=19, decimal_places=2)    
    created_date = models.DateTimeField(default=timezone.now)


class Comision(models.Model):
    SCORE_CHOICES = zip(range(1, 100), range(1, 100))
    id = models.AutoField(primary_key=True)
    sell = models.IntegerField(choices=SCORE_CHOICES, blank=True)
    buy = models.IntegerField(choices=SCORE_CHOICES, blank=True)
    created_date = models.DateTimeField(default=timezone.now)


class Description(models.Model):
    id = models.AutoField(primary_key=True)
    descrip = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
