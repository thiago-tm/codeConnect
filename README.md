# 🚀 CodeConnect

📎 **Link do projeto:** [https://code-connect-seven-iota.vercel.app](https://code-connect-seven-iota.vercel.app)

O **CodeConnect** é uma aplicação web interativa e moderna, desenvolvida para permitir que usuários carreguem imagens, adicionem descrições e etiquetas (tags) relacionadas a projetos de programação, e simulem a publicação desses projetos. Tudo isso com uma interface intuitiva e 100% responsiva.

---

## 🧩 Funcionalidades

✅ Carregar e visualizar imagens diretamente do seu computador  
✅ Adicionar nome e descrição para o projeto  
✅ Adicionar e remover tags personalizadas, com verificação em tempo real  
✅ Simular a publicação do projeto com feedback visual (sucesso ou erro)  
✅ Resetar o formulário para começar um novo cadastro

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Vercel** para deploy

---

## 💡 Conceitos Aplicados

### 🖼️ Upload de Imagem
- Criação de botão de upload com input oculto.
- Estilização personalizada mantendo a acessibilidade.
- Uso do `FileReader` para ler e exibir a imagem.
- Manipulação do DOM para atualizar imagem e nome.

### 🔁 Operações Assíncronas
- Uso de **Promises**, `async/await` e `try...catch`.
- Leitura assíncrona de arquivos e simulação de requisições.
- Verificação de tags válidas com atraso (simulação de API).

### 🏷️ Gerenciamento de Tags
- Criação dinâmica de elementos HTML (`<li>`, `<p>`, `<img>`).
- Delegação de eventos para remover tags com clique.
- Validação assíncrona antes de adicionar uma tag.

### 📄 Formulário
- Captura dos dados do usuário: nome, descrição, tags.
- Verificação se todos os campos foram preenchidos antes do envio.
- Simulação de publicação com retorno aleatório de sucesso ou falha.
- Reset de formulário com restauração de estado inicial (imagem, texto, tags).

---

## ⚙️ Como Usar

1. Clique em **Carregar imagem** e selecione uma imagem do seu dispositivo.
2. Insira o **nome** e a **descrição** do projeto.
3. Digite uma **tag** válida e pressione Enter (tags disponíveis: `HTML`, `CSS`, `JavaScript`, `React`, etc.).
4. Clique em **Publicar projeto** para simular o envio.
5. Clique em **Descartar** para limpar tudo e começar de novo!

---

## ✨ Exemplo de Tags Válidas

- `Front-end`
- `HTML`
- `CSS`
- `JavaScript`
- `TypeScript`
- `React`
- `Vue`
- `Angular`
- `Sass`
- `Bootstrap`
- `Tailwind CSS`

---

## 📌 Observações

- A publicação de projetos é **simulada**, com sucesso ou erro aleatório.
- O foco do projeto é o **aprendizado de manipulação do DOM, Promises, e eventos**.


