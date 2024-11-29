# Email Tracking

## Descrição

Este projeto é um sistema de rastreamento de abertura de emails, que registra dados de campanhas e emails dos clientes ao acessar uma rota específica. O sistema também identifica se a conexão foi abortada, adicionando um delay de 5 segundos para contornar rastreadores automáticos e pré-carregamentos com timeouts baixos. A funcionalidade principal entrega uma imagem de 1px após salvar os dados no banco de dados.

A URL do sistema deve ser incluída como uma imagem no corpo do email. Para envios em massa, recomenda-se utilizar estratégias que substituam dinamicamente o endereço de email na URL para personalização.

### Exemplo de inclusão no email:
```html
<img 
  src="https://yourserver.com/track/campaign/email" 
  width="1" 
  height="1" 
  style="display: none;" 
  alt="" 
/>
```

---

## Tecnologias Utilizadas

- **Base:** Node.js
- **Framework HTTP:** Fastify
- **Lint:** Biome
- **Linguagem:** TypeScript
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma
- **Containerização:** Docker Compose
- **Documentação:** Swagger

---

## Configuração do Projeto

1. **Instalar dependências:**
   ```bash
   pnpm install
   ```

2. **Executar migrações no banco de dados:**
   ```bash
   pnpm run db:migrate
   ```

3. **Construir o projeto:**
   ```bash
   pnpm run build
   ```

4. **Iniciar o servidor:**
   ```bash
   pnpm run start
   ```

---

## Rotas Implementadas

### `GET /track/:campaign/:email`

- **Descrição:** Registra a abertura de email vinculada a uma campanha.
- **Parâmetros:**
  - `:campaign` - Nome ou identificador da campanha.
  - `:email` - Endereço de email do cliente.
- **Resposta:**
  - Retorna uma imagem de 1px.
- **Lógica adicional:**
  - Delay de 5 segundos para contornar rastreadores.
  - Registro no banco de dados se a conexão foi abortada antes da resposta.

---

## Docker Compose

Este projeto utiliza o Docker Compose para simplificar o setup. Certifique-se de que o Docker e o Docker Compose estão instalados em seu ambiente.

1. **Subir os serviços:**
   ```bash
   docker-compose up -d
   ```

2. **Parar os serviços:**
   ```bash
   docker-compose down
   ```

---

## Documentação

A documentação da API foi gerada utilizando **Swagger**. Após iniciar o servidor, acesse `/docs` para visualizar e interagir com a API.

---

## Boas Práticas

- **Segurança em envios em massa:** Utilize estratégias para personalizar o endereço do cliente no final da URL ao montar emails em massa, garantindo rastreamento preciso.
- **Delay ajustável:** Se necessário, ajuste o delay para mitigar problemas específicos de rastreadores no arquivo de configuração.

--- 

**Autor:** Vinicius Colodetti 
**Licença:** MIT