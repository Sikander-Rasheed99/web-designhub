const theme = {
    input: {
        defaultProps: {
            color: "white",
            size: "lg",
            variant: "outlined",
        },
        styles: {
            base: {
                input: {
                    bg: "bg-[#7972F9]"
                }
            },
            variants: {
                outlined: {
                    base: {
                        input: {
                            borderWidth: "border-2 placeholder-shown:border-0",
                            borderColor: "placeholder-shown:border-white placeholder-shown:border-t-white",
                            floated: {
                                borderWidth: "border-2 focus:border-2",
                                borderColor: "border-t-transparent focus:border-t-transparent",
                            },
                        },
                        label: {
                            before: {
                                floated: {
                                    bt: "before:border-t-2 peer-focus:before:border-t-2",
                                    bl: "before:border-l-2 peer-focus:before:border-l-2",
                                },
                            },
                            after: {
                                floated: {
                                    bt: "after:border-t-2 peer-focus:after:border-t-2",
                                    br: "after:border-r-2 peer-focus:after:border-r-2",
                                },
                            },
                        },
                    }
                }
            }
        }
    },
    tabsHeader: {
        defaultProps: {
            className: "flex-wrap justify-center gap-4 bg-transparent rounded-none pb-5",
        }
    },
    tab: {
        defaultProps: {
            className: "transition-none border-[2px] border-[#0F2847] rounded-md",
            activeClassName: "text-white border-none",
            disabled: false,
        },
        styles: {
            base: {
                tab: {
                    initial: {
                        w: "w-max",
                        bg: "bg-transparent",
                        py: "py-3",
                        px: "px-3.5",
                        color: "text-black",
                        fontSmoothing: "antialiased",
                        fontFamily: "font-sans",
                        fontSize: "text-lg",
                        fontWeight: "font-medium"
                    }
                },
                indicator: {
                    position: "absolute transition-none",
                    inset: "inset-0",
                    zIndex: "z-10",
                    height: "h-full",
                    bg: "bg-[#0F2847]",
                    borderRadius: "rounded-md",
                    boxShadow: "shadow-none",
                },
            },
        },
    },
};
export default theme;