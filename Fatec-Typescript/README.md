#  Gerenciador de Filas

Aplicação de terminal em TypeScript para gerenciar o atendimento de clientes em filas normal e preferencial.

## 📋 Sobre

Projeto desenvolvido na disciplina de **Algoritmos e Lógica de Programação** da FATEC Jacareí.

O sistema gerencia duas filas e alterna o atendimento entre elas, priorizando clientes preferenciais.

##  Regras de negócio

- Clientes com **mais de 60 anos** vão para a fila preferencial
- Clientes **gestantes** vão para a fila preferencial
- Os demais vão para a fila normal
- O atendimento **alterna** entre fila normal e preferencial
- Se uma fila estiver vazia, atende da outra

## 🚀 Como rodar

**Pré-requisitos:** Node.js e npm instalados

```bash
# Instalar dependências
npm install

# Rodar o projeto
npm start
```

## 🖥️ Menu

=== Gerenciador de filas ===

1 - Cadastrar cliente

2 - Atender cliente

3 - Listar filas

0 - Sair


## 🛠️ Tecnologias

- TypeScript
- Node.js
- prompt-sync
