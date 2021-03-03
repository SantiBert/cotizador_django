import requests
import json
from .models import Coin

btc = requests.get("https://criptoya.com/api/bitstamp/btc").json()
eth = requests.get("https://criptoya.com/api/bitstamp/eth").json()
ltc = requests.get("https://criptoya.com/api/universalcoins/ltc/usd").json()
bch = requests.get("https://criptoya.com/api/universalcoins/bch/usd").json()
dai = requests.get("https://criptoya.com/api/dai/usd/0.1").json()
usdt = requests.get("https://criptoya.com/api/usdt/usd/0.1").json()


def create_coin():
    coin = Coin.objects.create(
        btc_c=btc["last"],
        btc_v=btc["open"],
        eth_c=eth["last"],
        eth_v=eth["open"],
        ltc_c=ltc["totalAsk"],
        ltc_v=ltc["ask"],
        bch_c=bch["totalAsk"],
        bch_v=bch["ask"],
        dai_c=dai["sesocio"]["totalAsk"],
        dai_v=dai["sesocio"]["ask"],
        usdt_c=usdt["sesocio"]["totalAsk"],
        usdt_v=usdt["sesocio"]["ask"]
    )
    return coin
