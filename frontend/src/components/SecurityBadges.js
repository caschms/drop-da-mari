import React from "react";

export default function SecurityBadges() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
      {/* Selo SSL */}
      <div className="flex items-center gap-2 text-gray-600 text-sm">
        <span role="img" aria-label="cadeado" className="text-green-600">
          🔒
        </span>
        <span>Conexão segura com certificado SSL</span>
      </div>

      {/* Selo Google Safe Browsing */}
      <a
        href="https://transparencyreport.google.com/safe-browsing/search?url=dropdamari.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 text-sm hover:text-pink-600 transition-colors"
      >
        <img
          src="https://www.gstatic.com/images/icons/material/system/2x/security_white_24dp.png"
          alt="Google Safe Browsing"
          className="w-5 h-5"
        />
        <span>Verificação Google Safe Browsing</span>
      </a>
    </div>
  );
}
