<?php
/**
 * Created by PhpStorm.
 * User: Frayo
 * Date: 1/8/2017
 * Time: 8:52 AM
 */
if(isset($_GET['data'])){
    echo json_encode(array("data" => array("param1" => "Eric Cartman", "param2" => "Kenny McCormick")));
}
if(isset($_POST['data'])){
    echo json_encode(array("data" => array("param1" => "Eric Cartman", "param2" => "Kenny McCormick")));
}
/*
 * {
 *  data : {
 *      param1 : "Eric Cartman",
 *      param2 : "Kenny McCormick"
 *  }
 * }
 * */

if(isset($_GET['database'])){
    $conn = new mysqli("localhost", "root", "", "test");
    if(mysqli_connect_errno()){
        writeErrorMessage("Cant connect to database!");
        exit();
    }else{
        //writeErrorMessage("Connected!");
        $result = $conn->query("Select * from test.params");
        outputJSONData($result);
    }

}
function outputJSONData($result){
    if(get_class($result) == "mysqli_result"){
        $columns = array();
        $resultsOutput = array();
        while($property = mysqli_fetch_field($result)){
            $columns[] = $property->name;
        }
        while($row = $result->fetch_assoc()){
            $resultRow = array();
            for($i = 0; $i < sizeof($columns); $i++){
                $resultRow[$columns[$i]] = $row[$columns[$i]];
            }
            array_push($resultsOutput, $resultRow);
        }
        echo json_encode(array("data" => $resultsOutput));
    }
    else{
        echo json_encode(array("errorMessage" => "Not a valid MySQLi Object!"));
    }
}
function writeErrorMessage($messageString){
    echo json_encode(array("message" => $messageString));
}
/*
 * test.params table:
 * paramid : paramvalue
 * 1       : 'Eric Cartman'
 * 2       : 'Stan Marsh'
 *
 * */