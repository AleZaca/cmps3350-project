<?php
require_once('sqlTools.php');

// Function to fetch high scores from the database
function getHighScores() {
    $conn = getConnection();
    $query = "SELECT player_name, score, level FROM high_scores ORDER BY score DESC LIMIT 10";
    $result = mysqli_query($conn, $query);
    $scores = mysqli_fetch_all($result, MYSQLI_ASSOC);
    closeConnection($conn);
    return $scores;
}

$scores = getHighScores();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>High Scores</title>
</head>
<body>
    <h1>High Scores</h1>
    <table>
        <thead>
            <tr>
                <th>Player Name</th>
                <th>Score</th>
                <th>Level</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($scores as $score): ?>
                <tr>
                    <td><?php echo $score['player_name']; ?></td>
                    <td><?php echo $score['score']; ?></td>
                    <td><?php echo $score['level']; ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>

