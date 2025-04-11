# User Directory App

Este projeto faz requisição à [Random User API](https://randomuser.me/), exibe usuários paginados, permite busca por nome, favoritá-los (com persistência no localStorage) e acessar perfis individuais — também persistidos para navegação entre páginas.

## 🚀 Como rodar localmente

```bash
# Acesse a pasta front-end
cd front-end

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Stack utilizada

Tecnologias escolhidas conforme enunciado do desafio técnico:

- **Next.js 14** – estrutura moderna com suporte ao App Router;
- **React 18** – biblioteca principal de UI;
- **TypeScript** – tipagem estática;
- **Tailwind CSS** – estilização rápida com utilitários;
- **React Hook Form** – gerenciamento de formulário leve e acessível;
- **Axios** – requisições HTTP;
- **React Query (TanStack Query)** – gerenciamento de estado de dados assíncronos;
- **dayjs** – manipulação de datas e cálculo de tempo (ex: “3 days ago”);
- **next-intl** – internacionalização com suporte a múltiplos idiomas;
- **Jest + React Testing Library** – base para testes unitários e de integração.

---

## 🌍 Internacionalização

Foram adicionados botões com bandeiras para trocar entre os idiomas disponíveis (🇧🇷 PT-BR, 🇺🇸 EN-US, 🇪🇸 ES-ES). Eles ficam posicionados acima do título "Diretório de usuários".

---

## ✨ Funcionalidades

- 🔍 **Busca por nome**
- 📃 **Listagem paginada com UX melhorada**
- ❤️ **Favoritar usuários (com persistência em localStorage)**
- 👤 **Perfil completo de cada usuário**
- 🌐 **Internacionalização (i18n) com 3 idiomas**
- 📱 **Layout responsivo mobile/desktop**
- ♿ **Melhorias de acessibilidade com `aria-label`, `role`, `sr-only` etc.**
- 🧠 **Consultoria com IA (ChatGPT e Gemini)**  
  Conforme conversa com o Gabriel, a IA já é parte do dia a dia dos devs da Smart. Usei tanto o **ChatGPT** quanto o **Gemini** para discutir arquitetura, refatorar trechos, melhorar a acessibilidade, revisar conceitos de TailwindCSS e debugar erros.

---

## 🧱 Arquitetura

O projeto segue uma estrutura **Modular / Feature-Based Architecture**, com inspiração em **Domain-Driven Design (DDD)**, separando responsabilidades por domínio (ex: favoritos, perfil, API, traduções) para melhor organização e escalabilidade.

---

## ✅ Melhorias implementadas

- ✅ Refatoração do sistema de paginação, que agora usa paginação inteligente com botões numerados e reticências ("...") para melhor usabilidade.
- ✅ Persistência completa dos favoritos no localStorage, sem dependência da API para exibir usuários favoritados.
- ✅ Troca de idioma com acessibilidade e ícones.

---

## 💡 Features que eu adicionaria com mais tempo

- 🔒 Criação de conta (autenticação, autorização, roles, JWT)
- 🔄 Backend completo com persistência em banco de dados
- ➕ Lógica para adição de usuários (na versão com backend)
- ❌ Lógica para exclusão de usuários (com API ou backend)
- ☁️ Deploy com persistência real dos dados
- 🧑‍🦯 Dark Mode (suporte ao sistema do usuário)
- 🦴 Skeleton Loading para suavizar o carregamento
- 🧪 Testes mais complexos de integração
- 🔁 Switch de idioma com persistência (localStorage ou cookie)

---

## 🌐 Deploy

**[https://user-directory-challenge.vercel.app/](https://user-directory-challenge.vercel.app/)**
