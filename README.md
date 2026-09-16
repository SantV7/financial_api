# 💰 Financial API

API RESTful completa para gerenciamento financeiro, controle de transações e autenticação de usuários, desenvolvida com foco em arquitetura limpa, segurança e escalabilidade.

---

## 🛠️ Tecnologias e Ferramentas

- **Linguagem:** TypeScript
- **Runtime:** Node.js
- **Framework:** Express.js
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma ORM
- **Segurança & Autenticação:** JWT (JSON Web Token), bcrypt, RBAC (Role-Based Access Control)
- **Validação:** Zod
- **Testes de API:** Postman

---

## 🏛️ Arquitetura e Boas Práticas

- **Clean Architecture:** Separação clara de responsabilidades em camadas (Controllers, Services, Repositories).
- **Controle de Acesso (RBAC):** Rotas protegidas com permissões baseadas no perfil do usuário.
- **Validação Rigorosa:** Schemas de dados e regras de negócio validados antes da persistência.
- **Segurança:** Criptografia de senhas com bcrypt e tokens de sessão via JWT.

---

## 📌 Endpoints da Aplicação (9 Rotas)

### 🔓 Autenticação & Usuários
- `POST /users` - Cadastro de novos usuários
- `POST /login` - Autenticação e geração de token JWT

### 🔐 Transações (Rotas Protegidas)
- `GET /transactions` - Listagem de transações do usuário
- `POST /transactions` - Criação de nova transação
- `GET /transactions/:id` - Busca de transação específica por ID
- `PUT /transactions/:id` - Atualização de dados da transação
- `DELETE /transactions/:id` - Remoção de transação
- `GET /summary` - Resumo do saldo e métricas financeiras
- `GET /profile` - Dados do perfil do usuário autenticado

---

## 🚀 Como executar o projeto localmente

### Pré-requisitos
- Node.js instado
- Instância do PostgreSQL rodando

### Passos
1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SantV7/financial_api.git](https://github.com/SantV7/financial_api.git)
   cd financial_api/backend
