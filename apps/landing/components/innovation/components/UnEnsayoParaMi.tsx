import { LandingButton } from "ui"
import uepm from "public/images/innovation/uepm-innovation.png"
import Image from "next/image"

export const UnEnsayoParaMi = () => {
    return (
        <>
            <div className="grid grid-cols-12 text-light">
                <div className="col-span-6">
                    <Image className="w-full" src={uepm} alt="uepm" />
                </div>
                <div className="col-span-6 pl-16 flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-2xl mb-9">Un Ensayo para Mí</h3>
                        <p>
                            Soluciones 360° para vincular de manera estratégica a todos los actores involucrados en la investigación clínica para acelerar de manera efectiva el reclutamiento de pacientes.Ofrece estrategias de captación y gestión digital de pacientes, además de soporte a los investigadores médicos y a los equipos involucrados en cada Centro de Investigación.
                            A través de su buscador online, facilita el acceso de los pacientes a los ensayos clínicos ofreciendo información simple y confiable.
                        </p>
                    </div>
                    <div>
                        <span className="block font-bold mb-9">¿Quieres saber más de nuestros productos?</span>
                        <LandingButton className="table">Ver más</LandingButton>
                    </div>
                </div>
            </div>
        </>
    )
}