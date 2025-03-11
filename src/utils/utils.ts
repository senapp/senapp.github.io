export const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export const toggleScroll = (enabled: boolean) => {
    if (enabled) {
        document.body.style.overflow = "auto";
    } else {
        document.body.style.overflow = "hidden";
    }
}