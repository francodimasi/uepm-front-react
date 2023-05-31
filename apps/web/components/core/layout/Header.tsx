import Link from "next/link";
import React from "react";

export const Header: React.FC = () => (
  <div className="h-16 flex justify-between p-4 bg-green-500">
    <Link href={"/"}>Logo</Link>
    <p>Noticias Médicas</p>
    <Link href={"/partners"}>Nuestra Red</Link>
    <p>Acceso Investigador</p>
  </div>
);
