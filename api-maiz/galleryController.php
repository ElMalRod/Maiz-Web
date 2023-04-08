<?php

header('Access-Control-Allow-Origin: *');

include 'DbConnect.php';
$objDb = new DbConnect();
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        $sql = 'SELECT * FROM gallery';
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= ' WHERE id = :id';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $gallery = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $gallery = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($gallery);
        break;
    case 'POST':
        $comentario = json_decode(file_get_contents('php://input'));
        $sql = 'INSERT INTO gallery(id, linkImg) VALUES(null, :linkImg)';
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':linkImg', $comentario->linkImg);

        if ($stmt->execute()) {
            $response = [
                'status' => 1,
                'message' => 'yeii agregado a la bd.',
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
