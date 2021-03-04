import requests
import json
from .models import Coin

# call dolar
dolar_value = requests.get("https://api.bluelytics.com.ar/v2/latest").json()
dolar = float(dolar_value['blue']['value_sell'])

# call por cada coin
btc = requests.get("https://criptoya.com/api/bitstamp/btc").json()
eth = requests.get("https://criptoya.com/api/bitstamp/eth").json()
ltc = requests.get("https://criptoya.com/api/universalcoins/ltc/usd").json()
bch = requests.get("https://criptoya.com/api/universalcoins/bch/usd").json()
dai = requests.get("https://criptoya.com/api/dai/usd/0.1").json()
usdt = requests.get("https://criptoya.com/api/usdt/usd/0.1").json()


def create_coin():
    coin = Coin.objects.create(
        btc=btc["last"],
        eth=eth["last"],
        ltc=ltc["totalAsk"],
        bch=bch["totalAsk"],
        dai=dai["sesocio"]["totalAsk"],
        usdt=usdt["sesocio"]["totalAsk"],
    )
    return coin
