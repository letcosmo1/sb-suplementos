export const toReais = (number: number) => {
    return number.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

export const capitalizeFirstLetter = (sentence: string): string => {
    let words: string[] = sentence.split(" ")

    words = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })

    return words.join(" ")
}