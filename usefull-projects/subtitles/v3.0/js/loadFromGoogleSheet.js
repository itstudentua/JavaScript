let googleSheetArray = [];

function loadDataFromGoogleSheet() {
    fetch(
        "https://script.google.com/macros/s/AKfycbyEm_5bfp2RipVS6WZV12g4pXosuHOwC_nfOqOWW1q2QnZH5RDdhh8KfqT0gHE6JDsgZA/exec"
    )
        .then((response) => response.json())
        .then((data) => {
            //texta.textContent = googleSheetArray;
            const helpArray = data.map((el) => {
                return typeof el[0] === "boolean"
                    ? el[0].toString()
                    : el[0];
                // true and false are always boolean type at google sheets
            });
            googleSheetArray = helpArray.filter(
                (item) => item !== ""
            ); // remove '' item


            console.log("googleSheetArray", googleSheetArray);
            processButton.style.display = 'block';
            
            //texta.textContent = googleSheetArray;
        })
        .catch((error) => {
            console.error("Ошибка:", error);
        });
}

loadDataFromGoogleSheet();