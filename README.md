# AlluGo! - API de Frases de Livros :book:
Uma API em NodeJS com várias frases de livros.
Preview: <b>em breve!</b>

Link: <a href="https://allugofrases.herokuapp.com">aqui!<a/><br>
# Rotas:
### - frases
  Retorna todas as frases cadastradas no sistema.
  - ex: <a href="https://allugofrases.herokuapp.com/frases">https://allugofrases.herokuapp.com/frases</a>
### - fraseAleatoria
  Retorna uma frase aleatória.
  - ex: <a href="https://allugofrases.herokuapp.com/fraseAleatoria">https://allugofrases.herokuapp.com/fraseAleatoria"></a>
### - fraseid
  Busca uma frase pelo ID dessa frase.
  - ex: <a href="https://allugofrases.herokuapp.com/fraseid?id=1">https://allugofrases.herokuapp.com/fraseid?id=1</a>
### - procurarFrase (GET)
  Busca uma frase no sistema que contenha uma determinada string.
  - url: <a href="javascript:void(0)">http://allugofrases.herokuapp.com/procurarFrase</a>
```py
def procurarFrase(frase):
    data = {"frase": frase}
    get = requests.post(url="http://allugofrases.herokuapp.com/procurarFrase", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

if (__name__ == "__main__"):
  print(procurarFrase("Pode se encontrar a felicidade mesmo nas horas mais sombrias"));
```
