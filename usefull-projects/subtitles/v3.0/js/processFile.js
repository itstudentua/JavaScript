const textAreaInput = document.getElementById("textArInput");
let resultArray = [];

const total_w = document.getElementById('total_w');
const uniq_w = document.getElementById('uniq_w');
const new_w = document.getElementById('new_w');


function getWords(arr1, arr2) {
    Array.prototype.diff = function (a) {
        return this.filter(function (i) { return a.indexOf(i) < 0; });
    };

    return arr2.diff(arr1);
}

function processWords() {
    readExcel();
    const textAreaInputContent = textAreaInput.value.toLowerCase();

    // split string to words
    const splitString = textAreaInputContent.match(/[^\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+(?:[-'][^\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+)*/g) || [];

    const makeUniq = (arr) => {
        const uniqSet = new Set(arr); // unique list
        return [...uniqSet];
    }

    const newArr = makeUniq(splitString);

    let myDictionary = makeUniq(googleSheetArray.concat(readFile));

    console.log(myDictionary);

    if (myDictionary.length === googleSheetArray.length && myDictionary.every(element => googleSheetArray.includes(element))) {
        console.log('Dont send to server');

    } else {
        console.log('send to server');
        sendDataToGS(myDictionary);
        setTimeout(() => {
            console.log("Delayed for 1.5 second.");
            loadDataFromGoogleSheet();
        }, "1500");        
    }
    
    resultArray = getWords(myDictionary, newArr)

    const wordCount = splitString.length;
    const uniqWordsCount = newArr.length;
    const newWordsCount = resultArray.length;

    total_w.textContent = `Total words: ${wordCount}`;
    uniq_w.textContent = `Unique words: ${uniqWordsCount}`;
    new_w.textContent = `New words: ${newWordsCount}`;
    downExcel.disabled = false;
}
