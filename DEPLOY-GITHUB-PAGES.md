# 🚀 Como Publicar no GitHub Pages

## Pré-requisitos

- Conta no GitHub
- Git instalado no seu computador
- Node.js instalado

## Passo a Passo

### 1. Configurar o Repositório

1. **Crie um novo repositório no GitHub**
   - Vá para https://github.com/new
   - Nome sugerido: `drop-da-mari`
   - Deixe público
   - Não marque "Initialize with README"

2. **Clone este projeto para sua máquina**
   ```bash
   # Se ainda não tem o código localmente
   git clone <URL_DO_SEU_REPO>
   cd drop-da-mari
   
   # Copie todos os arquivos da pasta /app/frontend para a raiz
   ```

### 2. Configurar o package.json

**IMPORTANTE**: Edite o arquivo `package.json` e altere a linha `homepage`:

```json
{
  "homepage": "https://SEU_USUARIO_GITHUB.github.io/drop-da-mari"
}
```

**Exemplo**:
```json
{
  "homepage": "https://mariasilva.github.io/drop-da-mari"
}
```

### 3. Instalar Dependências

```bash
npm install
```

### 4. Testar Localmente

```bash
npm start
```

Acesse http://localhost:3000 para verificar se tudo está funcionando.

### 5. Deploy para GitHub Pages

```bash
# Build e deploy em um comando
npm run deploy
```

Este comando vai:
1. Criar a pasta `build` com os arquivos otimizados
2. Fazer push para a branch `gh-pages`
3. Configurar automaticamente o GitHub Pages

### 6. Ativar GitHub Pages (se necessário)

1. Vá para o repositório no GitHub
2. Clique em **Settings**
3. Role até **Pages**
4. Em **Source**, selecione **Deploy from a branch**
5. Escolha **gh-pages** como branch
6. Clique em **Save**

### 7. Acessar seu Site

Aguarde alguns minutos e acesse:
```
https://SEU_USUARIO.github.io/drop-da-mari
```

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento local
npm start

# Build para produção
npm run build

# Deploy para GitHub Pages
npm run deploy

# Ver arquivos que serão enviados
npm run build && ls -la build/
```

## 🔧 Solução de Problemas

### Erro: "404 - Page not found"
- Verifique se a URL no `package.json` está correta
- Confirme que a branch `gh-pages` foi criada
- Aguarde até 10 minutos para propagação

### Erro no deploy
```bash
# Limpar cache e tentar novamente
rm -rf node_modules package-lock.json
npm install
npm run deploy
```

### Site não atualiza após mudanças
- O GitHub Pages pode ter cache
- Force refresh: Ctrl+F5 (Windows) ou Cmd+Shift+R (Mac)
- Aguarde até 10 minutos

## 📝 Estrutura de Arquivos para GitHub

```
seu-repositorio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── products.js          # ← Arquivo principal para editar
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json             # ← Configure o homepage aqui
├── README.md
└── DEPLOY-GITHUB-PAGES.md
```

## ✅ Checklist Final

- [ ] Repository criado no GitHub
- [ ] `package.json` configurado com sua URL
- [ ] `npm install` executado
- [ ] `npm start` funcionando localmente
- [ ] `npm run deploy` executado sem erros
- [ ] GitHub Pages ativado nas configurações
- [ ] Site acessível na URL final

## 🎯 Próximos Passos

Depois do deploy:

1. **Edite os produtos** no arquivo `src/products.js`
2. **Troque as imagens** por URLs reais
3. **Configure links de afiliado** reais
4. **Teste cupons** e funcionalidades
5. **Monitore performance** e conversões

---

**🎉 Parabéns! Seu site de afiliados está no ar!**

Agora é só divulgar e começar a vender! 🚀