# <a href="http://instagram.com/allugo_app">AlluGo!</a> - API de Frases de Livros :book:
:pencil: Uma API em NodeJS com várias frases de livros.
- Preview: <a href="allugo-frases.herokuapp.com">allugo-frases.herokuapp.com</a>
- Exemplos de uso: <a href="https://github.com/allugo/Frases-Livros-API/tree/master/exemplos">aqui!</a>

# Rotas:

### - /frases
  Retorna todas as frases cadastradas no sistema.
  - ex: <a href="https://allugofrases.herokuapp.com/frases">https://allugofrases.herokuapp.com/frases</a>

### - /fraseAleatoria
  Retorna uma frase aleatória.
  - ex: <a href="https://allugofrases.herokuapp.com/fraseAleatoria">https://allugofrases.herokuapp.com/fraseAleatoria</a>

### - /fraseid
  Busca uma frase pelo ID da mesma.
  - ex: <a href="https://allugofrases.herokuapp.com/fraseid?id=1">https://allugofrases.herokuapp.com/fraseid?id=1</a>
  
### - /procurarFrase (POST)
  Busca uma frase no sistema que contenha uma determinada string.
  - url: <a href="javascript:void(0)">http://allugofrases.herokuapp.com/procurarFrase</a>
```py
# Exemplo em Python.
def procurarFrase(frase):
    data = {"frase": frase}
    get = requests.post(url="http://allugofrases.herokuapp.com/procurarFrase", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

if (__name__ == "__main__"):
  print(procurarFrase("Pode se encontrar a felicidade mesmo nas horas mais sombrias"));
```

### - /frasesPorAutor (POST)
  Busca todas as frases de um determinado autor.
  - url: <a href="javascript:void(0)">http://allugofrases.herokuapp.com/frasesPorAutor</a>
```py
# Exemplo em Python.
def frasesPorAutor(autor):
    data = {"autor": autor}
    get = requests.post(url="http://allugofrases.herokuapp.com/frasesPorAutor", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

if (__name__ == "__main__"):
  print(frasesPorAutor("JK Rowling"));
```

### - /frasesPorLivro (POST)
  Busca todas as frases de um determinado livro.
  - url: <a href="javascript:void(0)">http://allugofrases.herokuapp.com/frasesPorLivro</a>
```py
# Exemplo em Python.
def frasesPorLivro(livro):
    data = {"livro": livro}
    get = requests.post(url="http://allugofrases.herokuapp.com/frasesPorLivro", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

if (__name__ == "__main__"):
  print(frasesPorLivro("Harry Potter e o Prisioneiro de Azkaban"));
```
