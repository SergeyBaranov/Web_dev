<?php

    $First = array(1, 3);
    $Second = array(2, 4);

    $result = array_merge($First, $Second);
    asort($result);

    print_r($result);

?>