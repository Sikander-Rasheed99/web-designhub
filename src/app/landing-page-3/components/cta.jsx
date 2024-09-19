const CTA = ({ text, href, color = "text-white", bg = "bg-[#F85F84]", css, icon, iconWidth = 22, iconHeight = 28 }) => {
    return (
        <>
            {icon ? <div className="w-full sm:w-max" dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="flex items-center gap-3 w-max justify-center pr-3.5 pl-3.5 h-12 ${color} ${bg} border-2 text-[18px] font-semibold rounded-full ${css} transition-all" >
                    <span className="text-sm xl:text-lg font-medium">${text}</span>
                    <img src="${icon}" width="${iconWidth}" height="${iconHeight}" />
                </a>`
            }} /> : <div className="w-full sm:w-max" dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="flex items-center gap-3 w-max justify-center pr-3.5 pl-3.5 h-12 ${color} ${bg} border-2 text-[18px] font-semibold rounded-full ${css} transition-all" >
                    <span className="text-sm xl:text-lg font-medium">${text}</span>
                </a>`
            }} />}
        </>
    )
}

export default CTA;