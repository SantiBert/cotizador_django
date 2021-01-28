const WebSocket = require('ws');

var usd_value = 153;
var eur_value = 180;

var buyPercent = 0.35;
var sellPercent = 0.31;

var cryptoCoin = "btc"
var channelName = "live_trades_" + cryptoCoin + "usd";

var coinType = "ARS";


let ws2 = new WebSocket("wss://ws.bitstamp.net");

let channelData = {
    event: "bts:subscribe",
    data: {
        channel: channelName,
    }
};


//enviar datos al websocket, suscribo al channel
ws2.onopen = function () {
    ws2.send(JSON.stringify(channelData));
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
        console.log(conversion);
        return result;


    }
};

function NewMessage(data) {
    if (data.channel == channelName) {
        if (data.event == "trade") {
            let sellValue = GetResult(data.data.price, sellPercent);
            let buyValue = GetResult(data.data.price, buyPercent);
            document.getElementById("101-c").value = sellValue;
            document.getElementById("101-v").value = buyValue;
    
            //this.state.buyValue = sellValue;
            //this.state.buyValue = sellValue;
        }
    }};