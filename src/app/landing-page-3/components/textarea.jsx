// Hooks
import { useId } from "react";

const Textarea = ({
    name,
    value,
    placeholder,
    handle,
    label,
    css,
    height = "h-[100px]",
    bg = "bg-transparent",
    color = "text-gray-700"
}) => {
    const referenceID = useId();
    return (
        <div className="relative">
            {label && <label
                htmlFor={referenceID}
            >
                {label}
            </label>}
            <textarea
                name={name}
                value={value}
                placeholder={placeholder}
                id={referenceID}
                onChange={handle}
                className={`focus-visible:outline-none w-full p-2 border-2 text-[15px] placeholder:text-gray-300 ${bg} ${color} font-medium resize-none ${height} ${css}`}
            ></textarea>
        </div >
    )
}

export default Textarea;