function wordsMorphology(wordsString) {
    return wordsString.map((el) => {
        // removing "'s" from words
        if (el.endsWith("'s") || el.endsWith("'m") || el.endsWith("'d")) {
            return el.slice(0, -2);
        }
        if (el.endsWith("'ve") || el.endsWith("'re") || el.endsWith("'ll")) {
            return el.slice(0, -3);
        }
        // removing 'not' from words
        else if (
            el.endsWith("'t") &&
            (el === "can't" || el === "won't")
        ) {
            // exception for can't and won't
            return el.split("'t").join("");
        } else if (el.endsWith("n't")) {
            return el.split("n't").join("");
        }
        else {
            return pluralize.singular(el);
        }
    });
}

function splitStringFunc(textToSplit) {
    // split string to words
    return wordsMorphology(textToSplit.toLowerCase().match(/[^\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+(?:[-'][^\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+)*/g) || []);
    //return textToSplit.toLowerCase().match(/[^\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+(?:[-'][^\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+)*/g) || [];
}

const makeUniq = (arr) => {
    const uniqSet = new Set(arr); // unique list
    return [...uniqSet];
}