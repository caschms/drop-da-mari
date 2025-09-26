/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

const INPUT_XLSX = path.join(__dirname, "..", "src", "data", "products.xlsx");
const OUTPUT_JS  = path.join(__dirname, "..", "src", "products.js");

function sanitizeStr(v) {
  if (v === null || v === undefined) return "";
  return String(v).trim();
}

function buildProduct(row, index) {
  const id = sanitizeStr(row.id) || `prod-${index + 1}`;
  const name = sanitizeStr(row.name);
  const description = sanitizeStr(row.description);
  const image = sanitizeStr(row.image);
  const discount = sanitizeStr(row.discount);
  const coupon = sanitizeStr(row.coupon);
  const affiliateLink = sanitizeStr(row.affiliateLink);
  const category = sanitizeStr(row.category) || "Outros";

  // Valida campos essenciais
  const missing = [];
  if (!name) missing.push("name");
  if (!image) missing.push("image");
  if (!affiliateLink) missing.push("affiliateLink");

  if (missing.length) {
    console.warn(
      `⚠️  Linha ${index + 2}: campos obrigatórios ausentes: ${missing.join(", ")} — produto ignorado.`
    );
    return null;
  }

  // Monta objeto (omite campos vazios opcionais)
  const p = { id, name, description, image, affiliateLink, category };
  if (discount) p.discount = discount;
  if (coupon) p.coupon = coupon;

  return p;
}

function main() {
  if (!fs.existsSync(INPUT_XLSX)) {
    console.error(`❌ Planilha não encontrada em: ${INPUT_XLSX}`);
    process.exit(1);
  }

  const wb = xlsx.readFile(INPUT_XLSX);
  const sheetName = wb.SheetNames[0];
  const ws = wb.Sheets[sheetName];

  // defval: "" => mantém colunas vazias como string vazia (evita undefined)
  const rows = xlsx.utils.sheet_to_json(ws, { defval: "" });

  const products = [];
  const ids = new Set();
  let skipped = 0;

  rows.forEach((row, i) => {
    const prod = buildProduct(row, i);
    if (!prod) {
      skipped++;
      return;
    }
    if (ids.has(prod.id)) {
      console.warn(`⚠️  Linha ${i + 2}: id duplicado "${prod.id}" — novo id gerado.`);
      prod.id = `prod-${i + 1}`;
    }
    ids.add(prod.id);
    products.push(prod);
  });

  const content =
`const products = ${JSON.stringify(products, null, 2)};

export default products;
`;

  fs.writeFileSync(OUTPUT_JS, content, "utf8");

  console.log(`✅ Gerado: ${OUTPUT_JS}`);
  console.log(`   Produtos válidos: ${products.length}`);
  if (skipped) console.log(`   Ignorados (incompletos): ${skipped}`);
}

main();
