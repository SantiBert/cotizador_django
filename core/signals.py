import requests
import json
from .models import Coin

# call dolar
dolar_value = requests.get(
    'https://api.bluelytics.com.ar/v2/latest').json()
dolar = float(dolar_value['blue']['value_sell'])

# coinranking Key for dot
headers = {
    'x-access-token': 'coinranking2deb8db1a653c91b46c8758be21a8c44a77ea3ae23066a54',
}

# call por cada coin
btc = requests.get("https://criptoya.com/api/bitstamp/btc").json()
eth = requests.get("https://criptoya.com/api/bitstamp/eth").json()
ltc = requests.get("https://criptoya.com/api/universalcoins/ltc/usd").json()
dot = requests.get(
    "https://api.coinranking.com/v2/coin/25W7FG7om", headers=headers).json()
ada = requests.get("https://criptoya.com/api/letsbit/ada/ars/0.1").json()
usdt = requests.get("https://criptoya.com/api/sesocio/dai/usd/0.1").json()


def create_coin():
    coin = Coin.objects.create(
        btc=btc["last"],
        eth=eth["last"],
        ltc=ltc["totalAsk"],
        dot=dot['data']['coin']['price'],
        ada=(ada["totalAsk"]/dolar),
        usdt=usdt["totalAsk"],
    )
    return coin
