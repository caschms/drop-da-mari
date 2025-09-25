import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";

const FloatingContactButton = () => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const aboutSection = document.getElementById("sobre");
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowButton(false); // some quando AboutSection visível
        } else {
          setShowButton(true); // aparece de novo
        }
      },
      { threshold: 0.2 } // 20% visível já conta
    );

    observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  if (!showButton) return null;

  const subject = encodeURIComponent("Parceria com o Drop da Mari");
  const body = encodeURIComponent(
    "Olá, Mari!\n\nMeu nome é [Seu Nome] da [Marca]. Gostaria de enviar uma proposta de parceria para divulgação de [Produto/Cupom].\n\nLinks e infos:\n- Site:\n- Instagram:\n- Condições (produto, comissão, cupom, vigência):\n\nObrigado!"
  );

  return (
    <a
      href={`mailto:contato@dropdamari.com?subject=${subject}&body=${body}`}
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-pink-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-all z-50"
    >
      <Mail size={20} />
      <span className="font-medium">Parcerias</span>
    </a>
  );
};

export default FloatingContactButton;
