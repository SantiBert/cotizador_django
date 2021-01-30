from django.shortcuts import render
from django.views.generic import View
from django.shortcuts import render
# Create your views here.


def IndexView(request):
    cryptoDict = {"btc": ("Bitcoin", "fa fa-btc","f7931a"),
                  "eth": ("Ethereum", "fab fa-ethereum","627eea"),
                  "ltc": ("Litecoin", "fa fa-btc", "bfbbbb"),
                  "bch": ("Bitcoin Cash", "fa fa-btc", "50ae94"),
                  "dai": ("DAI", "fa fa-btc", "fab221"),
                  "usdt": ("Tether (USDT)", "fa fa-btc","8dc351"),
                  }

    context = {"cryptoDict": cryptoDict}
    return render(request, 'index.html', context)
