# Serviço de Login do HealthStock

Microsserviço de login para aplicação HealthStock

# Endpoints

## **POST** [_/Login_](#)
Para fazer uma requesição para esse endpoint é preciso ser passado no body um texto JSON com os campos **email** e **password**.

Exemplo de requisição:
````json
{
    "email": "joao@gmail.com",
    "password": "12345678"
}
````

A aplicação irá validar se o e-mail corresponde a de algum usuário da aplicação e depois verifica se a senha está correta. Caso esteja, irá devolver o ID do usuário e seu e-mail.

Exemplo de resposta:
```json
{
    "id": 1,
    "email": "joao@gmail.com"
}
```