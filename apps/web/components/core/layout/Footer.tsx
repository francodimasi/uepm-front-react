import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => (
  <div className="h-32 flex justify-between bg-green-500 p-4">
    <span>Susripción a Newsletter</span>
    <span>Selección de idioma</span>
    <ul>
      <li>
        <Link href={"/about"}>¿Qué es Un Ensayo Para Mí?</Link>
      </li>
      <li>
        <Link href={"/partners"}>Nuestra Red</Link>
      </li>
    </ul>
    <span>Síguenos en las redes</span>
    <span>Términos y condiciones</span>
  </div>
);
