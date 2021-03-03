def get_coin(self, request, *args, **kwargs):
    new_coin = Coin()
    new_coin.btc_c = btc["last"]
    new_coin.btc_v = btc["open"]
    new_coin.eth_c = eth["last"]
    new_coin.eth_v = eth["open"]
    new_coin.ltc_c = ltc["totalAsk"]
    new_coin.ltc_v = btc["ask"]
    new_coin.bch_c = bch["totalAsk"]
    new_coin.bch_v = btc["ask"]
    new_coin.dai_c = dai["sesocio"]["totalAsk"]
    new_coin.dai_v = dai["sesocio"]["ask"]
    new_coin.usdt_c = usdt["sesocio"]["totalAsk"]
    new_coin.usdt_v = usdt["sesocio"]["ask"]
    new_coin.save()
    return render(request, 'index.html')
