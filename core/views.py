from django.shortcuts import render
from django.views.generic import View
from django.shortcuts import render
# Create your views here.


def IndexView(request):
    cryptoDict = {"btc": ("Bitcoin", "./assets/img/bitcoin.png", "f7931a"),
                  "eth": ("Ethereum", "./assets/img/etherum.png", "627eea"),
                  "ltc": ("Litecoin", "./assets/img/bitcoin.png", "bfbbbb"),
                  "bch": ("Bitcoin Cash", "./assets/img/bitcoin.png", "50ae94"),
                  "dai": ("DAI", "fa fa-btc", "./assets/img/bitcoin.png"),
                  "usdt": ("Tether (USDT)", "./assets/img/bitcoin.png", "8dc351"),
                  }

    context = {"cryptoDict": cryptoDict}
    return render(request, 'index.html', context)


def IndexxView(request):
    cryptoDict = {"btc": ("Bitcoin", "./assets/img/bitcoin.png", "f7931a"),
                  "eth": ("Ethereum", "./assets/img/etherum.png", "627eea"),
                  "ltc": ("Litecoin", "./assets/img/bitcoin.png", "bfbbbb"),
                  "bch": ("Bitcoin Cash", "./assets/img/bitcoin.png", "50ae94"),
                  "dai": ("DAI", "fa fa-btc", "./assets/img/bitcoin.png"),
                  "usdt": ("Tether (USDT)", "./assets/img/bitcoin.png", "8dc351"),
                  }

    context = {"cryptoDict": cryptoDict}
    return render(request, 'indexx.html', context)
