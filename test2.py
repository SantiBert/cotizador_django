import websocket
import json

bitstamp_endpoint = 'http://criptoya.com/api/'


def subscribe_marketdata(ws):
    params = {
        'event': 'dai:subscribe',
        'data': {
            'channel': 'live_trades_daiusd'
        }
    }
    market_depth_subscription = json.dumps(params)

    ws.send(market_depth_subscription)


def on_message(ws, message):
    print(message)


def on_error(ws, error):
    print(error)


def on_close(ws):
    print("### closed ###")


def on_message(ws, data):
    data = json.loads(data)
    print(data)


if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp(bitstamp_endpoint,
                                on_message=on_message,
                                on_error=on_error,
                                on_close=on_close)
    ws.on_open = subscribe_marketdata
    ws.run_forever()
