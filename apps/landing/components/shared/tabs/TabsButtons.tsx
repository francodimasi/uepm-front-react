type TabsButtonsProps = {
  items: string[];
  selected: number;
  onChange: (index: number) => void;
};

export const TabsButtons = ({
  items,
  selected,
  onChange,
}: TabsButtonsProps) => {
  return (
    <>
      <div className="flex">
        {items.map((item, index) => (
          <div
            onClick={() => onChange(index)}
            key={index}
            className={`group py-6 border-t-2 transition-all cursor-pointer border-light flex-1 ml-6 first:ml-0 hover:border-secondary ${
              selected === index ? "border-secondary" : ""
            }`}
          >
            <span
              className={`text-light text-lg md:text-xl xl:text-2xl font-bold transition-all group-hover:text-secondary ${
                selected === index ? "text-secondary" : ""
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
