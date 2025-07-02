# Guia de Hospedagem - Portfólio Paulo R. Mulato

## 📋 Visão Geral

Este guia apresenta várias opções gratuitas para hospedar seu site de portfólio, com foco especial no GitHub Pages, que é a opção mais recomendada para sites estáticos como este.

## 🚀 Opção 1: GitHub Pages (Recomendado)

### Por que GitHub Pages?
- ✅ **Totalmente gratuito**
- ✅ **Fácil de configurar**
- ✅ **Domínio personalizado gratuito**
- ✅ **SSL/HTTPS automático**
- ✅ **Integração com Git para atualizações**
- ✅ **Backup automático do código**

### Passo a Passo Detalhado

#### 1. Criar Conta no GitHub
1. Acesse [github.com](https://github.com)
2. Clique em "Sign up" (Cadastrar-se)
3. Preencha os dados e confirme o e-mail

#### 2. Criar Repositório
1. Após fazer login, clique no botão verde "New" ou "+"
2. Nome do repositório: `portfolio-paulo-mulato`
3. Marque como "Public" (público)
4. Marque "Add a README file"
5. Clique em "Create repository"

#### 3. Upload dos Arquivos
1. Na página do repositório, clique em "uploading an existing file"
2. Arraste todos os arquivos do seu portfólio:
   - `index.html`
   - Pasta `css/` com `style.css`
   - Pasta `js/` com `script.js`
   - Pasta `images/` com as imagens
3. Escreva uma mensagem de commit: "Adicionar portfólio inicial"
4. Clique em "Commit changes"

#### 4. Ativar GitHub Pages
1. No repositório, clique na aba "Settings"
2. Role para baixo até encontrar "Pages" no menu lateral
3. Em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main"
5. Deixe "/ (root)" selecionado
6. Clique em "Save"

#### 5. Acessar o Site
- Aguarde alguns minutos (até 10 minutos)
- Seu site estará disponível em: `https://seuusuario.github.io/portfolio-paulo-mulato`
- O GitHub mostrará o link exato na seção Pages

### Atualizações Futuras
Para atualizar o site:
1. Faça as alterações nos arquivos localmente
2. No GitHub, navegue até o arquivo que deseja alterar
3. Clique no ícone de lápis (Edit)
4. Faça as alterações
5. Commit as mudanças
6. O site será atualizado automaticamente

## 🌐 Opção 2: Netlify

### Vantagens
- Deploy automático via GitHub
- Formulários funcionais (ideal para o formulário de contato)
- CDN global
- Domínio personalizado gratuito

### Como Configurar
1. Acesse [netlify.com](https://netlify.com)
2. Cadastre-se com sua conta GitHub
3. Clique em "New site from Git"
4. Conecte com GitHub e selecione seu repositório
5. Configure:
   - Branch: `main`
   - Build command: (deixe vazio)
   - Publish directory: (deixe vazio)
6. Clique em "Deploy site"

## 📱 Opção 3: Vercel

### Vantagens
- Deploy extremamente rápido
- Otimização automática
- Analytics gratuito

### Como Configurar
1. Acesse [vercel.com](https://vercel.com)
2. Cadastre-se com GitHub
3. Clique em "New Project"
4. Importe seu repositório
5. Clique em "Deploy"

## 🔧 Opção 4: Firebase Hosting

### Vantagens
- Infraestrutura do Google
- SSL gratuito
- CDN global

### Como Configurar
1. Acesse [firebase.google.com](https://firebase.google.com)
2. Crie um projeto
3. Instale Firebase CLI: `npm install -g firebase-tools`
4. No terminal, na pasta do projeto:
   ```bash
   firebase login
   firebase init hosting
   firebase deploy
   ```

## 📝 Configurações Importantes

### Domínio Personalizado (Opcional)
Se você quiser um domínio como `paulomulato.com`:

1. **Compre um domínio** em:
   - Registro.br (para .com.br)
   - Namecheap
   - GoDaddy
   - Google Domains

2. **Configure DNS** (exemplo para GitHub Pages):
   - Adicione um arquivo `CNAME` no repositório com seu domínio
   - No provedor do domínio, configure:
     - Tipo: CNAME
     - Nome: www
     - Valor: seuusuario.github.io

### Formulário de Contato Funcional

Para tornar o formulário realmente funcional:

#### Opção 1: Netlify Forms (Recomendado se usar Netlify)
1. Adicione `netlify` ao atributo `data-netlify="true"` no formulário
2. O Netlify processará automaticamente os envios

#### Opção 2: Formspree
1. Acesse [formspree.io](https://formspree.io)
2. Cadastre-se gratuitamente
3. Crie um novo formulário
4. Substitua a action do formulário por: `action="https://formspree.io/f/SEU_ID"`

#### Opção 3: EmailJS
1. Acesse [emailjs.com](https://emailjs.com)
2. Configure um serviço de e-mail
3. Adicione o script EmailJS ao seu site
4. Configure o JavaScript para enviar e-mails

## 🔍 SEO e Otimizações

### Meta Tags Importantes
Adicione no `<head>` do HTML:

```html
<meta name="description" content="Paulo R. Mulato - Analista de Dados especializado em Power BI. Portfólio com dashboards e análises de dados.">
<meta name="keywords" content="Power BI, Analista de Dados, Business Intelligence, Dashboard, Paulo Mulato">
<meta name="author" content="Paulo R. Mulato">

<!-- Open Graph para redes sociais -->
<meta property="og:title" content="Paulo R. Mulato - Portfólio Power BI">
<meta property="og:description" content="Analista de Dados especializado em Power BI e Business Intelligence">
<meta property="og:type" content="website">
<meta property="og:url" content="https://seudominio.com">
```

### Google Analytics (Opcional)
1. Crie uma conta no [Google Analytics](https://analytics.google.com)
2. Adicione o código de rastreamento antes do `</head>`

## 📊 Monitoramento e Manutenção

### Verificar Performance
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Teste responsividade em [Responsive Design Checker](https://responsivedesignchecker.com/)

### Backup
- O código no GitHub já serve como backup
- Mantenha uma cópia local dos arquivos

### Atualizações Regulares
- Adicione novos projetos conforme desenvolve
- Atualize informações de contato se necessário
- Mantenha o design moderno

## 🎯 Próximos Passos Recomendados

1. **Imediato**: Configure GitHub Pages (mais simples)
2. **Curto prazo**: Configure Google Analytics
3. **Médio prazo**: Considere domínio personalizado
4. **Longo prazo**: Adicione blog ou seção de artigos

## 📞 Suporte

Se encontrar dificuldades:
- GitHub Pages: [Documentação oficial](https://docs.github.com/pages)
- Netlify: [Documentação](https://docs.netlify.com/)
- Vercel: [Documentação](https://vercel.com/docs)

---

**Dica Final**: Comece com GitHub Pages. É gratuito, confiável e perfeito para portfólios. Você sempre pode migrar para outras opções depois!

