import React from "react";
import { Mail } from "lucide-react"; // Ícone de e-mail (vem da lib lucide-react)

const FloatingContactButton = () => {
  return (
    <a
  href={`mailto:contato@dropdamari.com?subject=${encodeURIComponent("Parceria com o Drop da Mari")}&body=${encodeURIComponent(
    "Olá, Mari!\n\nMeu nome é [Seu Nome] da [Marca]. Gostaria de enviar uma proposta de parceria para divulgação de [Produto/Cupom].\n\nLinks e infos:\n- Site:\n- Instagram:\n- Condições (produto, comissão, cupom, vigência):\n\nObrigado!"
  )}`}
  className="fixed bottom-6 right-6 flex items-center gap-2 bg-pink-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-all"
>
      <Mail size={20} />
      <span className="font-medium">Contato</span>
    </a>
  );
};

export default FloatingContactButton;
