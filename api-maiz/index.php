<?php

header('Access-Control-Allow-Origin: *');

include 'DbConnect.php';
$objDb = new DbConnect();
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        $sql = 'SELECT * FROM comentarios';
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= ' WHERE id = :id';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $comentarios = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $comentarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($comentarios);
        break;
    case 'POST':
        $comentario = json_decode(file_get_contents('php://input'));
        $sql =
            'INSERT INTO comentarios(id, name, coment) VALUES(null, :name, :coment)';
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':name', $comentario->name);
        $stmt->bindParam(':coment', $comentario->coment);

        if ($stmt->execute()) {
            $response = [
                'status' => 1,
                'message' => 'Record created successfully.',
            ];
        } else {
            $response = [
                'status' => 0,
                'message' => 'Failed to create record.',
            ];
        }
        echo json_encode($response);
        break;
}
