import requests
import json
from time import sleep


# compra: ["last"] venta: ["open"]
btc = requests.get("https://criptoya.com/api/bitstamp/btc").json()
# compra: ["last"] venta: ["open"]
eth = requests.get("https://criptoya.com/api/bitstamp/eth").json()
ltc = requests.get(
    "https://criptoya.com/api/universalcoins/ltc/usd").json()  # compra: ["totalAsk"] venta: ["ask"]
bch = requests.get(
    "https://criptoya.com/api/universalcoins/bch/usd").json()  # compra: ["totalAsk"] venta: ["ask"]
# compra:["sesocio"]["totalAsk"] venta: ["sesocio"]["ask"]
dai = requests.get("https://criptoya.com/api/dai/usd/0.1").json()
usdt = requests.get(
    "https://criptoya.com/api/usdt/usd/0.1").json()  # compra:["sesocio"]["totalAsk"] venta: ["sesocio"]["ask"]

#print("venta: " + str(usdt["sesocio"]["ask"]) +"  compra: " + str(usdt["sesocio"]["totalAsk"]))
print(ltc)
