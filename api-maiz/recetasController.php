<?php

header('Access-Control-Allow-Origin: *');

include 'DbConnect.php';
$objDb = new DbConnect();
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        $sql = 'SELECT * FROM recetas';
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= ' WHERE id = :id';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $recetas = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $recetas = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($recetas);
        break;
    case 'POST':
        $receta = json_decode(file_get_contents('php://input'));
        $sql =
            'INSERT INTO recetas(id, name, descripcion, imagen) VALUES(null, :name, :descripcion, :imagen)';
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $receta->name);
        $stmt->bindParam(':descripcion', $receta->descripcion);
        $stmt->bindParam(':imagen', $receta->imagen);

        if ($stmt->execute()) {
            $response = [
                'status' => 1,
                'message' => 'Record created successfully en RECETAS.',
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
