'use client';

import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className=" w-full gap-5 p-24 bg-light flex-col justify-between items-start inline-flex">
      <div>
        <span className="text-dark text-5xl font-semibold font-['Lexend'] leading-10">
          Categoria No Encontrada
          <br />
        </span>
      </div>
      <div>
        <button className=" text-2xl text-primary-dark underline font-normal font-['Lexend']" type="button" onClick={() => router.back()}>
          volver
        </button>
      </div>
    </div>
  );
}
