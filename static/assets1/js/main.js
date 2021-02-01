// Primer elemento de la lista es compra y el segundo venta
var crypto_prices = {
    "btc": 0,
    "eth": 0,
    "ltc": 0,
    "bch": 0,
};

var usd_value = 153;
var eur_value = 180;

var coinList = ["btc", "eth", "ltc", "bch"]
var stupidCoins = ["dai", "usdt"]

var buyPercent = 0.35;
var sellPercent = 0.31;

var coinType = "ARS";

function changeCoin(coin) {
    coinType = coin;

    coinList.forEach(function (element) {
        price = crypto_prices[element];
        let buyPrice = GetResult(price, buyPercent);
        let sellPrice = GetResult(price, sellPercent);
        ChangeData(element, sellPrice, buyPrice);
    });
};

let ws2 = new WebSocket("wss://ws.bitstamp.net");

function GetData() {
    coinList.forEach(function (element) {
        $.ajax({
            type: 'GET',
            url: 'https://www.bitstamp.net/api/v2/ticker/' + element + 'usd/',
            dataType: "JSON",
            success: function (data) {
                let price = data.last;
                crypto_prices[element] = parseFloat(price);
                let buyPrice = GetResult(price, buyPercent);
                let sellPrice = GetResult(price, sellPercent);
                ChangeData(element, sellPrice, buyPrice);
            },
        });
    });
};

//enviar datos al websocket, suscribo al channel
ws2.onopen = function () {
    coinList.forEach(function (element) {
        let channelName = "live_trades_" + element + "usd";
        let channelData = {
            event: "bts:subscribe",
            data: {
                channel: channelName,
            }
        };
        ws2.send(JSON.stringify(channelData))
    });
};
ws2.onmessage = function (evt) {

    response = JSON.parse(evt.data);
    NewMessage(response);
};

ws2.onclose = function () {
    console.log("Websocket connection closed");
};


function GetResult(price, percent) {
    // realizar el calculo
    //Recordar chequear por la moneda seleccionada
    if (coinType == "ARS") {
        let conversion = price * usd_value
        let result = conversion * (1 + percent);
        ;
        return result;
    }
    if (coinType == "EUR") {
        let conversion = price * eur_value
        let result = conversion * (1 + percent);
        ;
        return result;
    }
    else {
        let result = price;
        return result;
    }
};

function NewMessage(data) {
    coinList.forEach(function (element) {
        let channelName = "live_trades_" + element + "usd";
        if (data.channel == channelName) {
            if (data.event == "trade") {
                console.log(element);
                console.log(data.data);
                crypto_prices[element] = data.data.price;
                let sellValue = GetResult(data.data.price, sellPercent);
                let buyValue = GetResult(data.data.price, buyPercent);
                ChangeData(element, sellValue, buyValue);
            }
        }
    });
};

function ChangeData(coinName, sellValue, buyValue) {
    let sellElement = coinName + "-c";
    let buyElement = coinName + "-v";
    if (coinName == "ltc") {
        console.log(sellValue);
        console.log(coinName);
    }

    if (coinType == "ARS") {
        document.getElementById(sellElement).innerHTML = " $ ARS " + sellValue.toFixed(2);
        document.getElementById(buyElement).innerHTML = " $ ARS " + buyValue.toFixed(2);
    }

    if (coinType == "EUR") {
        document.getElementById(sellElement).innerHTML = " € EUR " + sellValue.toFixed(2);
        document.getElementById(buyElement).innerHTML = " € EUR " + buyValue.toFixed(2);
    }

    else {
        document.getElementById(sellElement).innerHTML = " $ USA " + sellValue.toFixed(2);
        document.getElementById(buyElement).innerHTML = " $ USA " + buyValue.toFixed(2);
    }

}