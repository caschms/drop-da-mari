import React, { useState } from "react";
import { Mail, Send, Building2, Handshake } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section
      id="contato"
      className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Handshake size={16} />
              <span>Parcerias e Colaborações</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Seja nosso parceiro
            </h2>
            <p className="text-gray-600 text-lg">
              Empresas interessadas em parcerias ou colaborações podem preencher
              o formulário abaixo para entrar em contato conosco.
            </p>
          </div>

          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              {!isSubmitted ? (
                <form
                  name="contato"
                  method="POST"
                  data-netlify="true"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  {/* Campo hidden obrigatório para Netlify Forms */}
                  <input type="hidden" name="form-name" value="contato" />

                  <Input
                    type="text"
                    name="company"
                    placeholder="Nome da empresa"
                    className="h-12 px-4 text-lg border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email de contato"
                    className="h-12 px-4 text-lg border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Escreva sua proposta"
                    rows="4"
                    className="w-full border rounded-lg px-4 py-2 text-lg border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 h-12 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <Send size={18} className="mr-2" />
                    Enviar proposta
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Proposta enviada!
                  </h3>
                  <p className="text-gray-600">
                    Nossa equipe retornará o contato em breve. Obrigado pelo
                    interesse!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Benefícios da parceria */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building2 size={20} className="text-blue-500" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Visibilidade</h4>
              <p className="text-sm text-gray-600">
                Exposição para novos públicos e clientes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Handshake size={20} className="text-green-500" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Colaboração</h4>
              <p className="text-sm text-gray-600">
                Trabalhamos juntos em campanhas e projetos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail size={20} className="text-purple-500" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">
                Contato direto
              </h4>
              <p className="text-sm text-gray-600">
                Comunicação clara e ágil com nossa equipe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
