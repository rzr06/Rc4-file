function performOperation() {
    var operation = document.getElementById('operation').value;
    
    if (operation === 'encrypt') {
        encryptFile();
    } else if (operation === 'decrypt') {
        decryptFile();
    } else {
        alert("Invalid operation selected.");
    }
}


function encryptFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var content = event.target.result;
        var password = prompt("Enter password for encryption:");

        if (password != null) {
            var encryptedContent = rc4Encrypt(content, password);
            var encryptedBlob = new Blob([encryptedContent], { type: 'text/plain' });
            var downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(encryptedBlob);
            downloadLink.download = file.name + ".encrypted";
            downloadLink.click();
        }
    };

    reader.readAsText(file);
}

function decryptFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var content = event.target.result;
        var password = prompt("Enter password for decryption:");

        if (password != null) {
            var encryptedContent = rc4Encrypt(content, password);
            var encryptedBlob = new Blob([encryptedContent], { type: 'text/plain' });
            var downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(encryptedBlob);
            downloadLink.download = file.name + ".decrypted";
            downloadLink.click();
        }
    };

    reader.readAsText(file);
}