function alphabet() {
	var characters = "";

	var lettersSelect = document.getElementById('letters').checked ? 1 : 0;
	var numbersSelect = document.getElementById('numbers').checked ? 1 : 0;
	var especialSelect = document.getElementById('especial').checked ? 1 : 0;
	var uppercaseSelect = document.getElementById('uppercase').checked ? 1 : 0;

	if (lettersSelect == 1) {
		characters += "abcdefghijklmnopqrstuvwxyz";
	}

	if (numbersSelect == 1) {
		characters += "0123456789";
	}

	if (especialSelect == 1) {
		characters += "!@#$%^&*()_+";
	}

	if (uppercaseSelect == 1) {
		characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}

	if (characters == "") {
		characters += "abcdefghijklmnopqrstuvwxyz";
	}

	return characters;
}


function randomPassword() {

	var characters = alphabet();

	var password = "";
	var size = document.getElementById("size").value;

	if (size <= 0 || size == null) {
		document.getElementById("password").value = "Size invalid";
		return;
	}

	for (var i = 0; i < size; i++) {
		var indice = Math.floor(Math.random() * characters.length);
		password += characters.charAt(indice);
	}

	document.getElementById("password").value = password;
}

function copy() {
	const textToCopy = document.querySelector('#password');
	textToCopy.select();
	document.execCommand('copy');
}

