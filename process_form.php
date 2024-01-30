<?php
$successMessage = "";
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Data Validation
    if (empty($_POST['name']) || empty($_POST['surname']) || empty($_POST['datepicker']) || empty($_POST['phone']) || empty($_POST['email']) || empty($_POST['text'])) {
        $errors[] = "Wszystkie pola formularza są obowiązkowe.";
    }

    // File processing
    if(isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
        $allowedTypes = ['pdf', 'doc', 'docx']; // Allowed file types
        $maxFileSize = 5 * 1024 * 1024; // Maximum file size (in bytes)

        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($_FILES['file']['name']);

        // File type check
        $fileType = strtolower(pathinfo($uploadFile, PATHINFO_EXTENSION));
        if (!in_array($fileType, $allowedTypes)) {
            $errors[] = "Niedozwolony format pliku. Dozwolone formaty: " . implode(', ', $allowedTypes);
        }

        // Checking file size
        if ($_FILES['file']['size'] > $maxFileSize) {
            $errors[] = "Plik jest za duży. Maksymalny rozmiar pliku to 5 MB.";
        }

        if (empty($errors) && move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
            $msg .= "\n\nPlik: $uploadFile";
        } else {
            $errors[] = "Wystąpił problem podczas przesyłania pliku. Spróbuj ponownie.";
        }
    }

    if (empty($errors)) {
        $to = "s.balabanowicz@gmail.com";
        $from = $_POST['email'];
        $subject = "Aplikacja ze strony internetowej";

        $msg = "
        Imię: {$_POST['name']} \n
        Nazwisko: {$_POST['surname']} \n
        Data spotkania: {$_POST['datepicker']} \n
        Numer telefonu: {$_POST['phone']} \n
        Email: {$_POST['email']} \n
        Tekst: {$_POST['text']}";

        if (mail($to, $subject, $msg, "From: $from ")) {
            $successMessage = "Dziękujemy! Skontaktujemy się wkrótce!";
        } else {
            $errors[] = "Wystąpił problem podczas wysyłania formularza. Spróbuj ponownie.";
        }
    }
}

// Error output
if (!empty($errors)) {
    foreach ($errors as $error) {
        echo '<div class="alert alert-danger" role="alert">';
        echo $error;
        echo '</div>';
    }
}

// Success message output
if (!empty($successMessage)) {
    echo '<div class="alert alert-success" role="alert">';
    echo $successMessage;
    echo '</div>';
}
?>