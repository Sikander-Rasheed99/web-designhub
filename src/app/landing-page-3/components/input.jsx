"use client"
// Hooks
import { useId } from "react";

const Input = ({
    type = "text",
    name,
    value,
    placeholder,
    disabled = false,
    handle,
    label,
    css,
    height = "h-[40px]",
    bg = "bg-transparent",
    color = "text-white",
    border = "border-b-2",
    padding = "px-1"
}) => {
    const referenceID = useId();
    return (
        <div className="relative">
            {label && <label
                htmlFor={referenceID}
            >
                {label}
            </label>}
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                id={referenceID}
                onChange={handle}
                className={`focus-visible:outline-none w-full ${padding} ${border} text-[15px] placeholder:text-white ${bg} ${color} font-medium ${height} ${css}`}
            />
        </div>
    )
}

export default Input;