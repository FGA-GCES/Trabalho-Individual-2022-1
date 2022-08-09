# Backend da livraria
Este serviço representa um simples sistema de CRUD de livros e autenticação de usuários. Todas as rotas do serviço estão descritas neste documento e, o processo para executar o mesmo também.

## Rodando o projeto
Para rodar o projeto, é necessário instalar as dependências relativas ao serviço, sugere-se primeiro a criação de um ambiente virtual por meio dos comando:

```
python3 -m venv env

. env/bin/activate
```

Agora é necessário instalar as dependências por meio do comando:

```
pip install -r requirements.txt
```

Uma vez que as dependências estejam instaladas:

```
python manage.py makemigrations

python manage.py migrate

python manage.py runserver
```

Pronto. Tudo certo para executar o serviço.

## Rotas

### /auth/register
**Métodos disponíveis:** POST   
**Precisa de autenticação:** Não     
**Campos no body:** username, email, first_name, last_name, password
**Headers necessários:** -   
**Exemplo de retorno:**    
```
{
    "username": "username_example",
    "email": "example@example.com",
    "first_name": "example",
    "last_name": "example"
}
```

### /auth/login
**Métodos disponíveis:** POST   
**Precisa de autenticação:** Não     
**Campos no body:** username, password
**Headers necessários:** -   
**Exemplo de retorno:**    
```
{
    "token": "fb6543e4e254573d5a13038df2427b2ff88fab14"
}
```

### /api/books
**Métodos disponíveis:** GET, POST   
**Precisa de autenticação:** Sim     
**Campos no body:** username, password
**Headers necessários:**  
```
Authorization: Token fb6543e4e254573d5a13038df2427b2ff88fab14
```
**Exemplo de request:**
```
{
    "title": "example1",
    "author": "author1",
    "release_year": 1995,
    "user": 1
}
```
**Exemplo de retorno:**    
```
[
    {
        "title": "example1",
        "author": "author1",
        "release_year": 1995,
        "user": 1
    },
    {
        "title": "example2",
        "author": "author2",
        "release_year": 2017,
        "user": 2
    }
]
```

