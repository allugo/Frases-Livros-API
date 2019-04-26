#coding: utf-8
import requests

data = {"frase": "forte"}
get = requests.post(url="http://allugofrases.herokuapp.com/procurarFrase", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
data = get.json();

print(data);