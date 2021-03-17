from .models import Coin, Extras, Comision
import requests
import json

dolar_value = requests.get('https://api.bluelytics.com.ar/v2/latest').json()
extra = Extras.objects.all()
dolar = float(dolar_value['blue']['value_sell'])

fulldolar = float(dolar + extra[0].dolar)
coins = Coin.objects.all().order_by('-created_date')

comis = Comision.objects.all()
sell = 1 + (float(comis[0].sell)/100)
buy = 1 + (float(comis[0].buy)/100)
coin = coins[0]


cryptoList = {"btc": ("{:.2f}".format((float(coin.btc) * fulldolar) * sell), "{:.2f}".format((float(coin.btc) * fulldolar) * buy)),
              "eth": ("{:.2f}".format((float(coin.eth) * fulldolar) * sell), "{:.2f}".format((float(coin.eth) * fulldolar) * buy)),
              "ltc": ("{:.2f}".format((float(coin.ltc) * fulldolar) * sell), "{:.2f}".format((float(coin.ltc) * fulldolar) * buy)),
              "dot": ("{:.2f}".format((float(coin.dot) * fulldolar) * sell), "{:.2f}".format((float(coin.dot) * fulldolar) * buy)),
              "ada": ("{:.2f}".format((float(coin.ada) * fulldolar) * sell), "{:.2f}".format((float(coin.ada) * fulldolar) * buy)),
              "usdt": ("{:.2f}".format((float(coin.usdt) * fulldolar) * sell), "{:.2f}".format((float(coin.usdt) * fulldolar) * buy)),
              }

print(cryptoList['dot'])
