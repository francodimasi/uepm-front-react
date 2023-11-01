import { useMenu } from "@hooks/useMenu";
import { SwitchLanguage } from "ui"

export const LanguageSelector = () => {
    const { languages } = useMenu();
    return (
        <div>
            <SwitchLanguage className="table text-light ml-3 px-5 py-3 border-light border-solid transition-all border-1 text-xs uppercase hover:bg-light hover:text-dark cursor-pointer appearance-none outline-none" iso={true} languages={languages} />
        </div>
    )
}