function camelize(str) {
    const separateWords = str.split("-");
    
    for (let i = 0; i < separateWords.length; i++) {
        if (i != 0) {
            separateWords[i] = separateWords[i][0].toUpperCase() + separateWords[i].slice(1);
        }
    }
    
    return separateWords.join("");
}
