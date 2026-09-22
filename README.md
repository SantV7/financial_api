# Financial API

API RESTful para gerenciamento financeiro, controle de transações e autenticação de usuários, desenvolvida em Node.js e TypeScript com Clean Architecture, segurança em camadas e PostgreSQL.

---

## 📁 Estrutura do Projeto

    src/
    └── app/
        ├── controllers/   # Orquestração e respostas HTTP
        ├── middlewares/   # Validações de payload, sanitização e RBAC
        ├── routes/        # Endpoints modularizados por domínio
        └── utils/         # Helpers de segurança (bcrypt e JWT)

---

## 🛠️ Tecnologias

- **Linguagem & Core:** TypeScript, Node.js, Express.js
- **Banco de Dados & ORM:** PostgreSQL, Prisma ORM
- **Segurança:** JWT, bcrypt, RBAC (Role-Based Access Control)
- **Qualidade & Ferramentas:** Middlewares customizados, ESLint, Postman

---

## 🏛️ Destaques da Arquitetura & Segurança

- **Clean Architecture & SOLID:** Separação estrita de responsabilidades.
- **Pipeline de Middlewares:** Execução defensiva encadeada (`verifyJwt` -> `authCustomMiddleware` -> `Controller`).
- **Controle de Acesso (RBAC):** Rotas privadas protegidas por perfis e permissões.
- **Isolamento de Utilitários:** Criptografia (`crypt.ts`) e tokens (`token.ts`) segregados do fluxo principal.

---

## 📌 Endpoints (9 Rotas)

### 🔓 Autenticação & Usuários
- `POST /users` - Cadastro de usuário
- `POST /login` - Autenticação (JWT)
- `GET /users/:id` - Perfil do usuário (Protegido)
- `PUT /users/:id` - Atualizar cadastro (Protegido)
- `DELETE /users/:id` - Remover conta (Protegido)

### 🔐 Transações (Protegidas)
- `GET /transactions` - Listar transações
- `POST /transactions` - Criar transação
- `GET /transactions/:id` - Detalhes da transação
- `GET /transactions/all/:id` - Histórico/relatório consolidado

---

## 🚀 Como Executar

### Passos

1. **Clone o repositório:**
   git clone https://github.com/SantV7/financial_api.git
   cd financial_api/backend

2. **Instale as dependências:**
   npm install

3. **Configure as variáveis de ambiente (`.env`):**
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/financial_db"
   JWT_SECRET="sua_chave_secreta"
   PORT=3333

4. **Rode as migrations e inicie o servidor:**
   npx prisma migrate dev
   npm run dev

---

Desenvolvido por **[Vinícius dos Santos](https://github.com/SantV7)** 🚀
