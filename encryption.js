function encryptFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var content = event.target.result;
        var password = prompt("Enter password for encryption:");

        if (password != null) {
            var encryptedContent = rc4Encrypt(content, password);
            document.getElementById('output').value = encryptedContent;
        }
    };

    reader.readAsText(file);
}

function decryptFile() {
    var encryptedContent = document.getElementById('output').value;
    var password = prompt("Enter password for decryption:");

    if (password != null) {
        var decryptedContent = rc4Decrypt(encryptedContent, password);
        document.getElementById('output').value = decryptedContent;
    }
}
