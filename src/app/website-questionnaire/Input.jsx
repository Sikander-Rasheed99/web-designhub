const Input = ({ type, placeholder, name, value, handle }) => {
    return (
        <input   type={type} value={value} placeholder={placeholder} name={name} id={name} onChange={handle} className="focus-visible:outline-none w-full h-[40px] border-2 border-gray-400 px-3 placeholder:text-gray-700 text-gray-700 text-[16px] font-sans font-normal rounded-lg" />
    );
}

export default Input;