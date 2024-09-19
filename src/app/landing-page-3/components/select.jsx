"use client"
// Hooks
import Image from "next/image";
import { useId, useState } from "react";

const Select = ({
    options,
    placeholder,
    handle,
    name,
    css,
    height = "h-[40px]",
    bg = "bg-transparent",
    color = "text-white",
    border = "border-b-2",
    padding = "px-1"
}) => {
    const referenceID = useId();
    const [inputValue, setInputValue] = useState("");
    const [open, setOpen] = useState(false);
    const handleSelectItem = (e) => {
        setInputValue(e);
        setOpen(false);
    }
    return (
        <div className={`relative`}>
            <div className={`relative`}>
                <input
                    type="text"
                    id={referenceID}
                    name={name}
                    readOnly
                    value={inputValue}
                    placeholder={placeholder}
                    onChange={handle}
                    className={`cursor-pointer focus-visible:outline-none w-full ${padding} ${border} text-[15px] text-gr placeholder:text-white ${bg} ${color} font-medium ${height} ${css}`}
                    onClick={() => setOpen((prev) => !prev)}
                />
                <div className={`absolute top-0 right-[0.5rem] bottom-0 flex items-center brightness-0 invert`}>
                    <Image src="/landing-page-3/icons/down.png" width={16} height={16} alt="down" />
                </div>
            </div>
            <ul className={`${open ? "block" : "hidden"} flex flex-col gap-1 bg-white p-2 rounded-md shadow-lg shadow-blue-gray-500/10 absolute top-full left-0 right-0 z-30`}>
                {
                    options && options.map((e, i) => (
                        <li
                            key={i}
                            onClick={() => handleSelectItem(e)}
                            className="text-center text-sm cursor-pointer hover:bg-gray-100 rounded-md p-2"
                        >
                            {e}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Select