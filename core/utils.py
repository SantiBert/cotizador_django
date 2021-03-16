from .models import Coin, Extras, Comision
import requests
import json

dolar_value = requests.get('https://api.bluelytics.com.ar/v2/latest').json()
dolar = float(dolar_value['blue']['value_sell'])

coins = Coin.objects.all().order_by('-created_date')
extra = Extras.objects.all()
comis = Comision.objects.all()
comi = comis[0]
coin = coins[0]


cryptoList = {"btc": ((float(coin.btc) * (dolar + extra[0].dolar)) * (1 + float(comi.sell)), (float(coin.btc) * (dolar + extra[0].dolar)) * (1 + float(comi.buy))),
              "eth": ((float(coin.eth) * (dolar + extra[0].dolar)) * (1 + float(comi.sell)), (float(coin.btc) * (dolar + extra[0].dolar)) * (1 + float(comi.buy))),
              "ltc": ((float(coin.ltc) * (dolar + extra[0].dolar)) * (1 + float(comi.sell)), (float(coin.btc) * (dolar + extra[0].dolar)) * (1 + float(comi.buy))),
              "dot": ((float(coin.dot) * (dolar + extra[0].dolar)) * (1 + float(comi.sell)), (float(coin.btc) * (dolar + extra[0].dolar)) * (1 + float(comi.buy))),
              "ada": ((float(coin.ada) * (dolar + extra[0].dolar)) * (1 + float(comi.sell)), (float(coin.btc) * (dolar + extra[0].dolar)) * (1 + float(comi.buy))),
              "usdt": ((float(coin.usdt) * (dolar + extra[0].dolar)) * (1 + float(comi.sell)), (float(coin.btc) * (dolar + extra[0].dolar)) * (1 + float(comi.buy))),
              }
