import requests

url = "https://cotizaciones-argentinas-por-downtack-com.p.rapidapi.com/cotizaciones"

headers = {
    'x-rapidapi-key': "425327872amshc8b8c87476661e8p14dd7ejsn4cb19533aafb",
    'x-rapidapi-host': "cotizaciones-argentinas-por-downtack-com.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
