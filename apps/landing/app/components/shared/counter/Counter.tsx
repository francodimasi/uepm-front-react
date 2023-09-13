import { CounterItem } from "./types/counter.type"

export const Counter = ({ label, value }:CounterItem) => {
    return (
        <div>
            <span className="text-primary font-serif text-7xl font-medium relative right-2 mb-4 block">{value}</span>
            <div className="text-light text-xs font-bold uppercase">{label}</div>
        </div>
    )
}