import requests
import json
from .models import Coin, Extras, Comision

dolar_value = requests.get(
    'https://api.bluelytics.com.ar/v2/latest').json()
dolar = float(dolar_value['blue']['value_sell'])

# coinranking Key for dot
headers = {
    'x-access-token': 'coinranking2deb8db1a653c91b46c8758be21a8c44a77ea3ae23066a54',
}

# call por cada coin
btc = requests.get(
    'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd', headers=headers).json()
eth = requests.get(
    'https://api.coinranking.com/v2/coin/razxDUgYGNAdQ', headers=headers).json()
ltc = requests.get(
    'https://api.coinranking.com/v2/coin/D7B1x_ks7WhV5', headers=headers).json()
dot = requests.get(
    'https://api.coinranking.com/v2/coin/25W7FG7om', headers=headers).json()
ada = requests.get(
    'https://api.coinranking.com/v2/coin/qzawljRxB5bYu', headers=headers).json()
usdt = requests.get(
    'https://api.coinranking.com/v2/coin/HIVsRcGKkPFtW', headers=headers).json()


def create_coin():
    coin = Coin.objects.create(
        btc=btc['data']['coin']['price'],
        eth=eth['data']['coin']['price'],
        ltc=ltc['data']['coin']['price'],
        dot=dot['data']['coin']['price'],
        ada=dot['data']['coin']['price'],
        usdt=usdt['data']['coin']['price'],
    )
    return coin


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
