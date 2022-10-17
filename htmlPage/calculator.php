<?php
    if(isset($_POST["submit"])) {
        //инициализируем переменные
        $num1 = $_POST["number1"] ?? false;
        $num2 = $_POST["number2"] ?? false;
        $operation = $_POST["operation"] ?? false;
    

        if(!$operation || !$num1 || !$num2) {
            $error_result = "Заполните все поля";
        }
        
        else {
        //Операции калькулятора
            switch ($operation) {
                default:
                    $error_result = "Выберите операцию";
                    break;
                case("plus"):
                    $result = $num1 + $num2;
                    break;
                case("minus"):
                    $result = $num1 - $num2;
                    break;
                case("multiplication"):
                    $result = $num1 * $num2;
                    break; 
                case("division"):
                    if($num2 == 0)
                        $error_result = "На ноль не делится!";
                    else
                        $result = $num1 / $num2;
                    break;    
            }
        }

    }

        
?>