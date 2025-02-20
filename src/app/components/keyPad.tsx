import clsx from "clsx";

interface KeyPadProps {
  keys: Object[];
  onClick: (item: string) => void;
}

const buttonClasses: any = {
  "=": "bg-equal col-span-2",
  RESET: "bg-reset col-span-2",
  DEL: "bg-reset",
  default: "text-gray-900 bg-red-100",
};

export const KeyPad = ({ keys, onClick }: KeyPadProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {keys.map((item: any) => (
        <button
          className={clsx(
            "rounded-md p-4 font-bold drop-shadow-lg",
            buttonClasses[item?.value] || buttonClasses.default
          )}
          key={item?.key}
          value={item?.value}
          onClick={() => onClick(item.key)}
        >
          {item?.value}
        </button>
      ))}
    </div>
  );
};
