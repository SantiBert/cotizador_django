document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );
  /*
  function directo(tipo, moneda) {
      if (tipo == 'compra') {
          monedalocal = 0;
          $('#operacion').val(0);
          $('#option1').prop('checked', true);
          $('#option1').prop('checked', false);
          $('#montoaenviar').val(5000);
      }
      if (tipo == 'venta') {
          monedalocal = 1;
          $('#operacion').val(1);
          $('#option3').prop('checked', true);
          $('#option3').prop('checked', false);
          $('#montoaenviar').val(1);
      }
      $("#monedacambio").val(moneda).change();
      monedaausar();
      enviardinero(monedalocal);
  }
  */
  
  var pventa = 0;
  var pcompra = 0;
  
  var usdars = 0;
  var usdarsventa = 0;
  var eurusd = 0;
  
  //Monedas
  var daiventa = 0;
  var daicompra = 0;
  var daiventausd = 0;
  var daicomprausd = 0;
  var daiventaeur = 0;
  var daicompraeur = 0;
  var dairatio = 0;
  
  var usdtventa = 0;
  var usdtcompra = 0;
  var usdtventausd = 0;
  var usdtcomprausd = 0;
  var usdtventaeur = 0;
  var usdtcompraeur = 0;
  
  var usdcratio = 0;
  
  var btcventa = 0;
  var btccompra = 0;
  var ethventa = 0;
  var ethcompra = 0;
  var litecoinventa = 0;
  var litecoincompra = 0;
  var bitcoincashventa = 0;
  var bitcoincashcompra = 0;
  
  //Medios de Pago
  var transferencia = 0;
  var mercadopagosc = 0;
  var mercadopagodc = 0;
  var pagofacil = 0;
  var paypal = 0;
  var cuentadigital = 0;
  var skrill = 0;
  var neteller = 0;
  var p2p = 0;
  
  var transferenciav = 0;
  var mercadopagoscv = 0;
  var mercadopagodcv = 0;
  var pagofacilv = 0;
  var paypalv = 0;
  var cuentadigitalv = 0;
  var skrillv = 0;
  var netellerv = 0;
  var p2pv = 0;
  
  var compraventa = 0;
  
  var monedas = "";
  
  function fijos(moneda) {
    monedas = moneda;
    setTimeout(function () {
      $.ajax({
        type: "POST",
        dataType: "json",
        url: "php/fijos.php",
        success: function (data) {
          pventa = data["pventa"];
          pcompra = data["pcompra"];
  
          daiventa = data["daiventa"];
          daicompra = data["daicompra"];
          daiventausd = data["daiventausd"];
          daicomprausd = data["daicomprausd"];
          daiventaeur = data["daiventaeur"];
          daicompraeur = data["daicompraeur"];
  
          dairatio = data["dairatio"];
          usdcratio = data["usdcratio"];
  
          usdtventa = data["usdtventa"];
          usdtcompra = data["usdtcompra"];
          usdtventausd = data["usdtventausd"];
          usdtcomprausd = data["usdtcomprausd"];
          usdtventaeur = data["usdtventaeur"];
          usdtcompraeur = data["usdtcompraeur"];
  
          usdars = data["usdars"];
          usdarsventa = data["usdarsventa"];
          eurusd = data["eurusd"];
  
          if (pcompra < 0) {
            $("#bits1").html(pcompra + "%");
          } else {
            $("#bits1").html("+" + pcompra + "%");
          }
          if (pventa < 0) {
            $("#bits2").html(pventa + "%");
          } else {
            $("#bits2").html("+" + pventa + "%");
          }
          $("#bits3").html(usdars);
  
          transferencia = data["transferencia"];
          mercadopagosc = data["mercadopagosc"];
          mercadopagodc = data["mercadopagodc"];
          pagofacil = data["pagofacil"];
          paypal = data["paypal"];
          cuentadigital = data["cuentadigital"];
          skrill = data["skrill"];
          neteller = data["neteller"];
          p2p = data["p2p"];
  
          transferenciav = data["transferenciav"];
          mercadopagoscv = data["mercadopagoscv"];
          mercadopagodcv = data["mercadopagodcv"];
          pagofacilv = data["pagofacilv"];
          paypalv = data["paypalv"];
          cuentadigitalv = data["cuentadigitalv"];
          skrillv = data["skrillv"];
          netellerv = data["netellerv"];
          p2pv = data["p2pv"];
  
          if (moneda == "USD") {
            daidif = parseFloat(data["dai-24usd"]);
            usdtdif = parseFloat(data["usdt-24usd"]);
            if (daiventausd == 0) {
              daiventa =
                (((usdarsventa * pventa) / 100 + parseFloat(usdarsventa)) *
                  dairatio) /
                parseFloat(usdarsventa);
            } else {
              daiventa = daiventausd;
            }
            if (daicomprausd == 0) {
              daicompra =
                (((usdars * pcompra) / 100 + parseFloat(usdars)) * dairatio) /
                parseFloat(usdars);
            } else {
              daicompra = daicomprausd;
            }
  
            if (usdtventausd == 0) {
              usdtventa =
                ((usdarsventa * pventa) / 100 + parseFloat(usdarsventa)) /
                parseFloat(usdarsventa);
            } else {
              usdtventa = usdtventausd;
            }
            if (usdtcomprausd == 0) {
              usdtcompra =
                ((usdars * pcompra) / 100 + parseFloat(usdars)) /
                parseFloat(usdars);
            } else {
              usdtcompra = usdtcomprausd;
            }
          } else if (moneda == "EUR") {
            daidif = parseFloat(data["dai-24eur"]);
            usdtdif = parseFloat(data["usdt-24eur"]);
            if (daiventaeur == 0) {
              daiventa =
                (((usdarsventa * pventa) / 100 + parseFloat(usdarsventa)) /
                  parseFloat(usdarsventa) /
                  eurusd) *
                dairatio;
            } else {
              daiventa = daiventaeur;
            }
            if (daicompraeur == 0) {
              daicompra =
                (((usdars * pcompra) / 100 + parseFloat(usdars)) * eurusd) /
                parseFloat(usdars) /
                dairatio;
            } else {
              daicompra = daicompraeur;
            }
  
            if (usdtventaeur == 0) {
              usdtventa =
                ((usdarsventa * pventa) / 100 + parseFloat(usdarsventa)) /
                parseFloat(usdarsventa) /
                eurusd;
            } else {
              usdtventa = usdtventaeur;
            }
            if (usdtcompraeur == 0) {
              usdtcompra =
                ((usdars * pcompra) / 100 + parseFloat(usdars)) /
                parseFloat(usdars) /
                eurusd;
            } else {
              usdtcompra = usdtcompraeur;
            }
          } else {
            daidif = parseFloat(data["dai-24"]);
            usdtdif = parseFloat(data["usdt-24"]);
            if (daiventa == 0) {
              daiventa =
                ((usdarsventa * pventa) / 100 + parseFloat(usdarsventa)) *
                dairatio;
            } else {
              daiventa = daiventa;
            }
            if (daicompra == 0) {
              daicompra =
                ((usdars * pcompra) / 100 + parseFloat(usdars)) * dairatio;
            } else {
              daicompra = daicompra;
            }
  
            if (usdtventa == 0) {
              usdtventa = (usdarsventa * pventa) / 100 + parseFloat(usdarsventa);
            } else {
              usdtventa = usdtventa;
            }
            if (usdtcompra == 0) {
              usdtcompra = (usdars * pcompra) / 100 + parseFloat(usdars);
            } else {
              usdtcompra = usdtcompra;
            }
          }
  
          $("#ventadai").html("<span id='counter5'>" + daicompra + "</span>");
          $("#compradai").html("<span id='counter6'>" + daiventa + "</span>");
          $("#ventadai2").val(daicompra);
          $("#compradai2").val(daiventa);
          contar("#counter5", daicompra);
          contar("#counter6", daiventa);
  
          $("#ventausdt").html("<span id='counter7'>" + usdtcompra + "</span>");
          $("#comprausdt").html("<span id='counter8'>" + usdtventa + "</span>");
          $("#ventausdt2").val(usdtcompra);
          $("#comprausdt2").val(usdtventa);
          contar("#counter7", usdtcompra);
          contar("#counter8", usdtventa);
  
          var promediodai = (parseFloat(daiventa) + parseFloat(daicompra)) / 2;
          var diferenciadai = promediodai - daidif;
          var finaldai = (diferenciadai * 100) / promediodai;
          if (finaldai < 0) {
            $("#diferenciadai").html(
              "<span class='mt-3 diferencian'><strong>" +
                finaldai.toFixed(2) +
                "% | 24hs</strong></span>"
            );
          } else {
            $("#diferenciadai").html(
              "<span class='mt-3 diferenciap'><strong>" +
                finaldai.toFixed(2) +
                "% | 24hs</strong></span>"
            );
          }
  
          var promediousdt = (parseFloat(usdtventa) + parseFloat(usdtcompra)) / 2;
          var diferenciausdt = promediousdt - usdtdif;
          var finalusdt = (diferenciausdt * 100) / promediousdt;
          if (finalusdt < 0) {
            $("#diferenciausdt").html(
              "<span class='mt-3 diferencian'><strong>" +
                finalusdt.toFixed(2) +
                "% | 24hs</strong></span>"
            );
          } else {
            $("#diferenciausdt").html(
              "<span class='mt-3 diferenciap'><strong>" +
                finalusdt.toFixed(2) +
                "% | 24hs</strong></span>"
            );
          }
        },
      });
    }, 100);
  }
  
  function iniciacion(moneda) {
    monedas = moneda;
    $.getJSON("php/btcusd.php", function (data) {
      setTimeout(function () {
        if (moneda == "ARS") {
          unic = data["last"] * usdars;
          venta = (unic * pventa) / 100;
          compra = (unic * pcompra) / 100;
          venta = parseFloat(venta) + parseFloat(unic);
          compra = parseFloat(compra) + parseFloat(unic);
        } else if (moneda == "EUR") {
          unic = data["last"] * eurusd;
          venta = (unic * pventa) / 100;
          compra = (unic * pcompra) / 100;
          venta = parseFloat(venta) + parseFloat(unic);
          compra = parseFloat(compra) + parseFloat(unic);
        } else {
          venta = (data["last"] * pventa) / 100;
          compra = (data["last"] * pcompra) / 100;
          venta = parseFloat(venta) + parseFloat(data["last"]);
          compra = parseFloat(compra) + parseFloat(data["last"]);
        }
  
        $("#ventabtc").html(
          "<span id='counter1'>" + compra.toFixed(2) + "</span>"
        );
        $("#comprabtc").html(
          "<span id='counter2'>" + venta.toFixed(2) + "</span>"
        );
        contar("#counter1", compra.toFixed(2));
        contar("#counter2", venta.toFixed(2));
  
        btcventa = compra.toFixed(2);
        btccompra = venta.toFixed(2);
  
        $("#ventabtc2").val(btccompra);
        $("#comprabtc2").val(btcventa);
  
        var diferenciabtc = data["last"] - data["vwap"];
        var finalbtc = (diferenciabtc * 100) / data["last"];
        if (finalbtc < 0) {
          $("#diferenciabtc").html(
            "<span class='mt-3 diferencian'><strong>" +
              finalbtc.toFixed(2) +
              "% | 24hs</strong></span>"
          );
        } else {
          $("#diferenciabtc").html(
            "<span class='mt-3 diferenciap'><strong>" +
              finalbtc.toFixed(2) +
              "% | 24hs</strong></span>"
          );
        }
      }, 200);
    });
    $.getJSON("php/ethusd.php", function (data) {
      setTimeout(function () {
        if (moneda == "ARS") {
          unic = data["last"] * usdars;
          venta = (unic * pventa) / 100;
          compra = (unic * pcompra) / 100;
          venta = parseFloat(venta) + parseFloat(unic);
          compra = parseFloat(compra) + parseFloat(unic);
        } else if (moneda == "EUR") {
          unic = data["last"] * eurusd;
          venta = (unic * pventa) / 100;
          compra = (unic * pcompra) / 100;
          venta = parseFloat(venta) + parseFloat(unic);
          compra = parseFloat(compra) + parseFloat(unic);
        } else {
          venta = (data["last"] * pventa) / 100;
          compra = (data["last"] * pcompra) / 100;
          venta = parseFloat(venta) + parseFloat(data["last"]);
          compra = parseFloat(compra) + parseFloat(data["last"]);
        }
        $("#ventaeth").html(
          "<span id='counter3'>" + compra.toFixed(2) + "</span>"
        );
        $("#compraeth").html(
          "<span id='counter4'>" + venta.toFixed(2) + "</span>"
        );
        contar("#counter3", compra.toFixed(2));
        contar("#counter4", venta.toFixed(2));
  
        ethventa = compra.toFixed(2);
        ethcompra = venta.toFixed(2);
  
        $("#ventaeth2").val(ethcompra);
        $("#compraeth2").val(ethventa);
  
        var diferenciaeth = data["last"] - data["vwap"];
        var finaleth = (diferenciaeth * 100) / data["last"];
        if (finaleth < 0) {
          $("#diferenciaeth").html(
            "<span class='mt-3 diferencian'><strong>" +
              finaleth.toFixed(2) +
              "% | 24hs</strong></span>"
          );
        } else {
          $("#diferenciaeth").html(
            "<span class='mt-3 diferenciap'><strong>" +
              finaleth.toFixed(2) +
              "% | 24hs</strong></span>"
          );
        }
      }, 200);
    });
    $.getJSON("php/ltcusd.php", function (data) {
      setTimeout(function () {
        if (moneda == "ARS") {
          unic = data["last"] * usdars;
          venta = (unic * pventa) / 100;
          compra = (unic * pcompra) / 100;
          venta = parseFloat(venta) + parseFloat(unic);
          compra = parseFloat(compra) + parseFloat(unic);
        } else if (moneda == "EUR") {
          unic = data["last"] * eurusd;
          venta = (unic * pventa) / 100;
          compra = (unic * pcompra) / 100;
          venta = parseFloat(venta) + parseFloat(unic);
          compra = parseFloat(compra) + parseFloat(unic);
        } else {
          venta = (data["last"] * pventa) / 100;
          compra = (data["last"] * pcompra) / 100;
          venta = parseFloat(venta) + parseFloat(data["last"]);
          compra = parseFloat(compra) + parseFloat(data["last"]);
        }
        $("#ventalitecoin").html(
          "<span id='counter9'>" + compra.toFixed(2) + "</span>"
        );
        $("#compralitecoin").html(
          "<span id='counter10'>" + venta.toFixed(2) + "</span>"
        );
        contar("#counter9", compra.toFixed(2));
        contar("#counter10", venta.toFixed(2));
  
        litecoinventa = compra.toFixed(2);
        litecoincompra = venta.toFixed(2);
  
        $("#ventalitecoin2").val(litecoincompra);
        $("#compralitecoin2").val(litecoinventa);
  
        var diferencialitecoin = data["last"] - data["vwap"];
        var finallitecoin = (diferencialitecoin * 100) / data["last"];
        if (finallitecoin < 0) {
          $("#diferencialitecoin").html(
            "<span class='mt-3 diferencian'><strong>" +
              finallitecoin.toFixed(2) +
              "% | 24hs</strong></span>"
          );
        } else {
          $("#diferencialitecoin").html(
            "<span class='mt-3 diferenciap'><strong>" +
              finallitecoin.toFixed(2) +
              "% | 24hs</strong></span>"
          );
        }
      }, 200);
    });
    $.getJSON("php/bchusd.php", function (data) {
      setTimeout(function () {
        if (moneda == "ARS") {
          unic = data["last"] * usdars;
          venta = (unic * pventa) / 100;
          compra = (unic * pcompra) / 100;
          venta = parseFloat(venta) + parseFloat(unic);
          compra = parseFloat(compra) + parseFloat(unic);
        } else if (moneda == "EUR") {
          unic = data["last"] * eurusd;
          venta = (unic * pventa) / 100;
          compra = (unic * pcompra) / 100;
          venta = parseFloat(venta) + parseFloat(unic);
          compra = parseFloat(compra) + parseFloat(unic);
        } else {
          venta = (data["last"] * pventa) / 100;
          compra = (data["last"] * pcompra) / 100;
          venta = parseFloat(venta) + parseFloat(data["last"]);
          compra = parseFloat(compra) + parseFloat(data["last"]);
        }
        $("#ventabitcoincash").html(
          "<span id='counter11'>" + compra.toFixed(2) + "</span>"
        );
        $("#comprabitcoincash").html(
          "<span id='counter12'>" + venta.toFixed(2) + "</span>"
        );
        contar("#counter11", compra.toFixed(2));
        contar("#counter12", venta.toFixed(2));
  
        bitcoincashventa = compra.toFixed(2);
        bitcoincashcompra = venta.toFixed(2);
  
        $("#ventabitcoincash2").val(bitcoincashcompra);
        $("#comprabitcoincash2").val(bitcoincashventa);
  
        var diferenciabitcoincash = data["last"] - data["vwap"];
        var finalbitcoincash = (diferenciabitcoincash * 100) / data["last"];
        if (finalbitcoincash < 0) {
          $("#diferenciabitcoincash").html(
            "<span class='mt-3 diferencian'><strong>" +
              finalbitcoincash.toFixed(2) +
              "% | 24hs</strong></span>"
          );
        } else {
          $("#diferenciabitcoincash").html(
            "<span class='mt-3 diferenciap'><strong>" +
              finalbitcoincash.toFixed(2) +
              "% | 24hs</strong></span>"
          );
        }
      }, 200);
    });
  }
  
  $(document).ready(function () {
    fijos("ARS");
    iniciacion("ARS");
  });
  setInterval(function () {
    vistamoneda = $("#vistamoneda").val();
    fijos(vistamoneda);
    iniciacion(vistamoneda);
  }, 120000); //120 segundos
  
  //BTC
  var subscribeMsg = {
    event: "bts:subscribe",
    data: {
      channel: "live_trades_btcusd",
    },
  };
  var ws;
  initWebsocket();
  
  function serializeTrade(data) {
    if (monedas == "ARS") {
      unic = data.price * usdars;
      venta = (unic * pventa) / 100;
      compra = (unic * pcompra) / 100;
      venta = parseFloat(venta) + parseFloat(unic);
      compra = parseFloat(compra) + parseFloat(unic);
    } else if (monedas == "EUR") {
      unic = data.price * eurusd;
      venta = (unic * pventa) / 100;
      compra = (unic * pcompra) / 100;
      venta = parseFloat(venta) + parseFloat(unic);
      compra = parseFloat(compra) + parseFloat(unic);
    } else {
      venta = (data.price * pventa) / 100;
      compra = (data.price * pcompra) / 100;
      venta = parseFloat(venta) + parseFloat(data.price);
      compra = parseFloat(compra) + parseFloat(data.price);
    }
  
    $("#ventabtc").html("<span id='counter1'>" + compra.toFixed(2) + "</span>");
    $("#comprabtc").html("<span id='counter2'>" + venta.toFixed(2) + "</span>");
    contar("#counter1", compra.toFixed(2));
    contar("#counter2", venta.toFixed(2));
  
    btcventa = compra.toFixed(2);
    btccompra = venta.toFixed(2);
  
    $("#ventabtc2").val(btccompra);
    $("#comprabtc2").val(btcventa);
  
    //placeholder.innerHTML = data.price; //precioventa preciocompra data.timestamp
  }
  
  function initWebsocket() {
    ws = new WebSocket("wss://ws.bitstamp.net");
    ws.onopen = function () {
      ws.send(JSON.stringify(subscribeMsg));
    };
    ws.onmessage = function (evt) {
      response = JSON.parse(evt.data);
      switch (response.event) {
        case "trade": {
          serializeTrade(response.data);
          break;
        }
        case "bts:request_reconnect": {
          initWebsocket();
          break;
        }
      }
    };
    ws.onclose = function () {
      console.log("Websocket connection closed");
      initWebsocket();
    };
  }
  
  //ETH
  var subscribeMsg2 = {
    event: "bts:subscribe",
    data: {
      channel: "live_trades_ethusd",
    },
  };
  var ws2;
  initWebsocket2();
  
  function serializeTrade2(data) {
    if (monedas == "ARS") {
      unic = data.price * usdars;
      venta = (unic * pventa) / 100;
      compra = (unic * pcompra) / 100;
      venta = parseFloat(venta) + parseFloat(unic);
      compra = parseFloat(compra) + parseFloat(unic);
    } else if (monedas == "EUR") {
      unic = data.price * eurusd;
      venta = (unic * pventa) / 100;
      compra = (unic * pcompra) / 100;
      venta = parseFloat(venta) + parseFloat(unic);
      compra = parseFloat(compra) + parseFloat(unic);
    } else {
      venta = (data.price * pventa) / 100;
      compra = (data.price * pcompra) / 100;
      venta = parseFloat(venta) + parseFloat(data.price);
      compra = parseFloat(compra) + parseFloat(data.price);
    }
    $("#ventaeth").html("<span id='counter3'>" + compra.toFixed(2) + "</span>");
    $("#compraeth").html("<span id='counter4'>" + venta.toFixed(2) + "</span>");
    contar("#counter3", compra.toFixed(2));
    contar("#counter4", venta.toFixed(2));
  
    ethventa = compra.toFixed(2);
    ethcompra = venta.toFixed(2);
  
    $("#ventaeth2").val(ethcompra);
    $("#compraeth2").val(ethventa);
  
    //placeholder.innerHTML = data.price; //precioventa preciocompra data.timestamp
  }
  
  function initWebsocket2() {
    ws2 = new WebSocket("wss://ws.bitstamp.net");
    ws2.onopen = function () {
      ws2.send(JSON.stringify(subscribeMsg2));
    };
    ws2.onmessage = function (evt) {
      response = JSON.parse(evt.data);
      switch (response.event) {
        case "trade": {
          serializeTrade2(response.data);
          break;
        }
        case "bts:request_reconnect": {
          initWebsocket2();
          break;
        }
      }
    };
    ws2.onclose = function () {
      console.log("Websocket connection closed");
      initWebsocket2();
    };
  }
  
  //Litecoin
  var subscribeMsg3 = {
    event: "bts:subscribe",
    data: {
      channel: "live_trades_ltcusd",
    },
  };
  var ws3;
  initWebsocket3();
  
  function serializeTrade3(data) {
    if (monedas == "ARS") {
      unic = data.price * usdars;
      venta = (unic * pventa) / 100;
      compra = (unic * pcompra) / 100;
      venta = parseFloat(venta) + parseFloat(unic);
      compra = parseFloat(compra) + parseFloat(unic);
    } else if (monedas == "EUR") {
      unic = data.price * eurusd;
      venta = (unic * pventa) / 100;
      compra = (unic * pcompra) / 100;
      venta = parseFloat(venta) + parseFloat(unic);
      compra = parseFloat(compra) + parseFloat(unic);
    } else {
      venta = (data.price * pventa) / 100;
      compra = (data.price * pcompra) / 100;
      venta = parseFloat(venta) + parseFloat(data.price);
      compra = parseFloat(compra) + parseFloat(data.price);
    }
    $("#ventalitecoin").html(
      "<span id='counter9'>" + compra.toFixed(2) + "</span>"
    );
    $("#compralitecoin").html(
      "<span id='counter10'>" + venta.toFixed(2) + "</span>"
    );
    contar("#counter9", compra.toFixed(2));
    contar("#counter10", venta.toFixed(2));
  
    litecoinventa = compra.toFixed(2);
    litecoincompra = venta.toFixed(2);
  
    $("#ventalitecoin2").val(litecoincompra);
    $("#compralitecoin2").val(litecoinventa);
  
    //placeholder.innerHTML = data.price; //precioventa preciocompra data.timestamp
  }
  
  function initWebsocket3() {
    ws3 = new WebSocket("wss://ws.bitstamp.net");
    ws3.onopen = function () {
      ws3.send(JSON.stringify(subscribeMsg3));
    };
    ws3.onmessage = function (evt) {
      response = JSON.parse(evt.data);
      switch (response.event) {
        case "trade": {
          serializeTrade3(response.data);
          break;
        }
        case "bts:request_reconnect": {
          initWebsocket3();
          break;
        }
      }
    };
    ws3.onclose = function () {
      console.log("Websocket connection closed");
      initWebsocket3();
    };
  }
  
  //BITCOIN CASH
  var subscribeMsg4 = {
    event: "bts:subscribe",
    data: {
      channel: "live_trades_bchusd",
    },
  };
  var ws4;
  initWebsocket4();
  
  function serializeTrade4(data) {
    if (monedas == "ARS") {
      unic = data.price * usdars;
      venta = (unic * pventa) / 100;
      compra = (unic * pcompra) / 100;
      venta = parseFloat(venta) + parseFloat(unic);
      compra = parseFloat(compra) + parseFloat(unic);
    } else if (monedas == "EUR") {
      unic = data.price * eurusd;
      venta = (unic * pventa) / 100;
      compra = (unic * pcompra) / 100;
      venta = parseFloat(venta) + parseFloat(unic);
      compra = parseFloat(compra) + parseFloat(unic);
    } else {
      venta = (data.price * pventa) / 100;
      compra = (data.price * pcompra) / 100;
      venta = parseFloat(venta) + parseFloat(data.price);
      compra = parseFloat(compra) + parseFloat(data.price);
    }
    $("#ventabitcoincash").html(
      "<span id='counter11'>" + compra.toFixed(2) + "</span>"
    );
    $("#comprabitcoincash").html(
      "<span id='counter12'>" + venta.toFixed(2) + "</span>"
    );
    contar("#counter11", compra.toFixed(2));
    contar("#counter12", venta.toFixed(2));
  
    bitcoincashventa = compra.toFixed(2);
    bitcoincashcompra = venta.toFixed(2);
  
    $("#ventabitcoincash2").val(bitcoincashcompra);
    $("#comprabitcoincash2").val(bitcoincashventa);
  
    //placeholder.innerHTML = data.price; //precioventa preciocompra data.timestamp
  }
  
  function initWebsocket4() {
    ws4 = new WebSocket("wss://ws.bitstamp.net");
    ws4.onopen = function () {
      ws4.send(JSON.stringify(subscribeMsg4));
    };
    ws4.onmessage = function (evt) {
      response = JSON.parse(evt.data);
      switch (response.event) {
        case "trade": {
          serializeTrade4(response.data);
          break;
        }
        case "bts:request_reconnect": {
          initWebsocket4();
          break;
        }
      }
    };
    ws4.onclose = function () {
      console.log("Websocket connection closed");
      initWebsocket4();
    };
  }
  
  function contar(id, valor) {
    moneda = $("#vistamoneda").val();
    desde = valor / 2;
    $(id)
      .prop("Counter", desde)
      .animate(
        {
          Counter: $(id).text(),
        },
        {
          duration: 500,
          easing: "swing",
          step: function (now) {
            var value = now;
            var result = value.toLocaleString("de-DE", {
              //es-ar
              style: "currency",
              currency: moneda,
              minimumFractionDigits: 2,
            });
            $(id).text(result);
          },
        }
      );
  }
  
  function monedaausar() {
    enquemoneda = $("#cambiocalculadora").val();
  
    var moneda = $("#monedacambio").val();
    if (moneda == "dai") {
      $("#monedaausar").html("Pesos Argentinos");
    } else if (moneda == "btc") {
      $("#monedaausar").html("DÃ³lares Estadounidenses");
    } else if (moneda == "usdt") {
      $("#monedaausar").html("Pesos Argentinos");
    } else if (moneda == "eth") {
      $("#monedaausar").html("DÃ³lares Estadounidenses");
    } else if (moneda == "litecoin") {
      $("#monedaausar").html("DÃ³lares Estadounidenses");
    } else {
      $("#monedaausar").html("DÃ³lares Estadounidenses");
    }
  
    if (monedalocal == 1) {
      $("#simbolomoneda").html(enquemoneda + " ");
      if (moneda == "dai") {
        $("#monedaenvias").html(
          "<img class='imgmoneda2' src='assets/img/monedas/dai.png'>"
        );
      } else if (moneda == "btc") {
        $("#monedaenvias").html(
          "<img class='imgmoneda2' src='assets/img/monedas/btc.svg'>"
        );
      } else if (moneda == "usdt") {
        $("#monedaenvias").html(
          "<img class='imgmoneda2' src='assets/img/monedas/usdt.png'>"
        );
      } else if (moneda == "eth") {
        $("#monedaenvias").html(
          "<img class='imgmoneda2' src='assets/img/monedas/eth.svg'>"
        );
      } else if (moneda == "litecoin") {
        $("#monedaenvias").html(
          "<img class='imgmoneda2' src='assets/img/monedas/litecoin.svg'>"
        );
      } else {
        $("#monedaenvias").html(
          "<img class='imgmoneda2' src='assets/img/monedas/bitcoincash.svg'>"
        );
      }
    } else {
      $("#monedaenvias").html(enquemoneda);
      if (moneda == "dai") {
        $("#simbolomoneda").html(
          "<img class='imgmoneda2' src='assets/img/monedas/dai.png'> "
        );
      } else if (moneda == "btc") {
        $("#simbolomoneda").html(
          "<img class='imgmoneda2' src='assets/img/monedas/btc.svg'> "
        );
      } else if (moneda == "usdt") {
        $("#simbolomoneda").html(
          "<img class='imgmoneda2' src='assets/img/monedas/usdt.png'> "
        );
      } else if (moneda == "eth") {
        $("#simbolomoneda").html(
          "<img class='imgmoneda2' src='assets/img/monedas/eth.svg'> "
        );
      } else if (moneda == "litecoin") {
        $("#simbolomoneda").html(
          "<img class='imgmoneda2' src='assets/img/monedas/litecoin.svg'> "
        );
      } else {
        $("#simbolomoneda").html(
          "<img class='imgmoneda2' src='assets/img/monedas/bitcoincash.svg'> "
        );
      }
    }
  }
  
  function NumCheck(e, field) {
    key = e.keyCode ? e.keyCode : e.which;
    // backspace
    if (key == 8) return true;
    // 0-9
    if (key > 47 && key < 58) {
      if (field.value == "") return true;
      regexp = /,[0-9]{2}$/;
      return !regexp.test(field.value);
    }
    // ,
    if (key == 46) {
      if (field.value == "") return false;
      regexp = /^[0-9]+$/;
      return regexp.test(field.value);
    }
    // other key
    return false;
  }
  
  var xxx = 0;
  var montoaenviarprotegido = "";
  
  /*
  function enviardinero(monedalocal) {
      if (xxx == 0) {
          xxx = 1;
          $(".cuentaregresiva").html("<div style='font-size:14px;font-weight: bold;font-style: italic;' class='alert alert-danger mt-2' role='alert'>Finalizar pedido antes de los 03:00 minutos</div>");
          var end = new Date();
          end.setMinutes(end.getMinutes() + 3);
          var _second = 1000;
          var _minute = _second * 60;
          var _hour = _minute * 60;
          var _day = _hour * 24;
          var timer;
  
          function showRemaining() {
              var now = new Date();
              var distance = end - now;
              if (distance < 0) {
                  $("#montoaenviar").val("");
                  enviardinero(monedalocal);
                  clearInterval(timer);
                  $(".cuentaregresiva").html("");
                  xxx = 0;
  
                  return;
  
              }
              var minutes = Math.floor((distance % _hour) / _minute);
              var seconds = Math.floor((distance % _minute) / _second);
  
              $(".cuentaregresiva").html("<div style='font-size:14px;font-weight: bold;font-style: italic;' class='alert alert-danger mt-2' role='alert'>Finalizar pedido antes de los " + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2) + " minutos</div>");
          }
          timer = setInterval(showRemaining, 1000);
      }
  
  
  
      moneda = $("#monedacambio").val();
      if (moneda == "dai") {
          venta = daiventa;
          compra = daicompra;
      } else if (moneda == "usdt") {
          venta = usdtventa;
          compra = usdtcompra;
      } else if (moneda == "btc") {
          venta = btcventa;
          compra = btccompra;
      } else if (moneda == "eth") {
          venta = ethventa;
          compra = ethcompra;
      } else if (moneda == "litecoin") {
          venta = litecoinventa;
          compra = litecoincompra;
      } else {
          venta = bitcoincashventa;
          compra = bitcoincashcompra;
      }
  
      medio = $("#mediodepagomio").val();
      if (monedalocal == 0) {
          if (medio == "1") {
              medio = transferencia;
          } else if (medio == "2") {
              medio = mercadopagosc;
          } else if (medio == "3") {
              medio = mercadopagodc;
          } else if (medio == "4") {
              medio = pagofacil;
          } else if (medio == "5") {
              medio = paypal;
          } else if (medio == "6") {
              medio = cuentadigital;
          } else if (medio == "7") {
              medio = skrill;
          } else if (medio == "8") {
              medio = neteller;
          } else if (medio == "9") {
              medio = p2p;
          }
      } else if (monedalocal == 1) {
          if (medio == "1") {
              medio = transferenciav;
          } else if (medio == "2") {
              medio = mercadopagoscv;
          } else if (medio == "3") {
              medio = mercadopagodcv;
          } else if (medio == "4") {
              medio = pagofacilv;
          } else if (medio == "5") {
              medio = paypalv;
          } else if (medio == "6") {
              medio = cuentadigitalv;
          } else if (medio == "7") {
              medio = skrillv;
          } else if (medio == "8") {
              medio = netellerv;
          } else if (medio == "9") {
              medio = p2pv;
          }
      }
  
  
      compraventa = $("#montoaenviar").val();
      if (compraventa == '') {
          compraventa = 0;
      }
  
      enquemoneda = $("#cambiocalculadora").val();
      vistageneralenquemoneda = $("#vistamoneda").val();
  
      if (vistageneralenquemoneda == enquemoneda) {
          multiplicador = venta * 1;
          multiplicador2 = compra * 1;
      }
      if (vistageneralenquemoneda == 'USD' && enquemoneda == 'ARS') {
          multiplicador = venta * usdars;
          multiplicador2 = compra * usdars;
      }
      if (vistageneralenquemoneda == 'USD' && enquemoneda == 'EUR') {
          multiplicador = venta / eurusd;
          multiplicador2 = compra / eurusd;
      }
      if (vistageneralenquemoneda == 'ARS' && enquemoneda == 'USD') {
          multiplicador = venta / usdars;
          multiplicador2 = compra / usdars;
      }
      if (vistageneralenquemoneda == 'ARS' && enquemoneda == 'EUR') {
          multiplicador = venta / (usdars * eurusd);
          multiplicador2 = compra / (usdars * eurusd);
      }
      if (vistageneralenquemoneda == 'EUR' && enquemoneda == 'ARS') {
          multiplicador = venta * (eurusd * usdars);
          multiplicador = compra * (eurusd * usdars);
      }
      if (vistageneralenquemoneda == 'EUR' && enquemoneda == 'USD') {
          multiplicador = venta * eurusd;
          multiplicador2 = compra * eurusd;
      }
  
  
  
  
      if (monedalocal == 1) {
          var resultado = compraventa * multiplicador;
          resultado = resultado + ((resultado * medio) / 100);
          tofixmio = 2;
      } else {
          var resultado = compraventa / multiplicador2;
          resultado = resultado + ((resultado * medio) / 100);
          tofixmio = 6;
      }
  
  
      var resultmio = resultado.toLocaleString('de-DE', { //es-ar
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: tofixmio
      });
  
      $("#cambiotreal").html(resultmio.slice(0, -1));
      montoaenviarprotegido = resultmio.slice(0, -1);
  }
  
  function cambiarmedioform() {
      var parametro2 = $("#operacion").val();
      $.ajax({
          data: { operacion: parametro2 }, //{ moneda: parametro, data2: value2, data3: value3 },
          url: 'php/select2.php',
          type: 'post',
          success: function(response) {
              $("#mediodepagomio").html(response);
              $("#mediodepagomio").selectpicker("refresh");
              monedaausar();
              enviardinero(parametro2);
          }
      });
  }
  
  function cambiarmonedaform() {
      var parametro = $("#mediodepagomio").val();
      var parametro2 = $("#operacion").val();
      $.ajax({
          data: { moneda: parametro, operacion: parametro2 }, //{ moneda: parametro, data2: value2, data3: value3 },
          url: 'php/select.php',
          type: 'post',
          success: function(response) {
              $("#cambiocalculadora").html(response);
              monedaausar();
              enviardinero(parametro2);
          }
      });
  }
  */
  
  $("#finalizarpedido").click(function (e) {
    e.preventDefault();
    $("#finalizarpedido").prop("disabled", true);
    $("#finalizarpedido").addClass("disabled");
    $("#finalizarpedido").css("cursor", "default");
    var captcha = grecaptcha.getResponse();
    montoaenviar = $("#montoaenviar").val();
    $.ajax({
      data: { captcha: captcha, montoaenviar: montoaenviar }, //{ moneda: parametro, data2: value2, data3: value3 },
      url: "php/recaptcha.php",
      type: "post",
      success: function (response) {
        if (response == 1) {
          $("#formtel").append(
            "<input type='hidden' id='montoarecibir' name='montoarecibir' value='" +
              montoaenviarprotegido +
              "'>"
          );
          $("#formtel").submit();
        } else {
          $("#respuestaenvio").html(response);
          $("#finalizarpedido").prop("disabled", false);
          $("#finalizarpedido").removeClass("disabled");
          $("#finalizarpedido").css("cursor", "pointer");
        }
      },
    });
  });
  
  $("#enviarcalc").click(function (e) {
    e.preventDefault();
    $("#enviarcalc").prop("disabled", true);
    $("#enviarcalc").addClass("disabled");
    $("#enviarcalc").css("cursor", "default");
  
    var campo = $("#email").val();
    var pila = $("#pila").val();
    var captcha = grecaptcha.getResponse();
    var moneda = $("#vmoneda").val();
    var cripto = $("#vcrypto").val();
    var operacion = $("#voperacion").val();
  
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (reg.test(campo) && regOficial.test(campo)) {
      $("#respu").html("Enviando...");
  
      $.ajax({
        data: {
          email: campo,
          pila: pila,
          captcha: captcha,
          moneda: moneda,
          cripto: cripto,
          operacion: operacion,
        },
        url: "php/phpmailer/validarmail.php",
        type: "post",
        success: function (response) {
          if (response == 1) {
            window.location.href = "ValidacionCorreo";
          } else if (response == 0) {
            var form = $(
              '<form action="Calculadora" method="post">' +
                '<input type="hidden" name="em" value="' +
                campo +
                '">' +
                '<input type="hidden" name="mo" value="' +
                moneda +
                '">' +
                '<input type="hidden" name="cr" value="' +
                cripto +
                '">' +
                '<input type="hidden" name="op" value="' +
                operacion +
                '">' +
                "</form>"
            );
            $("body").append(form);
            form.submit();
          } else {
            $("#enviarcalc").prop("disabled", false);
            $("#enviarcalc").removeClass("disabled");
            $("#enviarcalc").css("cursor", "pointer");
            grecaptcha.reset();
            $("#respu").html(response);
          }
        },
      });
    } else {
      $("#enviarcalc").prop("disabled", false);
      $("#enviarcalc").removeClass("disabled");
      $("#enviarcalc").css("cursor", "pointer");
      $("#respu").html("El campo Email es incorrecto");
    }
  });
  /*
  document.getElementById('targetmio').addEventListener('input', function() {
      campo = event.target;
      var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
      var regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
      //Se muestra un texto a modo de ejemplo, luego va a ser un icono
      if (reg.test(campo.value) && regOficial.test(campo.value)) {
          console.log("vÃ¡lido oficial y extraoficialmente");
      } else if (reg.test(campo.value)) {
          console.log("vÃ¡lido extraoficialmente");
  
      } else {
          console.log("incorrecto");
  
      }
  });
  */
  
  function clases(params) {
    if (params == "ARS") {
      $("#ars1").removeClass("active2");
      $("#usd1").removeClass("active2");
      $("#eur1").removeClass("active2");
      $("#ars1").addClass("active2");
    } else if (params == "USD") {
      $("#ars1").removeClass("active2");
      $("#usd1").removeClass("active2");
      $("#eur1").removeClass("active2");
      $("#usd1").addClass("active2");
    } else if (params == "EUR") {
      $("#ars1").removeClass("active2");
      $("#usd1").removeClass("active2");
      $("#eur1").removeClass("active2");
      $("#eur1").addClass("active2");
    } else {
      $("#ars1").removeClass("active2");
      $("#usd1").removeClass("active2");
      $("#eur1").removeClass("active2");
    }
  }