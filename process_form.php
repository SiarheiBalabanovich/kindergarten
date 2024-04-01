<?php
$successMessage = "";
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $formType = isset($_POST['formType']) ? $_POST['formType'] : '';
    if ($formType === 'childRecruitment') {
        $email = filter_input(INPUT_POST, 'loginEmail', FILTER_SANITIZE_EMAIL);
    } elseif ($formType === 'teamRecruitment') {
        $email = filter_input(INPUT_POST, 'signupEmail', FILTER_SANITIZE_EMAIL);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Niepoprawny adres email.";
    }

        switch ($formType) {
            case 'childRecruitment':
                $firstName = htmlspecialchars(filter_input(INPUT_POST, 'loginFirstName', FILTER_SANITIZE_STRING), ENT_QUOTES, 'UTF-8');
                $lastName = htmlspecialchars(filter_input(INPUT_POST, 'loginLastName', FILTER_SANITIZE_STRING), ENT_QUOTES, 'UTF-8');
                $birthDate = htmlspecialchars(filter_input(INPUT_POST, 'loginBirthDate', FILTER_SANITIZE_STRING), ENT_QUOTES, 'UTF-8');
                $adaptationDate = htmlspecialchars(filter_input(INPUT_POST, 'loginAdaptationDate', FILTER_SANITIZE_STRING), ENT_QUOTES, 'UTF-8');
                $contactPerson = htmlspecialchars(filter_input(INPUT_POST, 'loginContactPerson', FILTER_SANITIZE_STRING), ENT_QUOTES, 'UTF-8');
                $phone = htmlspecialchars(filter_input(INPUT_POST, 'loginPhone', FILTER_SANITIZE_STRING), ENT_QUOTES, 'UTF-8');
                $message = htmlspecialchars(filter_input(INPUT_POST, 'loginText', FILTER_SANITIZE_STRING), ENT_QUOTES, 'UTF-8');
                // Additional processing of specific fields and checks
                if (empty($firstName) || empty($lastName) || empty($birthDate) || 
                    empty($adaptationDate) || empty($contactPerson) ||
                    empty($phone) || empty($email) || empty($message)) {
                    $errors[] = "Wszystkie pola formularza są obowiązkowe.";
                }
                break;
            case 'teamRecruitment':
                $firstName = htmlspecialchars(filter_input(INPUT_POST, 'signupFirstName', FILTER_SANITIZE_STRING), ENT_QUOTES, 'UTF-8');
                $lastName = htmlspecialchars(filter_input(INPUT_POST, 'signupLastName', FILTER_SANITIZE_STRING), ENT_QUOTES, 'UTF-8');
                $phone = htmlspecialchars(filter_input(INPUT_POST, 'signupPhone', FILTER_SANITIZE_STRING), ENT_QUOTES, 'UTF-8');
                $message = htmlspecialchars(filter_input(INPUT_POST, 'signupText', FILTER_SANITIZE_STRING), ENT_QUOTES, 'UTF-8');
                // Additional processing of specific fields and checks
                if (empty($firstName) || empty($lastName) ||
                    empty($phone) || empty($email) || empty($message)) {
                    $errors[] = "Wszystkie pola formularza są obowiązkowe.";
                }
                if(isset($_FILES['signupFile']) && $_FILES['signupFile']['error'] == 0) {
                    $allowedTypes = ['pdf', 'doc', 'docx'];
                    $maxFileSize = 5 * 1024 * 1024; // Maximum file size
                
                    $uploadDir = 'uploads/';
                    $uploadFile = $uploadDir . basename($_FILES['signupFile']['name']);
                
                    // File type check
                    $fileType = strtolower(pathinfo($uploadFile, PATHINFO_EXTENSION));
                    if (!in_array($fileType, $allowedTypes)) {
                        $errors[] = "Niedozwolony format pliku. Dozwolone formaty: " . implode(', ', $allowedTypes);
                    }
                
                    // File size check
                    if ($_FILES['signupFile']['size'] > $maxFileSize) {
                        $errors[] = "Plik jest za duży. Maksymalny rozmiar pliku to 5 MB.";
                    }
                
                    // If there are no errors and file uploaded successfully
                    if (empty($errors) && move_uploaded_file($_FILES['signupFile']['tmp_name'], $uploadFile)) {
                        $msg .= "\n\nPlik: " . basename($uploadFile);
                    } else {
                        $errors[] = "Wystąpił problem podczas przesyłania pliku. Spróbuj ponownie.";
                    }
                }
                break;
            default:
                $errors[] = "Nieznany typ formularza.";
                break;
        }
    }

    $currentDate = date("Y-m-d H:i:s");

    if (empty($errors)) {
        $to = "s.balabanowicz@gmail.com";
        $subject = "Aplikacja ze strony internetowej";
        $headers = "From: noreply@lesnadroga.pl\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";

        if ($formType === 'childRecruitment') {
            $msg = 
            "Imię dziecka: $firstName\n
            Nazwisko dziecka: $lastName\n
            Data urodzenia dziecka: $birthDate\n
            Data planowanego rozpoczęcia adaptacji: $adaptationDate\n
            Osoba do kontaktu: $contactPerson\n
            Numer telefonu do kontaktu: $phone\n
            Email: $email\n
            Tekst: $message\n
            Data wysłania formularza: $currentDate";
        } elseif ($formType === 'teamRecruitment') {
            $msg = 
            "Imię: $firstName\n
            Nazwisko: $lastName\n
            Email: $email\n
            Numer telefonu do kontaktu: $phone\n
            Tekst: $message\n
            Data wysłania formularza: $currentDate";
        }

        if (mail($to, $subject, $msg, $headers)) {
            $successMessage = "Dziękujemy! Skontaktujemy się wkrótce!";
        // Sending confirmation to the user
            $userEmail = $email;

        // Confirmation subject
            $confirmationSubject = "Potwierdzenie otrzymania formularza";

        // Confirmation message
            $confirmationMessage = "Dziękujemy za wysłanie formularza. Skontaktujemy się z Tobą wkrótce.";

        // Headers to confirm
            $confirmationHeaders = "From: noreply@lesnadroga.pl\r\n";
            $confirmationHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Sending confirmation to the user
        mail($userEmail, $confirmationSubject, $confirmationMessage, $confirmationHeaders);
        } else {
            $errors[] = "Wystąpił problem podczas wysyłania formularza. Spróbuj ponownie.";
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
