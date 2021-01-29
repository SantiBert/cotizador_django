from django.shortcuts import render
from django.views.generic import View
from django.shortcuts import render
# Create your views here.


def IndexView(request):
    cryptoDict = {"btc": ("Bitcoin", "fa fa-btc"),
                  "eth": ("Ethereum", "fab fa-ethereum"),
                  "ltc": ("Litecoin", "fa fa-btc"),
                  "bch": ("Bitcoin Cash", "fa fa-btc"),
                  "Dai": ("DAI", "fa fa-btc"),
                  "usdt": ("Tether (USDT)", "fa fa-btc"),
                  }

    context = {"cryptoDict": cryptoDict}
    return render(request, 'index.html', context)
