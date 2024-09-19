const label = ({ title, htmlFor, required }) => {
    return (
        <label htmlFor={htmlFor ?? htmlFor} className="block text-[16px] font-sans font-medium mb-2">
            {title} {required && <span className="text-red-900">*</span>}
        </label>
    );
}

export default label;