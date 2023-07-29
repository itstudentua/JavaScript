const wordsExceptions = `interested
excited 
tired 
bored 
amazed 
confused
delighted
satisfied
surprised
disappointed
frightened
relaxed
wicked
speed
need
seed
deed
breed
weed
feed
bleed`;

let str = "Hello, world!";
let elementToCheck = "o";

let isElementInString = str.includes(elementToCheck);

function wordsMorphology(wordsString) {
    return wordsString.map((el) => {
        // removing 'not' from words
        let substring_not = (el === "can't" || el === "won't") ? "'t" : "n't"; // exception for can't and won't
        let substring_s = el.split(substring_not).join("");
        // removing 's' from words
        let substring_ed = substring_s.split("'s").join("");
        let finalString = el;;
        // removing 'ed' from words
        if (!wordsExceptions.includes(el)) {
            finalString = substring_ed.split('ed').join("");
        }

        return finalString;
    });

}

function splitStringFunc(textToSplit) {
    // split string to words
    return wordsMorphology(textToSplit.toLowerCase().match(/[^\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+(?:[-'][^\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+)*/g) || []);
}

const makeUniq = (arr) => {
    const uniqSet = new Set(arr); // unique list
    return [...uniqSet];
}