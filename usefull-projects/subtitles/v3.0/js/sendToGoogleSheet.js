function sendDataToGS(valueNew) {
    const data = valueNew;

    fetch(
      "https://script.google.com/macros/s/AKfycbz2-9P7xPBtOKdiSDN-vI3t9TyZ11hDZQud-aKbzrL-V-gc7xtHRdfJcTbcHmjEw7xTHg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ values: JSON.stringify(data) }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Выводим ответ от сервера
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
}
