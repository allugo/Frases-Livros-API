# <a href="http://instagram.com/allugo_app">AlluGo!</a> - API de Frases de Livros :book:
:pencil: Uma API em NodeJS com várias frases de livros.
- Preview: <a href="http://allugo-frases.herokuapp.com">http://allugo-frases.herokuapp.com</a>
- Exemplos de uso: <a href="https://github.com/allugo/Frases-Livros-API/tree/master/exemplos">aqui!</a>

## Idioma/Languages
- <img src="https://github.com/google/region-flags/blob/gh-pages/png/BR.png" alt="drawing" width="15"/> - [pt-br](#rotas)
- <img src="https://github.com/google/region-flags/blob/gh-pages/png/US.png" alt="drawing" width="15"/> - [en](#routes)

# Rotas

### - /frases
  Retorna todas as frases cadastradas no sistema.
  - ex: <a href="https://allugofrases.herokuapp.com/frases">https://allugofrases.herokuapp.com/frases</a>

### - /frases/random
  Retorna uma frase aleatória.
  - ex: <a href="https://allugofrases.herokuapp.com/frases/random">https://allugofrases.herokuapp.com/frases/random</a>

### - /frases/find/id
  Busca uma frase pelo ID da mesma.
  - ex: <a href="https://allugofrases.herokuapp.com/frases/find/1">https://allugofrases.herokuapp.com/frases/find/1</a>
  
### - /procurarFrase (POST)
  Busca uma frase no sistema que contenha uma determinada string.
  - url: <a href="javascript:void(0)">http://allugofrases.herokuapp.com/frases/search</a>
```py
# Exemplo em Python.
def procurarFrase(frase):
    data = {"frase": frase}
    get = requests.post(url="http://allugofrases.herokuapp.com/frases/search", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

if (__name__ == "__main__"):
  print(procurarFrase("Pode se encontrar a felicidade mesmo nas horas mais sombrias"));
```

### - /frases/author (POST)
  Busca todas as frases de um determinado autor.
  - url: <a href="javascript:void(0)">http://allugofrases.herokuapp.com/frases/author</a>
```py
# Exemplo em Python.
def frasesPorAutor(autor):
    data = {"autor": autor}
    get = requests.post(url="http://allugofrases.herokuapp.com/frases/author", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

if (__name__ == "__main__"):
  print(frasesPorAutor("JK Rowling"));
```

### - /frases/book (POST)
  Busca todas as frases de um determinado livro.
  - url: <a href="javascript:void(0)">http://allugofrases.herokuapp.com/frases/book</a>
```py
# Exemplo em Python.
def frasesPorLivro(livro):
    data = {"livro": livro}
    get = requests.post(url="http://allugofrases.herokuapp.com/frases/book", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

if (__name__ == "__main__"):
  print(frasesPorLivro("Harry Potter e o Prisioneiro de Azkaban"));
```

# <a href="http://instagram.com/allugo_app">AlluGo!</a> - API of Book Quotes :book:
:pencil: A NodeJS API for various book quotes.
- Preview: <a href="http://allugo-frases.herokuapp.com">http://allugo-frases.herokuapp.com</a>
- Examples: <a href="https://github.com/allugo/Frases-Livros-API/tree/master/exemplos">here!</a>


# Routes

### - /frases
  Returns all quotes registered in the API.
  - ex: <a href="https://allugofrases.herokuapp.com/frases">https://allugofrases.herokuapp.com/frases</a>

### - /frases/random
  Returns a random quote.
  - ex: <a href="https://allugofrases.herokuapp.com/frases/random">https://allugofrases.herokuapp.com/frases/random</a>

### - /frases/find/id
  Search quote by ID.
  - ex: <a href="https://allugofrases.herokuapp.com/frases/find/1">https://allugofrases.herokuapp.com/frases/find/1</a>
  
### - /frases/search (POST)
  Search a quote in the API with a specific string.
  - url: <a href="javascript:void(0)">http://allugofrases.herokuapp.com/frases/search</a>
```py
# Python Example.
def searchQuote(quote):
    data = {"frase": quote}
    get = requests.post(url="http://allugofrases.herokuapp.com/frases/search", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

if (__name__ == "__main__"):
  print(procurarFrase("Pode se encontrar a felicidade mesmo nas horas mais sombrias"));
```

### - /frases/author (POST)
  Search all the quotes by an specific author.
  - url: <a href="javascript:void(0)">http://allugofrases.herokuapp.com/frases/author</a>
```py
# Python Example.
def frasesPorAutor(author):
    data = {"autor": author}
    get = requests.post(url="http://allugofrases.herokuapp.com/frases/author", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

if (__name__ == "__main__"):
  print(frasesPorAutor("JK Rowling"));
```

### - /frases/book (POST)
  Search all the quotes by an specific book.
  - url: <a href="javascript:void(0)">http://allugofrases.herokuapp.com/frases/book</a>
```py
# Python Example.
def frasesPorLivro(book):
    data = {"livro": book}
    get = requests.post(url="http://allugofrases.herokuapp.com/frases/book", json=data, headers={'Content-Type': "application/json", 'Accept': "application/json"});
    return get.json();

if (__name__ == "__main__"):
  print(frasesPorLivro("Harry Potter e o Prisioneiro de Azkaban"));
```
