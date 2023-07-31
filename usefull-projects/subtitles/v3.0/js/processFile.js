let resultArray;


function getNewWords(arr1, arr2) {
    Array.prototype.diff = function (a) {
        return this.filter(function (i) { return a.indexOf(i) < 0; });
    };

    return arr2.diff(arr1);
}


function processWords(textAreaIn) {
    readExcel();
    const textAreaInputContent = document.getElementById(textAreaIn).value;

    if (textAreaInputContent == '') {
        return;
    }

    // split string to words
    const splitString = splitStringFunc(textAreaInputContent);

    if (textAreaIn == "textArInput1") {
        readFile = splitString;
    }

    const newArr = makeUniq(splitString);

    let myDictionary;



    if (googleSheetArray.length == 0) {
        myDictionary = makeUniq(readFile);
    } else {
        myDictionary = makeUniq(googleSheetArray.concat(readFile));
    }

    resultArray = getNewWords(myDictionary, newArr)


    const wordCount = splitString.length;
    const uniqWordsCount = newArr.length;
    let newWordsCount = getNewWords(googleSheetArray, newArr).length;


    console.log('MyDICTIONARY', myDictionary);
    console.log("NEWARR ", newArr);
    console.log("RESULT: ", resultArray);
    console.log("READFILE: ", readFile);


    console.log(wordCount);
    console.log(uniqWordsCount);
    console.log(newWordsCount);

    total_w.textContent = `Total words: ${wordCount}`;
    uniq_w.textContent = `Unique words: ${uniqWordsCount}`;
    new_w.textContent = `New words: ${newWordsCount}`;



    elements.forEach(element => {
        element.classList.add('hide_info'); // Замените 'active' на название класса, который вы хотите переключать
    });

    document.getElementById('new_w1').textContent = `New words: ${newWordsCount}`;
    document.getElementById('uniq_w1').textContent = `Unique words: ${uniqWordsCount}`;
    document.getElementById('total_w1').textContent = `Total words: ${wordCount}`;

    if (newWordsCount != 0) {
        downExcel.style.visibility = 'visible';
        showTable.style.visibility = 'visible';
    }

    if (readFile === "") {
        return;
    }

    if (myDictionary.length === googleSheetArray.length && myDictionary.every(element => googleSheetArray.includes(element))) {
        console.log('Dont send to server');
        if (newWordsCount === 0) {
            alert('You already know that!');
        }
    } else {
        console.log('Send to server');
        sendDataToGS(myDictionary);
        preloader.style.display = 'flex';
        setTimeout(() => {
            preloader.style.display = "none";
        }, 1550);
        setTimeout(() => {
            alert('Success!');
        }, 1600);
        setTimeout(() => {
            console.log("Delayed for 1.5 second.");
            loadDataFromGoogleSheet();
        }, "1500");
    }

    readFile = "";
}
