

function getResults() {

     let numberFirst = document.querySelector("#number1"); // получаем первый операнд
     let number = numberFirst.value;
     
     // console.dir(numberFirst);
     
     let numberSecond = document.querySelector("#number2"); // получаем второй операнд
     let numberNext = numberSecond.value;

     let fdata = new FormData()
     fdata.append("number1", number)
     fdata.append("number2", numberNext)
     fdata.append("operation", "minus")

     fetch("calculator.php", {
               method: "post",
               // headers: {
               //      'Content-Type': 'application/json;charset=utf-8'
               //    },
               body: fdata

          }) 
          // 
          // })
          .then((response) => {
               console.log(response)
               return response.json()}) // преобразование полученного ответа в текстовую строку
          .then(textString => { 
               //показываем ответ
               let result = document.querySelector(".get_result");
               result.innerHTML =  textString.result;


          })
     }
