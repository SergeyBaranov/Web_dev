<?php

    $connection = mysqli_connect("localhost", "root", "tsqSMagv", "calculate_result"); // устанавливаем связь с БД
    if (!$connection) {
        die ("Связь не установлена:" . mysqli_connect_error());
    }
    
    // mysqli_query($connection, "INSERT INTO results (result) VALUES ('" . $_REQUEST["operation"] . "')");
    
    $result = null;

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
            if (!is_null($result)) {
                mysqli_query($connection, "INSERT INTO results (operandFirst, operation, operandSecond, result) VALUES ({$num1}, '{$operation}', {$num2}, {$result})");
            }
        }

    }

    
    
    $query = mysqli_query($connection, "SELECT * FROM results ORDER BY created_at DESC limit 7 ");

    $results = [];
    while ($row = mysqli_fetch_assoc($query)) {
        $results[] = $row;
     
    }

    echo($result);

?>
