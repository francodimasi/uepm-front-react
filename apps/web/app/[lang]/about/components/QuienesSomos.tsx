
const Title = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-start sm:justify-evenly items-start sm:items-center gap-4 sm:gap-72">
      <div className="text-dark text-2xl sm:text-7xl font-semibold font-['Lexend'] leading-10 sm:leading-[80px]">
        Quiénes somos
      </div>
      <div>
        <span className="text-dark text-xl sm:text-[28px] font-normal font-['DMSans'] leading-7 sm:leading-10">
          Trabajamos en la inclusión de pacientes uniendo a{' '}
        </span>
        <span className="text-dark text-xl sm:text-[28px] font-bold font-['DM Sans'] leading-7 sm:leading-10">
          todos los actores de la investigación
        </span>
        <span className="text-dark text-xl sm:text-[28px] font-bold font-['DM Sans'] leading-7 sm:leading-10">
          .
        </span>
      </div>
    </div>
  )
}

export const QuienesSomos: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-12">
      <Title/>
    </div>
  );
};