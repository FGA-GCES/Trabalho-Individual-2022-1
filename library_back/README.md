# Backend da livraria
Este serviço representa um simples sistema de CRUD de livros e autenticação de usuários.
Todas as rotas do serviço estão descritas neste documento e, o processo para executar o mesmo também.

## Dependências do projeto
Para rodar o projeto, antes é necessário criar uma instância de banco de dados postgres em sua máquina, ou então, dockerizada.

Após inicializar o servidor postgres, crie um banco nomeado ```library_db``` e o deixe disponível para conexões.

## Rodando o projeto
Para rodar o projeto, é necessário instalar as dependências relativas ao serviço,
sugere-se primeiro a criação de um ambiente virtual por meio dos comando:

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
    "user": {
        "id": 2,
        "username": "kisobral"
    },
    "token": "2d49e608e47b7213363c500208ba0b19c9084053d0af68835c415686a04a5b74"
}
```

### /api/books
**Métodos disponíveis:** GET, POST   
**Precisa de autenticação:** Sim     
**Campos no body:** title, author, release_year
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
}
```
**Exemplo de retorno:**    
```
[
    {
        "id": 1
        "title": "example1",
        "author": "author1",
        "release_year": 1995,
        "is_rented": false,
        "renter": null
    },
    {
        "id": 2
        "title": "example2",
        "author": "author2",
        "release_year": 2017,
        "is_rented": true,
        "renter": 2
    }
]
```

### /api/books/?query_params
**Métodos disponíveis:** GET   
**Precisa de autenticação:** Sim     
**Params disponíveis para filtro:** renter (retorna livros alugados por um usuário), is_rented (retorna livros por estado de estar ou não alugado)
**Headers necessários:**  
```
Authorization: Token fb6543e4e254573d5a13038df2427b2ff88fab14
```
**Exemplo de retorno:**    
```
[
    {
        "id": 1
        "title": "example1",
        "author": "author1",
        "release_year": 1995,
        "is_rented": false,
        "renter": null
    },
    {
        "id": 2
        "title": "example2",
        "author": "author2",
        "release_year": 2017,
        "is_rented": true,
        "renter": 2
    }
]
```

### /api/books/<ID>/rent
**OBS:** O endpoint funciona tanto para alugar quanto para devolver
**Métodos disponíveis:** POST   
**Precisa de autenticação:** Sim     
**Campos no body:** renter
**Headers necessários:**  
```
Authorization: Token fb6543e4e254573d5a13038df2427b2ff88fab14
```
**Exemplo de request:**
```
{
    "renter": 2
}
```
**Exemplo de retorno:**    
```
{
    "id": 2
    "title": "example2",
    "author": "author2",
    "release_year": 2017,
    "is_rented": true,
    "renter": 2
}
```

OU ENTÃO

```
{
    "id": 2
    "title": "example2",
    "author": "author2",
    "release_year": 2017,
    "is_rented": false,
    "renter": null
}
```