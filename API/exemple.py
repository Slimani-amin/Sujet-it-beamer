

import requests
url = "https://api.meteo.com/weather?city=Paris"
response = requests.get(url)
if response.status_code == 200:
    data = response.json()
    print(f"Température à Paris: {data['temperature']}°C")
else:
    print("Erreur !")