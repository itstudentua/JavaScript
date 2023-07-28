function splitWordsWithSymbols(str) {
    // Используем регулярное выражение для разделения строки на слова
    // Учитываем все возможные символы в тексте, кроме цифр и символов
    const wordsArray = str.match(/[^\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+(?:[-'][^\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+)*/g) || [];
    return wordsArray;
  }
  
  // Пример использования функции
  const inputString = `(Привет,
   это пример строки/cbv, kek.sa
    которую.!!- нужно р-азбить. let's do "Э't"
    на слова!`;
  const words = splitWordsWithSymbols(inputString);
  console.log(words); // Выведет массив слов, разделенных без учета цифр и символов
  

  const splitString = inputString.split("\n").join(" ").split(",").join(" ").split(".").join(" ").split("!").join(" ").split(`"`).join(" ").split(")").join(" ").split("(").join(" ").split("?").join(" ").split("/").join(" ").split(":").join(" ").split(";").join(" ").toLowerCase().split(' '); // remove . , ! ? :

  while (splitString.indexOf("\r") !== -1 || splitString.indexOf('') !== -1) {
      splitString.splice(splitString.indexOf(""), 1); // deleting of an empty elements
  }

  console.log(splitString);