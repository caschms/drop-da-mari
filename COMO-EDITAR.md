# 📝 Como Editar a Landing Page "Drop da Mari"

## 🎯 Estrutura do Projeto

A landing page está construída em React com componentes organizados para fácil edição. Todos os dados estão centralizados em arquivos específicos.

## 📦 Onde Editar Cada Coisa

### 🛍️ **PRODUTOS** (Principal)
**Arquivo**: `/app/frontend/src/data/mockProducts.js`

```javascript
{
  id: 1,
  name: "NOME DO PRODUTO",                    // ✏️ Edite aqui
  description: "Descrição curta do produto",   // ✏️ Edite aqui  
  price: 149.90,                              // ✏️ Preço original
  discountPercent: 15,                        // ✏️ % de desconto
  coupon: "MARI15",                           // ✏️ Código do cupom
  testimonial: "Depoimento da Mari aqui...",  // ✏️ Sua opinião
  image: "https://sua-imagem.jpg",            // ✏️ URL da imagem
  category: "suplementos",                    // ✏️ Categoria
  affiliateUrl: "https://loja.com?coupon=...", // ✏️ Link do parceiro
  partnerSite: "Nome da Loja"                 // ✏️ Nome da loja
}
```

### 👤 **DADOS PESSOAIS**
**Seção Sobre** - `/app/frontend/src/components/AboutSection.js`
- **Linha 7**: URL do Instagram
- **Linha 27**: Foto da Mari (substitua URL)
- **Linha 35**: Nome completo
- **Linha 36**: Descrição/título
- **Linhas 46-58**: Texto sobre você

**Rodapé** - `/app/frontend/src/components/Footer.js`
- **Linha 8**: URL do Instagram
- **Linha 13**: E-mail de contato

### 📧 **FORMULÁRIO DE E-MAIL**
**Arquivo**: `/app/frontend/src/components/ContactSection.js`
- **Linha 18**: Remova o mock e adicione action real do Formspree

```javascript
// ANTES (mock):
await new Promise(resolve => setTimeout(resolve, 1000));

// DEPOIS (real):
// Remova as linhas 18-30 e use um form HTML normal:
// <form action="https://formspree.io/f/SEU_ID" method="POST">
```

### 🎨 **CORES E ESTILOS**
**Arquivo**: `/app/frontend/src/App.css`
- **Linhas 4-6**: Cores principais da marca
- **Linhas 18-20**: Cores personalizadas Mari

### 📱 **TEXTOS DA LANDING PAGE**

#### Hero Section (`/app/frontend/src/components/HeroSection.js`)
- **Linha 23**: Badge do topo
- **Linha 27**: Título principal
- **Linha 33**: Subtítulo/descrição
- **Linha 47**: Texto dos stats

#### Header (`/app/frontend/src/components/Header.js`)
- **Linha 21**: Nome do site/marca

## 🚀 Como Aplicar as Mudanças

1. **Edite os arquivos** mencionados acima
2. **Salve as alterações**
3. **O site atualiza automaticamente** (hot reload)
4. **Teste no navegador**: http://localhost:3000

## 📸 Como Trocar Imagens

### Imagens de Produtos:
1. Suba sua imagem para um serviço (Imgur, Cloudinary, etc)
2. Copie a URL
3. Cole no campo `image` do produto em `mockProducts.js`

### Foto da Mari:
1. Suba sua foto
2. Substitua a URL na linha 27 de `AboutSection.js`

## 🔗 Configurar Links Reais

### Instagram:
- `AboutSection.js` linha 7
- `Footer.js` linha 8
- Substitua `mari_exemplo` pelo seu @

### E-mail:
- `Footer.js` linha 13
- Substitua pelo seu e-mail real

### Links de Afiliado:
- Em `mockProducts.js` no campo `affiliateUrl`
- Formato: `https://loja.com/produto?coupon=CODIGO&utm_source=drop-da-mari&utm_medium=affiliate&utm_campaign=cupom`

## ⚡ Funcionalidades Implementadas

✅ **Copiar cupom** para área de transferência  
✅ **Filtros por categoria** funcionais  
✅ **Links externos** abrem em nova aba  
✅ **Formulário de e-mail** com toast de confirmação  
✅ **Design responsivo** para mobile/desktop  
✅ **Navegação suave** entre seções  
✅ **SEO otimizado** com meta tags  

## 🎯 Próximos Passos

1. **Substitua todos os placeholder** por dados reais
2. **Configure integração de e-mail** (Formspree/Mailchimp)
3. **Adicione Google Analytics** se necessário
4. **Teste em diferentes dispositivos**
5. **Deploy** em serviço de hosting

## 🆘 Dicas de Edição

- **Sempre salve** após fazer alterações
- **Teste cada mudança** no navegador  
- **Mantenha backup** dos arquivos originais
- **Use URLs curtas** para melhor performance
- **Teste links de afiliado** antes de publicar

---

✨ **Sua landing page está pronta para bombar!** 
Qualquer dúvida, consulte os comentários no código ou faça alterações aos poucos testando uma de cada vez.