<?php

$ini = parse_ini_file('pages.ini');

$host = $ini['host'];
$user = $ini['user'];
$password = $ini['password'];
$dbname = $ini['dbname'];

$con = mysqli_connect($host, $user, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

if (!$con) {
  die('Connection failed: ' . mysqli_connect_error());
}

switch ($method) {
    case: 'GET':
        // $id = $_GET['id'];
        // $sql = 'select * from pages' . ($id ? ' where id=$id' : '');
        break;
    case: 'POST':
        break;
    case: 'DELETE':
        break;
    case: 'PUT':
        break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

$con->close();