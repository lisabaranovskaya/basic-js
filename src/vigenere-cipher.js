class VigenereCipheringMachine {
    encrypt(message, key) {
        key = key.toUpperCase();
        let nonAlpha = 0;

        return message.toUpperCase().split("").map((e, i) => {
            if (e.toLowerCase() == e.toUpperCase()) {
                nonAlpha++;
                return e;
            } 
            return String.fromCharCode(
                65 + (
                    e.charCodeAt(0) - 65 + 
                    key.charCodeAt((i + key.length - nonAlpha) % key.length) - 65 
                ) % 26
            );
        }).join("");
    }

    decrypt(encryptedMessage, key) {
        key = key.toUpperCase()
        let nonAlpha = 0;

        return encryptedMessage.toUpperCase().split("").map((e, i) => {
            if (e.toLowerCase() == e.toUpperCase()) {
                nonAlpha++;
                return e;
            } 
            return String.fromCharCode(65 + (e.charCodeAt(0) - 65 - key.charCodeAt((i + key.length - nonAlpha) % key.length) + 65 + 26) % 26);
        }).join("");
    }
}

module.exports = VigenereCipheringMachine;
