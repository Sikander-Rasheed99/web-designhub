const Radio = ({ name, id, value, title, handle }) => {
    return (
        <label htmlFor={id} className="flex flex-row-reverse w-max cursor-pointer select-none gap-3 items-center">
            <p className="text-[16px] font-sans font-normal text-black">{title}</p>
            <input   type="radio" className="hidden peer" name={name} id={id} value={value} onChange={handle} />
            <span className="block w-[20px] h-[20px] rounded-full border-2 border-gray-400 peer-checked:border-deep-purple-400"></span>
        </label>
    );
}

export default Radio;