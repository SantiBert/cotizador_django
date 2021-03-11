from django.db import models
from django.utils import timezone
from ckeditor.fields import RichTextField


class Coin(models.Model):
    btc = models.CharField(max_length=50)
    eth = models.CharField(max_length=50)
    ltc = models.CharField(max_length=50)
    dot = models.CharField(max_length=50)
    ada = models.CharField(max_length=50)
    usdt = models.CharField(max_length=50)
    created_date = models.DateTimeField(default=timezone.now)


class Comision(models.Model):
    id = models.AutoField(primary_key=True)
    sell = models.CharField(max_length=50)
    buy = models.CharField(max_length=50)
    created_date = models.DateTimeField(default=timezone.now)


class Description(models.Model):
    id = models.AutoField(primary_key=True)
    descrip = RichTextField()
    created_date = models.DateTimeField(default=timezone.now)


class Citas(models.Model):
    color_choices = (
        ("ROSADO", "ROSADO"),
        ("AZUL", "AZUL"),
        ("VERDE", "VERDE"),
        ("NARANJA", "NARANJA"),
        ("AZUL OSCURO", "AZUL OSCURO"),
    )
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    text = models.TextField()
    color = models.CharField(choices=color_choices,
                             default="AZUL", max_length=80)
    created_date = models.DateTimeField(default=timezone.now)


class Extras(models.Model):
    id = models.AutoField(primary_key=True)
    dolar = models.CharField(max_length=150, default="0")
    euro = models.CharField(max_length=150, default="0")
    created_date = models.DateTimeField(default=timezone.now)
