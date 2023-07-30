const textAreaInput = document.getElementById("textArInput");
let resultArray = [];

const total_w = document.getElementById('total_w');
const uniq_w = document.getElementById('uniq_w');
const new_w = document.getElementById('new_w');

//const downExcel = document.getElementById('downExcel');


function getNewWords(arr1, arr2) {
    Array.prototype.diff = function (a) {
        return this.filter(function (i) { return a.indexOf(i) < 0; });
    };

    return arr2.diff(arr1);
}



function processWords() {
    readExcel();
    const textAreaInputContent = textAreaInput.value;

    // split string to words
    const splitString = splitStringFunc(textAreaInputContent);

    const newArr = makeUniq(splitString);

    let myDictionary;
 
    if (googleSheetArray.length == 0) {
        myDictionary = makeUniq(readFile);
    } else {
        myDictionary = makeUniq(googleSheetArray.concat(readFile));
    }

 

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

    resultArray = getNewWords(myDictionary, newArr)

    console.log(resultArray);


    const wordCount = splitString.length;
    const uniqWordsCount = newArr.length;
    const newWordsCount = resultArray.length;

    total_w.textContent = `Total words: ${wordCount}`;
    uniq_w.textContent = `Unique words: ${uniqWordsCount}`;
    new_w.textContent = `New words: ${newWordsCount}`;
    downExcel.disabled = false;
    downExcel.style.visibility = 'visible';
}
