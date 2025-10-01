# Guia: Como Testar e Compartilhar sua Apresentação no GitHub Pages

Este guia explica como verificar se sua apresentação está funcionando corretamente no GitHub Pages e como compartilhá-la efetivamente com outras pessoas.

## Parte 1: Testando sua Apresentação

### Verificação Inicial

Após configurar o GitHub Pages (geralmente leva alguns minutos para ficar disponível):

1. **Acesse a URL do GitHub Pages**
   - Formato: `https://seu-usuario.github.io/apresentacao-combustao/`
   - Esta URL é fornecida na seção GitHub Pages das configurações do repositório

2. **Verifique a página inicial**
   - A página deve redirecionar automaticamente para o primeiro slide
   - Caso não redirecione, clique no botão "Iniciar Apresentação"

### Teste Completo da Apresentação

Realize um teste completo para garantir que tudo está funcionando:

1. **Navegação entre slides**
   - Teste os botões "Anterior" e "Próximo"
   - Teste as teclas de seta (← →) do teclado
   - Verifique se a barra de progresso atualiza corretamente

2. **Modo de tela cheia**
   - Teste o botão de tela cheia
   - Teste a tecla F11 ou a tecla F
   - Verifique se é possível sair do modo de tela cheia

3. **Animações e interatividade**
   - Verifique se todos os gráficos são exibidos corretamente
   - Teste as interações com os elementos (hover, clique)
   - Confirme se as animações funcionam como esperado

4. **Responsividade**
   - Teste em diferentes tamanhos de tela
   - Verifique em dispositivos móveis (smartphone, tablet)
   - Teste em diferentes navegadores (Chrome, Firefox, Safari, Edge)

### Solução de Problemas

Se encontrar problemas durante os testes:

1. **Problemas de carregamento**
   - Abra o console do navegador (F12 > Console)
   - Verifique se há erros de JavaScript ou recursos não encontrados
   - Confirme se todos os caminhos de arquivo estão corretos

2. **Problemas de visualização**
   - Verifique se as fontes estão sendo carregadas corretamente
   - Teste em diferentes navegadores para identificar problemas específicos
   - Ajuste o CSS conforme necessário

3. **Problemas de interatividade**
   - Verifique se o JavaScript está sendo executado
   - Teste cada elemento interativo individualmente
   - Confirme se as bibliotecas externas (Chart.js, D3.js) estão sendo carregadas

## Parte 2: Compartilhando sua Apresentação

### Métodos de Compartilhamento

1. **Link Direto**
   - Compartilhe a URL do GitHub Pages: `https://seu-usuario.github.io/apresentacao-combustao/`
   - Para um slide específico: `https://seu-usuario.github.io/apresentacao-combustao/tipos_combustao.html`

2. **Código QR**
   - Gere um código QR para sua apresentação usando serviços como [QR Code Generator](https://www.qr-code-generator.com/)
   - Útil para compartilhar em materiais impressos ou apresentações presenciais

3. **Incorporação em Sites**
   - Use um iframe para incorporar a apresentação em outros sites:
   ```html
   <iframe src="https://seu-usuario.github.io/apresentacao-combustao/" 
           width="800" height="600" frameborder="0" allowfullscreen></iframe>
   ```

4. **Redes Sociais**
   - Compartilhe o link nas redes sociais com uma descrição atraente
   - Adicione uma imagem de prévia (screenshot do slide principal)

### Personalização da Experiência de Compartilhamento

1. **Metadados para Redes Sociais**
   
   Adicione metadados Open Graph e Twitter Cards ao `index.html` para melhorar a aparência ao compartilhar:

   ```html
   <!-- Open Graph / Facebook -->
   <meta property="og:type" content="website">
   <meta property="og:url" content="https://seu-usuario.github.io/apresentacao-combustao/">
   <meta property="og:title" content="Apresentação Interativa sobre Combustão">
   <meta property="og:description" content="Apresentação com animações e gráficos interativos sobre o processo de combustão, seus tipos e aplicações.">
   <meta property="og:image" content="https://seu-usuario.github.io/apresentacao-combustao/preview.png">

   <!-- Twitter -->
   <meta property="twitter:card" content="summary_large_image">
   <meta property="twitter:url" content="https://seu-usuario.github.io/apresentacao-combustao/">
   <meta property="twitter:title" content="Apresentação Interativa sobre Combustão">
   <meta property="twitter:description" content="Apresentação com animações e gráficos interativos sobre o processo de combustão, seus tipos e aplicações.">
   <meta property="twitter:image" content="https://seu-usuario.github.io/apresentacao-combustao/preview.png">
   ```

   Nota: Você precisará criar e fazer upload de uma imagem de prévia (`preview.png`).

2. **Instruções para Apresentadores**
   
   Crie um slide ou página adicional com instruções para quem vai apresentar:

   ```html
   <!-- presenter-notes.html -->
   <!DOCTYPE html>
   <html lang="pt-BR">
   <head>
       <meta charset="UTF-8">
       <title>Notas do Apresentador</title>
       <!-- Estilos aqui -->
   </head>
   <body>
       <h1>Notas para o Apresentador</h1>
       <ul>
           <li>Use as setas do teclado (← →) para navegar entre slides</li>
           <li>Pressione F11 ou F para modo de tela cheia</li>
           <li>Clique nos elementos interativos para demonstrar funcionalidades</li>
           <li>Tempo estimado para cada slide: 2-3 minutos</li>
           <!-- Mais instruções específicas -->
       </ul>
   </body>
   </html>
   ```

## Parte 3: Coletando Feedback

### Métodos para Coletar Feedback

1. **Formulário de Feedback**
   
   Crie um formulário Google Forms e adicione um link no último slide:

   ```html
   <p>Sua opinião é importante! <a href="https://forms.gle/seuFormulario" target="_blank">Deixe seu feedback</a>.</p>
   ```

2. **Comentários no GitHub**
   
   Habilite as Issues no seu repositório para que as pessoas possam deixar comentários e sugestões.

3. **Analytics**
   
   Adicione Google Analytics para monitorar como as pessoas estão interagindo com sua apresentação:

   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## Parte 4: Mantendo sua Apresentação

### Atualizações e Melhorias

1. **Versionamento**
   
   Use as funcionalidades do Git para manter um histórico de alterações:
   
   ```
   git commit -m "Atualização: melhorias no gráfico do slide 3"
   git push origin main
   ```

2. **Branches para Experimentos**
   
   Crie branches separadas para testar novas funcionalidades sem afetar a versão principal:
   
   ```
   git checkout -b nova-funcionalidade
   # Faça alterações e teste
   git checkout main
   git merge nova-funcionalidade
   ```

3. **Documentação**
   
   Mantenha o README.md atualizado com informações sobre:
   - Alterações recentes
   - Funcionalidades planejadas
   - Problemas conhecidos
   - Créditos e referências

### Backup e Portabilidade

1. **Backup Local**
   
   Mantenha uma cópia local de todos os arquivos da apresentação.

2. **Versão Offline**
   
   Crie uma versão offline que possa ser executada sem internet:
   - Inclua todas as bibliotecas externas localmente
   - Teste a execução direta dos arquivos HTML sem servidor

3. **Exportação para Outros Formatos**
   
   Considere criar versões alternativas para diferentes contextos:
   - Versão PDF (capturas de tela dos slides principais)
   - Versão de vídeo (gravação da apresentação com narração)
   - Versão simplificada para dispositivos com recursos limitados
