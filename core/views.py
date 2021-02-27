from django.shortcuts import render
from django.views.generic import View
from django.shortcuts import render
# Create your views here.


def IndexView(request):
    cryptoDict = {"btc": ("Bitcoin", "btcimage", "f7931a"),
                  "eth": ("Ethereum", "etcimage", "627eea"),
                  "ltc": ("Litecoin", "btcimage", "777777"),
                  "bch": ("Bitcoin Cash", "bchimage", "50ae94"),
                  "dai": ("DAI", "btcimage", "FAB62B"),
                  "usdt": ("Tether (USDT)", "btcimage", "8dc351"),
                  }

    context = {"cryptoDict": cryptoDict}
    return render(request, 'index.html', context)
