function vidurineRaide(text) {
    const textIlgis = text.length;

    const vidurineRaidesIndeksas = Math.round(textIlgis / 2 - 1);

    return text[vidurineRaidesIndeksas];

}

export { vidurineRaide }