import { useState } from "react";
import { TabItem } from "../tabs/tabs.type";
import { AccordionItem } from "./AccordionItem";

type AccordionProps = {
    items: TabItem[];
}

export const Accordion = ({ items }: AccordionProps) => {

    const [selected, setSelected] = useState(0);

    return (
        <>
            {
                items.map((item, index) => (
                    <div key={index}>
                        <AccordionItem item={item} onSelect={() => setSelected(index)} selected={selected === index} />
                    </div>
                ))
            }
        </>
    )
}