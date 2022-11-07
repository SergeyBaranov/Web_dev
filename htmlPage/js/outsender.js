

function getResults() {

     let numberFirst = document.querySelector("#number1"); // получаем первый операнд
     let number = numberFirst.value;
     
     // console.dir(numberFirst);
     
     // let numberSecond = document.querySelector("#number2"); // получаем второй операнд
     // let numberNext = numberSecond.value;

     fetch("calculator.php?number1=" + number  {
          method: "post",
          })
          .then((response) => {
               console.log(response)
               return response.text}) // преобразование полученного ответа в текстовую строку
          .then(textString => { 
               //показываем ответ
               let result = document.querySelector(".get_result");
               result.innerHTML = "Результат: " + textString;

          })
}