import React from "react";

const ContactSection = () => {
  const subject = encodeURIComponent("Parceria com o Drop da Mari");
  const body = encodeURIComponent(
    "Olá, Mari!\n\nMeu nome é [Seu Nome] da [Marca]. Gostaria de enviar uma proposta de parceria para divulgação de [Produto/Cupom].\n\nLinks e infos:\n- Site:\n- Instagram:\n- Condições (produto, comissão, cupom, vigência):\n\nObrigado!"
  );
  const mailto = `mailto:contato@dropdamari.com?subject=${subject}&body=${body}`;

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Contato e Parcerias
        </h2>
        <p className="text-gray-600 mb-6">
          Se a sua marca quer aparecer no <strong>Drop da Mari</strong>, envie
          sua proposta por e-mail. Respondemos com as diretrizes e próximos
          passos.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href={mailto}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-pink-600 text-white font-medium shadow hover:bg-pink-700 transition"
          >
            Enviar proposta por e-mail
          </a>
          
        </div>

        <p className="text-xs text-gray-400 mt-4">
          *Este site é uma vitrine de produtos com cupons. As compras acontecem
          nos sites oficiais das marcas parceiras.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
