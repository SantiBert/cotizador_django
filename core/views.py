from django.shortcuts import render
from django.views.generic import View
from django.shortcuts import render
# Create your views here.


def IndexView(request):
    titlesList = {  "btc": "Bitcoin",
                    "eth":"Ethereum",
                    "ltc":"Litecoin",
                    "bch":"Bitcoin Cash"}

    iconList = {    "btc": "fab fa-btc",
                    "eth": "fab fa-ethereum",
                    "ltc": "fab fa-btc",
                    "bch": "fa fa-btc"}

    context = { "titlesList": titlesList,
                "iconList": iconList    }
    return render(request, 'index.html', context)
