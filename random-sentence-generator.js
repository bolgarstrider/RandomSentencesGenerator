function randomSentencesGenerator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })


    let names = ["Peter", "Michell", "Jane", "Steve"];
    let places = ["Sofia", "Plovdiv", "Varna", "Burgas"];
    let verbs = ["eats", "holds", "sees", "plays with", "brings"];
    let nouns = ["stones", "cake", "apple", "laptop", "bikes"];
    let adverbs = ["slowly", "diligently", "warmly", "sadly", "rapidly"];
    let details = ["near the river", "at home", "in the park"];

    function getRandomWord(array) {
        let word = array[Math.floor(Math.random() * array.length)];
        return word;
    }

    let randomName = getRandomWord(names);
    let randomPlace = getRandomWord(places);
    let randomVerb = getRandomWord(verbs);
    let randomNoun = getRandomWord(nouns);
    let randomAdverb = getRandomWord(adverbs);
    let randomDetail = getRandomWord(details);

    let who = `${randomName} from ${randomPlace}`;
    let action = `${randomVerb} ${randomNoun} ${randomAdverb}`;
    let sentence = `${who} ${action} ${randomDetail}.`;    


    let recursiveAsyncReadLine = function () {
        readline.question('\nDo you want to generate a new one: Y / N: ', answer => {
            if (answer == 'y' || answer == 'Y') {
                
                randomSentencesGenerator();
                
            } else if (answer == 'n' || answer == 'N') {
                console.log('\nGood Bye!');
                return readline.close();
            } else {
                console.log('Y/N');             
                
                recursiveAsyncReadLine();
            }
        })
    }
    console.log(sentence);
    recursiveAsyncReadLine();
}
console.log('Hello, this is your first random generated sentence:');
    
randomSentencesGenerator();
