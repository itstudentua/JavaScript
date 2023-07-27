function sendDataToGS(valueNew) {
    const data = valueNew;

    fetch(
      "https://script.google.com/macros/s/AKfycbx31wOQW_afJ_5JF7uRpLMBLWr9Nq1t0TrEleg3s8Mvxo7ggEZaBWUa89YT0smMqKfrlQ/exec",
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
