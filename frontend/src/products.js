const products = [
  {
    "id": "prod-1",
    "name": "Óculos Yopp Hype Pink Cadillac",
    "description": "A essência do clássico filme dos anos 80!",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758919759/pink_cad_fqtz8i.webp",
    "affiliateLink": "https://www.yopp.com.br/hypes/oculos-de-sol-polarizado-uv400-pink-cadillac",
    "category": "Acessórios",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-2",
    "name": "Óculos Yopp Performance Ironman BR",
    "description": "Um diferencial para qualquer modalidade!",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758915604/oculos_de_sol_uv400_mask_v4_948_2_6e3d27123b931ebbddb746513e8e2827_u1os5z.webp",
    "affiliateLink": "https://www.yopp.com.br/ironman-br/fotocromatico",
    "category": "Acessórios",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-3",
    "name": "Óculos Yopp Ironman Brasil",
    "description": "Ideal para esporte e lazer.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758919765/ironman_bra_wybvu5.webp",
    "affiliateLink": "https://www.yopp.com.br/ironman-brasil/oculos/oculos-cinza-ironman-br",
    "category": "Acessórios",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-4",
    "name": "Óculos Yopp Performance Ironman Brasil Mask",
    "description": "Moderno e flexível, para qualquer tipo de rosto.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758919764/iron_man_mask_wa1801.webp",
    "affiliateLink": "https://www.yopp.com.br/ironman-brasil/oculos-de-sol-performance-yopp-ironman-brasil-uv400-mask-imb2-4",
    "category": "Acessórios",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-5",
    "name": "Boné Esportivo Yopp 5 Panel",
    "description": "Tecido leve e respirável com proteção UV50.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758915343/bone_esportivo_5_painel_rosa_jatuya.webp",
    "affiliateLink": "https://www.yopp.com.br/loja/busca.php?loja=878826&palavra_busca=bone+panel",
    "category": "Acessórios",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-6",
    "name": "Óculos Yopp Performance Mask K3",
    "description": "O óculos esportivo mais leve da Yopp!",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758919770/maskk3_i0wgej.webp",
    "affiliateLink": "https://www.yopp.com.br/mascara/mask-k/oculos-de-sol-performance-fotocromatico-uv400-mask-k3",
    "category": "Acessórios",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-7",
    "name": "Óculos Yopp Performance Rio 25 Leblon",
    "description": "Da coleção Maratona do Rio 2025.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758919759/mdrio_quo99f.webp",
    "affiliateLink": "https://www.yopp.com.br/mascara/mdr-performance/oculos-de-sol-performance-uv400-mdr25-leblon",
    "category": "Acessórios",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-8",
    "name": "Óculos Yopp Performance Mask A3",
    "description": "Inusitado e extremamente funcional!",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758919768/mask_a3_c0fbei.webp",
    "affiliateLink": "https://www.yopp.com.br/mascaras/mask-a/oculos-de-sol-performance-fotocromatico-uv400-mask-a3",
    "category": "Acessórios",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-9",
    "name": "Óculos Yopp Redondinho Lua Nova",
    "description": "Pra iluminar a rotina esportiva.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758919767/luanova_ggoznt.webp",
    "affiliateLink": "https://www.yopp.com.br/redondinho/oculos-de-sol-polarizado-uv400-lua-nova",
    "category": "Acessórios",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-10",
    "name": "Cinta Porta Numeral e Gel Yopp",
    "description": "Acessório indispensável para qualquer corredor.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758915343/cinta_porta_numeral_e_gel_btyjjq.webp",
    "affiliateLink": "https://www.yopp.com.br/yopp/acessorios/cinta-porta-numeral-e-gel-corpreto",
    "category": "Acessórios",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-11",
    "name": "Óculos Yopp Camaleão Vermelho",
    "description": "Esse é para quem gosta de chamar a atenção!",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758919762/camaleao_n1pk8o.webp",
    "affiliateLink": "https://www.yopp.com.br/yopp/oculos/camaleao/yopp-camaleao-vermelho",
    "category": "Acessórios",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-12",
    "name": "Óculos Yopp Sangue nos Zóio",
    "description": "É sangue nos zoio até o final da prova!",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758919761/sanguenozoio_rhkidi.webp",
    "affiliateLink": "https://www.yopp.com.br/yopp/oculos/sangue-nos-zoios",
    "category": "Acessórios",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-13",
    "name": "Kit Super Nutri Ervas Naturais",
    "description": "A solução completa para restaurar a saúde dos cabelos.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758838034/kit_super_nutri_321_1_ccbf423cac484e35dcb6543ac48e0ed7_tijfu4.webp",
    "affiliateLink": "https://www.ervasnaturais.com.br/kits/kit-super-nutri",
    "category": "Cabelos",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-14",
    "name": "Kit Duo Antifrizz SOS Frizz",
    "description": "Escolha ideal para quem busca reduzir o frizz!",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758917095/Kit_Duo_Alinhamento_Instantaneo_1_xmajif.webp",
    "affiliateLink": "https://sosfrizz.com.br/products/kit-dupla-antifrizz",
    "category": "Cabelos",
    "discount": "10% OFF",
    "coupon": "MARIBRAGANCA"
  },
  {
    "id": "prod-15",
    "name": "Kit Liso Perfeito Ervas Naturais",
    "description": "Cabelos lisos, bem nutridos e resistentes.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758916983/Kit_Liso_Perfeito_zbchib.webp",
    "affiliateLink": "https://www.ervasnaturais.com.br/kits/kit-liso-perfeito",
    "category": "Cabelos",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-16",
    "name": "Esfoliante Capilar Ervas Naturais",
    "description": "Pra renovação capilar e tratamento antiqueda.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758916960/Esfoliante_Capilar_Jaborandi_bcvzyx.webp",
    "affiliateLink": "https://www.ervasnaturais.com.br/esfoliante-capilar-100g",
    "category": "Cabelos",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-17",
    "name": "Máscara Code 8 Ervas Naturais",
    "description": "Blindagem das cutículas e reconstrução dos fios.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758916998/M%C3%A1scara_Code_8_cozk3o.webp",
    "affiliateLink": "https://www.ervasnaturais.com.br/mascara-code-8-250g",
    "category": "Cabelos",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-18",
    "name": "Óleo Reparador Ervas Naturais",
    "description": "Nutre, repara e protege.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758917002/%C3%93leo_Reparador_Liso_Perfeito_x7mj5s.webp",
    "affiliateLink": "https://www.ervasnaturais.com.br/linhas/cuidados-intensivos/liso-perfeito/oleo-reparador-liso-perfeito-30ml",
    "category": "Cabelos",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-19",
    "name": "Gloss Capilar Ervas Naturais",
    "description": "Nutre e protege contra calor e danos externos.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758916972/Gloss_x9vorl.webp",
    "affiliateLink": "https://www.ervasnaturais.com.br/gloss-45ml",
    "category": "Cabelos",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-20",
    "name": "Protetor Solar Kesser All Protect",
    "description": "Pra manter a pele protegida e radiante!",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758843838/JFR_4729_scyvck.webp",
    "affiliateLink": "https://kesserstore.com.br/products/dupla-all-protect",
    "category": "Pele",
    "discount": "10% OFF",
    "coupon": "MARIBRAGANCA"
  },
  {
    "id": "prod-21",
    "name": "Gel de limpeza facial Kesser All Clean",
    "description": "",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1759169761/Gel_de_Limpeza_Facial_All_Clean_pw2t0l.webp",
    "affiliateLink": "https://kesserstore.com.br/products/gel-de-limpeza-facial-all-clean",
    "category": "Pele",
    "coupon": "MARIBRAGANCA"
  },
  {
    "id": "prod-22",
    "name": "Top Ahvic Betina (cores)",
    "description": "Aliado perfeito para sair do óbvio nos dias de treino.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758925663/Top_Betina_drop_zfm3st.png",
    "affiliateLink": "https://www.ahvic.com.br/produtos/tops/top-betina-drop?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-23",
    "name": "Top Ahvic Betina",
    "description": "Aliado perfeito para sair do óbvio nos dias de treino.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758925702/Top_Betina_preto_rhpnlt.png",
    "affiliateLink": "https://www.ahvic.com.br/fitness/tops/top-betina-drop-preto?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-24",
    "name": "Short Ahvic Arpoador",
    "description": "Edição inspirada nas cores da Maratona do Rio.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758921398/Short_Arpoador_fduhqx.png",
    "affiliateLink": "https://www.ahvic.com.br/colecoes/colecao-maratona-do-rio/short-arpoador-multi-bolsos?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-25",
    "name": "Short Ahvic Ipanema",
    "description": "Edição inspirada nas cores da Maratona do Rio.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758921397/Short_Ipanema_bhg1pv.png",
    "affiliateLink": "https://www.ahvic.com.br/colecoes/colecao-maratona-do-rio/short-ipanema-com-bolso?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-26",
    "name": "Top Ahvic Ipanema",
    "description": "Edição inspirada nas cores da Maratona do Rio.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758921396/Top_Ipanema_zr9uyr.png",
    "affiliateLink": "https://www.ahvic.com.br/colecoes/colecao-maratona-do-rio/top-ipanema?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-27",
    "name": "Short Ahvic Mari (cores)",
    "description": "Para quem busca performance nos treinos de corrida.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758925734/Short_Mari_Run_mfvmra.png",
    "affiliateLink": "https://www.ahvic.com.br/produtos/shorts/short-mari-run-drop?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-28",
    "name": "Short Ahvic Mari",
    "description": "Para quem busca performance nos treinos de corrida.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758925752/Short_Mari_P%C3%BArpura_nolkgc.png",
    "affiliateLink": "https://www.ahvic.com.br/fitness/shorts/short-mari-run-drop-purpura?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-29",
    "name": "Short Ahvic Tai",
    "description": "Perfeita para quem busca liberdade, conforto e estilo.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758925772/Short_Tai_drop_nm5r2d.png",
    "affiliateLink": "https://www.ahvic.com.br/produtos/shorts/short-tai-drop?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-30",
    "name": "Conjunto Ahvic Betina",
    "description": "Aliado perfeito para sair do óbvio nos dias de treino.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758924673/Conjunto_Betina_Madder_Brown_r4qv9t.png",
    "affiliateLink": "https://www.ahvic.com.br/conjuntos/conjunto-betina-madder-brown?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-31",
    "name": "Short Ahvic Venice",
    "description": "Conforto e praticidade para as atividades físicas.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758925234/Short_Venice_jxa7hs.png",
    "affiliateLink": "https://www.ahvic.com.br/fitness/shorts/short-venice?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-32",
    "name": "Top Ahvic Venice",
    "description": "Conforto e praticidade para as atividades físicas.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758925515/Top_Venice_voc0c2.png",
    "affiliateLink": "https://www.ahvic.com.br/fitness/tops/top-venice?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-33",
    "name": "Conjunto Ahvic Flow e Move",
    "description": "Para acompanhar você em cada passo.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758925233/Top_Flow_Short_Move_chocolate_f1wffx.png",
    "affiliateLink": "https://www.ahvic.com.br/conjuntos/conjunto-top-flow-e-short-move-chocolate?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-34",
    "name": "Conjunto Ahvic Flow",
    "description": "Para acompanhar você em cada passo.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758925233/Conjunto_Flow_zoo0ef.png",
    "affiliateLink": "https://www.ahvic.com.br/conjuntos/conjunto-top-e-short-flow-azul-vortex?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-35",
    "name": "Macaquinho Ahvic Lari",
    "description": "A peça ideal para os seus treinos.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758926277/Macaquinho_Lari_Run_Carmel_sua4m6.png",
    "affiliateLink": "https://www.ahvic.com.br/conjuntos/macaquinho-lari-carmel?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-36",
    "name": "Conjunto Ahvic Napa",
    "description": "Equilíbrio perfeito entre sustentação e conforto.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758926370/Conjunto_Napa_preto_bmhfdl.png",
    "affiliateLink": "https://www.ahvic.com.br/conjuntos/conjunto-napa-preto?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-37",
    "name": "Macaquinho Ahvic Camila",
    "description": "Sofisticação com conforto ao seu treino.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758926436/Macaquinho_Camila_qsy3ls.png",
    "affiliateLink": "https://www.ahvic.com.br/produtos/conjuntos/macaquinho-camila?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-38",
    "name": "Top Ahvic Flow",
    "description": "Para acompanhar você em cada passo.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758926514/Top_Flow_branco_ca7qvt.png",
    "affiliateLink": "https://www.ahvic.com.br/colecao-sprint-drop-ii/top-flow-drop-branco?parceiro=5913",
    "category": "Roupas",
    "discount": "10% OFF",
    "coupon": "MARI"
  },
  {
    "id": "prod-39",
    "name": "True Whey Protein",
    "description": "Leve, limpo, natural e delicioso!",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758837040/Whey_Protein_jwxanq.webp",
    "affiliateLink": "https://www.truesource.com.br/products/true-whey-protein-macadamia-ice-cream-837-g",
    "category": "Suplementos",
    "discount": "20% OFF",
    "coupon": "TRUEMARI"
  },
  {
    "id": "prod-40",
    "name": "Pré-treino True Energyzer",
    "description": "Energia extra na performance!",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758837010/ENERGYZER-FRUIT-PUNCH_rnabgk.webp",
    "affiliateLink": "https://www.truesource.com.br/products/true-energyzer-focus-fruit-punch-360g-true-source?_pos=2&_psq=ener&_ss=e&_v=1.0",
    "category": "Suplementos",
    "discount": "20% OFF",
    "coupon": "TRUEMARI"
  },
  {
    "id": "prod-41",
    "name": "True Curcuma",
    "description": "Todos os benefícios ativos da cúrcuma.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758918087/curcuma_jxegmo.webp",
    "affiliateLink": "https://www.truesource.com.br/products/true-curcuma-omega-lipossomal-120-capsulas-true-source",
    "category": "Suplementos",
    "discount": "20% OFF",
    "coupon": "TRUEMARI"
  },
  {
    "id": "prod-42",
    "name": "True Nac",
    "description": "Excelente antioxidante.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758918086/true_nac_o6z17e.webp",
    "affiliateLink": "https://www.truesource.com.br/products/true-nac-30-capsulas-true-source?_pos=1&_sid=d4e09d574&_ss=r",
    "category": "Suplementos",
    "discount": "20% OFF",
    "coupon": "TRUEMARI"
  },
  {
    "id": "prod-43",
    "name": "True Omega 3",
    "description": "Nutriente essencial para a saúde.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758918086/omega3_pvvdmo.webp",
    "affiliateLink": "https://www.truesource.com.br/products/omega-3-true-com-vitamina-e-180-capsulas-true-source?_pos=2&_sid=134ed8790&_ss=r",
    "category": "Suplementos",
    "discount": "20% OFF",
    "coupon": "TRUEMARI"
  },
  {
    "id": "prod-44",
    "name": "Gel Intra-treino Sport line True",
    "description": "Pra impulsionar a energia e desempenho!",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758918087/gel_intra_pd1jfc.webp",
    "affiliateLink": "https://www.truesource.com.br/products/gel-intra-treino-sport-line-kiwi-morango-display-c-10-unidades-true-source?_pos=8&_sid=982a7df2e&_ss=r",
    "category": "Suplementos",
    "discount": "20% OFF",
    "coupon": "TRUEMARI"
  },
  {
    "id": "prod-45",
    "name": "True Creatina Creapure",
    "description": "Pra auxiliar no aumento da força e rendimento.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758918444/creatinatrue_bbali7.webp",
    "affiliateLink": "https://www.truesource.com.br/products/true-creatine-monohydrate-creapure-300g-true-source?_pos=10&_sid=f013afbcc&_ss=r",
    "category": "Suplementos",
    "discount": "20% OFF",
    "coupon": "TRUEMARI"
  },
  {
    "id": "prod-46",
    "name": "Gummies Guday",
    "description": "Suplemento com sabor de sobremesa.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758918291/guday_zgpur8.webp",
    "affiliateLink": "https://guday.com.br/",
    "category": "Suplementos",
    "discount": "10% OFF",
    "coupon": "MARIBRAGANCA"
  },
  {
    "id": "prod-47",
    "name": "Repositor de Eletrólitos Liquidz",
    "description": "Tecnologia de hidratação funcional.",
    "image": "https://res.cloudinary.com/dupz0ffvs/image/upload/v1758928181/prod_melancia_1_xy4hvo.webp",
    "affiliateLink": "https://oferta.liquidz.com.br/comprar",
    "category": "Suplementos",
    "discount": "10% OFF",
    "coupon": "MARIANABRAGANCA"
  }
];

export default products;
