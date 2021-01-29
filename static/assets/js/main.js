var usd_value = 153;
var eur_value = 180;

var coinList = ["btc","eth","ltc","bch"]

var buyPercent = 0.35;
var sellPercent = 0.31;

var coinType = "ARS";

let ws2 = new WebSocket("wss://ws.bitstamp.net");

//enviar datos al websocket, suscribo al channel
ws2.onopen = function () {
    coinList.forEach(function(element) {
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
        console.log(conversion);
        return result;


    }
};

function NewMessage(data) {
    coinList.forEach(function(element) {
        let channelName = "live_trades_" + element + "usd";
        if (data.channel == channelName) {
            if (data.event == "trade") {
                let sellValue = GetResult(data.data.price, sellPercent);
                let buyValue = GetResult(data.data.price, buyPercent);
                let sellElement = element+"-c";
                let buyElement = element+"-v";

                console.log(sellElement);
                console.log(buyElement);

                document.getElementById(sellElement).innerHTML = sellValue;
                document.getElementById(buyElement).innerHTML = buyValue;
        
                //this.state.buyValue = sellValue;
                //this.state.buyValue = sellValue;
            }
        }
    }); 
};