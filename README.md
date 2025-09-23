# 🛍️ Drop da Mari - Landing Page de Afiliados

Landing page responsiva e otimizada para marketing de afiliados no nicho fitness. Estrutura simples, funcional e fácil de editar.

## 🚀 Funcionalidades

- ✅ **Responsivo** - Funciona em desktop, tablet e mobile
- ✅ **Fácil edição** - Produtos em arquivo separado (`products.js`)
- ✅ **Links de afiliado** - Redirecionamento automático com UTM
- ✅ **Cupons** - Sistema de cópia para área de transferência  
- ✅ **GitHub Pages** - Configurado para deploy automático
- ✅ **SEO otimizado** - Meta tags e estrutura semântica

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── Header.js        # Cabeçalho fixo
│   ├── Hero.js          # Seção principal
│   ├── Products.js      # Lista de produtos
│   ├── ProductCard.js   # Card individual do produto
│   ├── Footer.js        # Rodapé
│   └── LandingPage.js   # Página principal
├── products.js          # 📝 ARQUIVO PARA EDITAR PRODUTOS
├── App.js              # Componente raiz
├── App.css             # Estilos principais
└── index.js            # Ponto de entrada
```

## 🛠️ Como Editar os Produtos

### Arquivo Principal: `src/products.js`

Este é o único arquivo que você precisa editar para gerenciar produtos:

```javascript
export default {
  "products": [
    {
      "id": 1,
      "title": "Nome do Produto",                    // ✏️ Título
      "description": "Descrição curta do produto",   // ✏️ Descrição
      "image": "https://exemplo.com/imagem.jpg",     // ✏️ URL da imagem
      "price": "R$ 127,42",                         // ✏️ Preço com desconto
      "originalPrice": "R$ 149,90",                 // ✏️ Preço original
      "discount": "15% OFF",                        // ✏️ Badge de desconto
      "coupon": "MARI15",                           // ✏️ Código do cupom
      "affiliateLink": "https://loja.com/...",      // ✏️ Link de afiliado
      "category": "Categoria"                       // ✏️ Categoria
    }
    // Adicione mais produtos aqui...
  ]
}
```

### Para Adicionar um Novo Produto:

1. Copie um produto existente
2. Altere o `id` para um número único
3. Substitua todos os campos pelos dados reais
4. Salve o arquivo

### Para Remover um Produto:

1. Delete o objeto do produto completo
2. Certifique-se de manter a vírgula entre produtos
3. Salve o arquivo

## 🎨 Personalização Visual

### Cores da Marca
As cores principais estão em `src/App.css`:

```css
/* Rosa principal */
.text-pink-500 { color: #f56565; }

/* Verde para botões */
.bg-green-500 { background: #48bb78; }
```

### Textos da Landing Page
Edite diretamente nos componentes:

- **Título principal**: `src/components/Hero.js` (linha ~12)
- **Nome da marca**: `src/components/Header.js` (linha ~8)
- **Rodapé**: `src/components/Footer.js`

## 🚀 Como Publicar no GitHub Pages

### 1. Configuração Inicial

1. Crie um repositório no GitHub
2. No arquivo `package.json`, altere a linha:
   ```json
   "homepage": "https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO"
   ```

### 2. Deploy Automático

```bash
# Instalar dependências
npm install

# Build do projeto
npm run build

# Deploy para GitHub Pages
npm run deploy
```

### 3. Configurar GitHub Pages

1. Vá em **Settings** do seu repositório
2. Clique em **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha a branch **gh-pages**
5. Aguarde alguns minutos

Seu site estará disponível em: `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO`

## 🔧 Comandos Disponíveis

```bash
npm start          # Inicia servidor de desenvolvimento
npm run build      # Gera versão para produção
npm run deploy     # Publica no GitHub Pages
npm test           # Executa testes
```

## 📱 Funcionalidades dos Produtos

### Botão "Comprar com Desconto"
- Abre o link de afiliado em nova aba
- Preserva todos os parâmetros UTM para tracking
- Cupom já aplicado na URL

### Botão "Copiar Cupom"
- Copia o código para área de transferência
- Mostra notificação de confirmação
- Fallback para dispositivos sem clipboard API

### Sistema Responsivo
- Grid adaptativo: 1 coluna (mobile), 2 (tablet), 3 (desktop)
- Imagens otimizadas com lazy loading
- Navegação touch-friendly

## 🎯 SEO e Performance

- **Meta tags** configuradas
- **Open Graph** para redes sociais
- **Imagens otimizadas** (400x400px recomendado)
- **Lazy loading** automático
- **Lighthouse score** otimizado

## 🔍 Links de Afiliado

### Formato Recomendado:
```
https://loja.com/produto?coupon=CODIGO&utm_source=drop-da-mari&utm_medium=affiliate&utm_campaign=cupom
```

### Parâmetros UTM:
- `utm_source=drop-da-mari` - Identifica a origem
- `utm_medium=affiliate` - Meio de marketing  
- `utm_campaign=cupom` - Campanha específica

## 🆘 Solução de Problemas

### Site não carrega após deploy:
1. Verifique se a URL no `package.json` está correta
2. Confirme se a branch `gh-pages` foi criada
3. Aguarde até 10 minutos para propagação

### Produtos não aparecem:
1. Verifique a sintaxe do `products.js`
2. Certifique-se de que não há vírgulas extras
3. Todos os campos obrigatórios preenchidos

### Imagens não carregam:
1. Use URLs diretas (não links de visualização)
2. Prefira serviços como Unsplash, Imgur
3. Teste a URL no navegador antes de usar

## 📞 Suporte

Estrutura criada para ser auto-suficiente. Para dúvidas:

1. Consulte este README
2. Verifique os comentários no código
3. Teste localmente com `npm start`

---

**🎉 Seu site de afiliados está pronto para vender!**

Edite `src/products.js`, faça o deploy e comece a ganhar comissões. Boa sorte! 🚀
