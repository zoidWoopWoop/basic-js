class VigenereCipheringMachine {
	constructor(directReverse) {
		this.directReverse = directReverse === false ? 'reverse' : 'direct';
	}
	encrypt(message, key) {
		if (!message || !key) {
			throw new Error()
		}
		let result = [];
		message.toUpperCase();
		key.toUpperCase();

		let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		alphabet = alphabet.split('')
		message = message.toUpperCase().split('');
		key = key.toUpperCase().repeat(Math.ceil(message.length / key.length)).split('');

		if (key.length < message.length) {
			for (let i = key.length; i < message.length; i++) {
				key.push(key[i - key.length]);
			}
		}

		for (let i = 0; i < message.length; i++) {
			if (alphabet.indexOf(message[i]) == -1) {
				result.push(message[i]);
				message.splice(i, 1);
				i--;
			} else {
				if (alphabet.indexOf(message[i]) + alphabet.indexOf(key[i]) > 25) {
					result.push(alphabet[alphabet.indexOf(message[i]) + alphabet.indexOf(key[i]) - 26]);
				} else {
					result.push(alphabet[alphabet.indexOf(message[i]) + alphabet.indexOf(key[i])]);
				}
			}
		}

		result = result.join("");
		return (this.directReverse === 'reverse') ? result.split('').reverse().join('') : result;
	}

	decrypt(message, key) {
		if (!message || !key) {
			throw new Error()
		}
		let result = [];
		message.toUpperCase();
		key.toUpperCase();

		let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		alphabet = alphabet.split('')
		message = message.toUpperCase().split('');
		key = key.toUpperCase().repeat(Math.ceil(message.length / key.length)).split('');

		for (let i = 0; i < message.length; i++) {
			if (alphabet.indexOf(message[i]) == -1) {
				result.push(message[i]);
				message.splice(i, 1);
				i--;
			} else {
				if (alphabet.indexOf(message[i]) + 26 - alphabet.indexOf(key[i]) > 25) {
					result.push(alphabet[alphabet.indexOf(message[i]) + 26 - alphabet.indexOf(key[i]) - 26]);
				} else {
					result.push(alphabet[alphabet.indexOf(message[i]) + 26 - alphabet.indexOf(key[i])]);
				}
			}
		}

		result = result.join("");
		return (this.directReverse === 'reverse') ? result.split('').reverse().join('') : result;
	}
}


module.exports = VigenereCipheringMachine;