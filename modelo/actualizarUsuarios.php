<?php

if(isset($_POST)){
    
    if (isset($_FILES['file-input-modal']) && $_FILES['file-input-modal']['error'] === UPLOAD_ERR_OK) {
        print_r(1);
        }
      
    
 
}

?>