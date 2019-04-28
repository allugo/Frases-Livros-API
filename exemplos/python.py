#coding: utf-8
import requests

def Frases():
    get = requests.get("http://allugofrases.herokuapp.com/frases");
    return get.json();

def fraseAleatoria():
    get = requests.get("http://allugofrases.herokuapp.com/fraseAleatoria");
    return get.json();

def fraseID(id):
    get = requests.get("http://allugofrases.herokuapp.com/fraseid?id=" + id);
    return get.json();

def procurarFrase(frase):
    data = {"frase": frase}
    get = requests.post(url="http://allugofrases.herokuapp.com/procurarFrase", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

def frasesPorAutor(autor):
    data = {"autor": autor}
    get = requests.post(url="http://allugofrases.herokuapp.com/frasesPorAutor", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

def frasesPorLivro(livro):
    data = {"livro": livro}
    get = requests.post(url="http://allugofrases.herokuapp.com/frasesPorLivro", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

if (__name__ == "__main__"):
    print("Verifique as funções de exemplo do código :)");
    fraseAleatoria();