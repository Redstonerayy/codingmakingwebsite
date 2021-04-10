<?php
    //get files 
    $files = scandir('projects');
    $files = array_diff($files, [".", "..", "projects.html", "projects", "website", "ytdownloader"]);
    $files = array_values($files);
    $projectnames = array();
    for($i = 0; $i < count($files); $i++){
        array_push($projectnames, ucfirst(explode(".", $files[$i], 2)[0]));
    }
    echo json_encode(
        array(
            $files,
            $projectnames
            )
    );
?>
