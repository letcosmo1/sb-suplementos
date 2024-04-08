const getImageUrl = (name: string) => {
    return new URL(`../assets/images/${name}`, import.meta.url).href
}

export const getImage = (name: string) => {
    const url = getImageUrl(name)
    const last_slash = url.lastIndexOf("/")

    if(url.slice(last_slash + 1) === "undefined") return getImageUrl("placeholder.png")
    
    return url
}