const reverseSentence = (sentence) => {
    let reversedSentence = [];
    let word = []

    for(let i = sentence.length - 1; i>=0; i--){
        if(sentence[i] == ' '){
            if(word.length > 0){
                reversedSentence.push(word.reverse().join(''))
                word = []
            }
            reversedSentence.push(' ')
        }
        else{
            word.push(sentence[i])
        }
    }

    if(word.length > 0){
        reversedSentence.push(word.reverse().join(''))
    }
    
    return reversedSentence.join('')
}

reverseSentence('')