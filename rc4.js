function rc4Encrypt(data, key) {
    var s = [];
    for (var i = 0; i < 256; i++) {
        s[i] = i;
    }
    var j = 0;
    for (var i = 0; i < 256; i++) {
        j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
        var temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
    var i = 0;
    var j = 0;
    var result = '';
    for (var k = 0; k < data.length; k++) {
        i = (i + 1) % 256;
        j = (j + s[i]) % 256;
        var temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        var index = (s[i] + s[j]) % 256;
        result += String.fromCharCode(data.charCodeAt(k) ^ s[index]);
    }
    return result;
}

function rc4Decrypt(data, key) {
    return rc4Encrypt(data, key); // RC4 decryption is same as encryption
}
