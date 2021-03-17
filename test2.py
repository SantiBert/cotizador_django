import requests
import json

headers = {
    'x-access-token': 'coinranking2deb8db1a653c91b46c8758be21a8c44a77ea3ae23066a54',

}

dolar = requests.get(
    'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd', headers=headers).json()


"""
print(' 💵 | compra | venta')
print('----|--------|-------')

for index, emoji in enumerate(('🟢', '🔵')):
    compra = json[index]['casa']['compra'][:-1]
    venta = json[index]['casa']['venta'][:-1]

    print(f" {emoji} |  {compra} | {venta}")


"""

i = "{:.2f}".format(float(dolar['data']['coin']['price']))
print(i)
