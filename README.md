# 💰 Financial API

API RESTful para gerenciamento financeiro, controle de transações e autenticação de usuários, desenvolvida com foco em Clean Architecture, segurança em camadas e modularização por domínio.

---

## 📁 Estrutura do Projeto & Arquitetura

A aplicação segue uma divisão estrita de responsabilidades para garantir legibilidade, facilidade de manutenção e desacoplamento:

    src/
    └── app/
        ├── controllers/   # Regras de orquestração, fluxos de negócio e resposta HTTP
        ├── middlewares/   # Validações de payload, sanitização de inputs e RBAC
        ├── routes/        # Definição, isolamento e modularização dos endpoints
        └── utils/         # Helpers de criptografia (bcrypt) e gestão de tokens (JWT)

---

## 🛠️ Tecnologias e Ferramentas

- **Linguagem:** TypeScript
- **Runtime:** Node.js
- **Framework:** Express.js
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma ORM
- **Segurança & Autenticação:** JWT (JSON Web Token), bcrypt, RBAC (Role-Based Access Control)
- **Validação & Middlewares:** Middlewares customizados para validação de payload, sanitização de inputs e tratamento de exceções
- **Testes & Documentação:** Postman

---

## 🏛️ Arquitetura, Segurança & Boas Práticas

- **Clean Architecture & SOLID:** Separação clara de responsabilidades em camadas isoladas (Controllers, Middlewares, Routes e Utils).
- **Pipeline de Middlewares Multi-Camada:** Execução encadeada por rota para validação defensiva (`verifyJwt` -> `authCustomMiddleware` -> `Controller`).
- **Controle de Acesso (RBAC):** Proteção de rotas privadas e autorização baseada no perfil e permissões do usuário.
- **Validação Rigorosa:** Verificação manual de tipos, garantia de integridade de dados e validação de regras de negócio na camada de serviço.
- **Isolamento de Utilitários de Segurança:** Módulos dedicados para hashing de senhas (`crypt.ts`) e emissão/verificação de tokens (`token.ts`), mantendo o código dos controllers limpo.
- **Roteamento Modularizado por Domínio:** Separação clara dos contextos da aplicação em submódulos independentes (`/users` e `/transactions`).

---

## 📌 Endpoints da Aplicação (9 Rotas)

### 🔓 Autenticação & Usuários
- `POST /users` - Cadastro de novos usuários
- `POST /login` - Autenticação e geração de token JWT
- `GET /users/:id` - Consulta de dados do perfil do usuário (Protegido)
- `PUT /users/:id` - Atualização de dados cadastrais (Protegido)
- `DELETE /users/:id` - Remoção de conta de usuário (Protegido)

### 🔐 Transações (Rotas Protegidas)
- `GET /transactions` - Listagem das transações do usuário autenticado
- `POST /transactions` - Criação de uma nova transação financeira
- `GET /transactions/:id` - Busca e detalhamento de transação específica por ID
- `GET /transactions/all/:id` - Relatório e histórico consolidado de transações do usuário

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js instalado
- Instância do PostgreSQL em execução

### Passos

1. **Clone o repositório:**
   git clone [https://github.com/SantV7/financial_api.git](https://github.com/SantV7/financial_api.git)
   cd financial_api/backend

2. **Instale as dependências:**
   npm install

3. **Configure as variáveis de ambiente (`.env`):**
   Crie um arquivo `.env` na raiz da pasta `backend` seguindo a estrutura:
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/financial_db"
   JWT_SECRET="sua_chave_secreta_aqui"
   PORT=3333

4. **Execute as migrations do Prisma para estruturar o banco de dados:**
   npx prisma migrate dev

5. **Inicie o servidor de desenvolvimento:**
   npm run dev

---

Desenvolvido por **[Vinícius dos Santos](https://github.com/SantV7)** 🚀
