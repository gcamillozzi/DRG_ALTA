
# :point_right:	 API-DRGMV-FASTIFY

Um serviço que gera lote de internação e faz uma requisição SOAP 



## Documentação da API

#### Retorna todos os itens

```http
  GET /createxml
```

Pega os lotes e gera o conteúdo .txt no diretório esperado.

```http
  GET /createxml/:nr_atendimento:

```
Essa rota recebe o “nr_atendimento” e faz o envio referente a esse “nr_atendimento”.
Exemplo de requisição:
```bash
curl -X GET http://localhost:3434/createxml/990724
```


## Rodando localmente

1. Clone o projeto

```bash
  git clone https://github.com/DataIntegraTeam/api-drgmv-fastify-ghas
```

2. Entre no diretório do projeto

```bash
  cd api-drgmv-fastify-ghas
```

3. Instale as dependências

```bash
  npm install
```

4. Altere o arquivo *.env.example* para *.env* e preencha os campos necessários.

5. O diretório do projeto deverá ter permissão de leitura e escrita, para que seja possível a criação de novas pastas dentro do diretório.

6. Inicie o servidor em modo desenvolvimento:

```bash
  npm run dev
```
Após isso, basta chamar a rota GET /createxml e o lote de internação será gerado (XML) e enviado para a API SOAP.



------------------------------------------------------------------------------------------------------------------------



Para fazer o deploy, é exatamente igual ao modo desenvolvedor até o passo 4. 

Condudo, é necessária a parte do build.
No diretório, execute:
```bash
npm run build
```

Agora, para iniciar a aplicação com o PM2, execute:

```bash
pm2 start ./dist/server.js --name producao
```

Para que a aplicação sempre restarte e evite que a conexão com o oracle feche, é necessário rodar a seguinte instrução com o PM2:

```bash
pm2 restart producao --cron "50 7,11,15 * * *"
```
