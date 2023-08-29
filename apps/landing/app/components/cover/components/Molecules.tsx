import Image from "next/image";
import elipses from "public/images/cover/elipses.png";

export const Molecules = () => {
  return (
    <div className="h-full w-full absolute top-0 right-0">
        <Image className="absolute top-0 right-0 w-5/12" src={elipses} alt="elipses" />
    </div>
  );
};
