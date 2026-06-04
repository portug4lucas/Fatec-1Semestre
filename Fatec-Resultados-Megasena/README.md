# 🍀 Mega-Sena

Aplicação web fullstack para consulta de resultados e verificação de palpites da Mega-Sena, desenvolvida como projeto da disciplina **Desenvolvimento Web I** da **Fatec Jacareí**.

🌐 **Deploy:** https://fatec-megasena-atividade.onrender.com

---

## 📋 Sobre o Projeto

A aplicação consome uma base local com todos os resultados históricos da Mega-Sena, armazenados em um banco de dados PostgreSQL. O usuário pode:

- Consultar o **último concurso** sorteado automaticamente ao abrir a página
- Buscar um **concurso específico** pelo número
- Verificar um **palpite** em todos os concursos já realizados, descobrindo quantas vezes ele teria acertado 4, 5 ou 6 dezenas

---

## 🛠️ Tecnologias

- Node.js
- Express
- PostgreSQL
- HTML, CSS e JavaScript puro

---

## 🚀 Como executar localmente

**1. Clone o repositório**
```bash
git clone https://github.com/portug4lucas/fatec-megasena-atividade.git
cd fatec-megasena-atividade
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure o `.env`**
```env
PORT=3005
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=bdaula
POSTGRES_PORT=5432
```

**4. Inicialize o banco**
```bash
npm run db:init
```

**5. Inicie o servidor**
```bash
npm run dev
```

**6. Acesse**
http://localhost:3005
---

## 🔗 Rotas da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api` | Último concurso |
| GET | `/api/:concurso` | Concurso específico |
| POST | `/api/palpite` | Consulta palpite em todos os concursos |

---
