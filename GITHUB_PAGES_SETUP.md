# Guia: Como Hospedar sua Apresentação no GitHub Pages

Este guia detalhado explica como criar um repositório no GitHub e configurar o GitHub Pages para hospedar sua apresentação sobre combustão com todas as animações e interatividades intactas.

## Passo 1: Criar uma Conta no GitHub

Se você ainda não tem uma conta no GitHub:

1. Acesse [github.com](https://github.com)
2. Clique em "Sign up" (Cadastrar-se)
3. Siga as instruções para criar sua conta
4. Verifique seu e-mail e confirme sua conta

## Passo 2: Criar um Novo Repositório

1. Após fazer login no GitHub, clique no ícone "+" no canto superior direito
2. Selecione "New repository" (Novo repositório)
3. Configure o repositório:
   - **Nome do repositório**: `apresentacao-combustao` (ou outro nome de sua preferência)
   - **Descrição** (opcional): "Apresentação interativa sobre combustão"
   - **Visibilidade**: Public (Público)
   - Marque a opção "Add a README file" (Adicionar um arquivo README)
   - Clique em "Create repository" (Criar repositório)

## Passo 3: Fazer Upload dos Arquivos

Existem duas maneiras de fazer upload dos arquivos para o GitHub:

### Opção A: Upload via Interface Web (mais simples)

1. No seu repositório, clique no botão "Add file" (Adicionar arquivo)
2. Selecione "Upload files" (Fazer upload de arquivos)
3. Arraste todos os arquivos da pasta `combustao-github-pages` para a área indicada
   - Você pode selecionar todos os arquivos de uma vez
4. Adicione uma mensagem de commit como "Adicionar arquivos da apresentação"
5. Clique em "Commit changes" (Confirmar alterações)

### Opção B: Usando Git (mais avançado)

Se você está familiarizado com Git:

1. Instale o Git em seu computador se ainda não tiver
2. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/apresentacao-combustao.git
   ```
3. Copie todos os arquivos da pasta `combustao-github-pages` para a pasta do repositório
4. Adicione, faça commit e envie os arquivos:
   ```
   git add .
   git commit -m "Adicionar arquivos da apresentação"
   git push origin main
   ```

## Passo 4: Configurar o GitHub Pages

1. No seu repositório, clique na aba "Settings" (Configurações)
2. No menu lateral esquerdo, clique em "Pages" (Páginas)
3. Na seção "Source" (Fonte), selecione:
   - Branch: `main` (ou `master`, dependendo do nome da sua branch principal)
   - Pasta: `/ (root)` (raiz)
4. Clique em "Save" (Salvar)
5. Aguarde alguns minutos para que o GitHub Pages seja ativado
6. Você verá uma mensagem com a URL da sua página, geralmente no formato:
   `https://seu-usuario.github.io/apresentacao-combustao/`

## Passo 5: Verificar a Publicação

1. Aguarde alguns minutos após a configuração (pode levar até 10 minutos)
2. Acesse a URL fornecida pelo GitHub Pages
3. Verifique se a apresentação está funcionando corretamente:
   - Navegação entre slides
   - Animações e interatividades
   - Visualização em diferentes dispositivos

## Passo 6: Personalizar o Domínio (Opcional)

Se você tiver um domínio próprio e quiser usá-lo:

1. Na seção GitHub Pages das configurações, vá até "Custom domain" (Domínio personalizado)
2. Digite seu domínio (por exemplo, `www.seudominio.com`)
3. Clique em "Save" (Salvar)
4. Configure os registros DNS do seu domínio:
   - Adicione um registro CNAME apontando para `seu-usuario.github.io`
   - Ou configure registros A para os IPs do GitHub Pages

## Solução de Problemas Comuns

### A página mostra erro 404

- Verifique se o arquivo `index.html` está na raiz do repositório
- Confirme se o GitHub Pages está configurado corretamente
- Aguarde alguns minutos, pois a publicação pode levar tempo

### As animações não funcionam

- Verifique se todos os arquivos JavaScript foram carregados corretamente
- Abra o console do navegador (F12) para verificar erros
- Certifique-se de que os caminhos para arquivos externos estão corretos

### Problemas com caminhos de arquivo

- Certifique-se de que todos os caminhos são relativos, não absolutos
- Exemplo correto: `src="navegacao.js"` em vez de `src="/home/ubuntu/navegacao.js"`

## Mantendo sua Apresentação Atualizada

Para fazer alterações na sua apresentação:

1. Edite os arquivos localmente
2. Faça upload das alterações usando a interface web ou Git
3. O GitHub Pages atualizará automaticamente após alguns minutos

## Compartilhando sua Apresentação

Após a publicação, você pode compartilhar sua apresentação de várias maneiras:

- Envie o link direto para outras pessoas
- Incorpore em sites ou blogs usando um iframe
- Gere um código QR para acesso rápido a partir de dispositivos móveis

## Recursos Adicionais

- [Documentação oficial do GitHub Pages](https://docs.github.com/pt/pages)
- [Guia de Markdown para personalizar o README](https://guides.github.com/features/mastering-markdown/)
- [Configurando HTTPS para GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
