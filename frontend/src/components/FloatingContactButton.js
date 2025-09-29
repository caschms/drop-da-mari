import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      { threshold: 0.2 }
    );

    observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  const subject = encodeURIComponent("Parceria com o Drop da Mari");
  const body = encodeURIComponent(
    "Olá, Mari!\n\nMeu nome é [Seu Nome] da [Marca]. Gostaria de enviar uma proposta de parceria para divulgação de [Produto/Cupom].\n\nLinks e infos:\n- Site:\n- Instagram:\n- Condições (produto, comissão, cupom, vigência):\n\nObrigado!"
  );

  return (
    <AnimatePresence>
      {showButton && (
        <motion.a
          key="floating-contact"
          href={`mailto:contato@dropdamari.com?subject=${subject}&body=${body}`}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 flex items-center gap-2 bg-pink-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors z-50"
        >
          <Mail size={20} />
          <span className="font-medium">Parcerias</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton;
