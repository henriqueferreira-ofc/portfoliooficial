# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/83d087a8-877e-4ea0-9259-ada7fb541c05

**GitHub Pages**: Após o deploy, seu site estará disponível em `https://[seu-usuario].github.io/portfoliooficial/`

## Deploy para GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages.

### Deploy Automático (Recomendado)

O projeto usa GitHub Actions para fazer deploy automático:

1. Faça commit e push das suas mudanças para a branch `main`
2. O GitHub Actions irá automaticamente:
   - Instalar as dependências
   - Fazer build do projeto
   - Publicar no GitHub Pages

3. Acesse as configurações do seu repositório:
   - Vá em **Settings** > **Pages**
   - Em **Source**, selecione **GitHub Actions**
   - Aguarde o deploy finalizar (verifique na aba **Actions**)

### Deploy Manual

Se preferir fazer deploy manual:

```sh
# Instalar dependências (se ainda não instalou)
npm install

# Fazer build e deploy
npm run deploy
```

**Nota:** O deploy manual requer que você configure o GitHub Pages para usar a branch `gh-pages` em Settings > Pages > Source.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/83d087a8-877e-4ea0-9259-ada7fb541c05) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/83d087a8-877e-4ea0-9259-ada7fb541c05) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
