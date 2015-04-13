// UpWorthy form

window.onload = function(){
	function validateForm() {
		var x = document.forms["user-form"].value;
		var emailInput = document.getElementById('email').value;
		var linkInput = document.getElementById('link').value;
		var error = document.getElementById("errormsg").innerhtml;
	
		if (x == null || x == "") {
			error.innerhtml = "Please enter valid information."
			return false;
		}
	
		// leveraging the HTML5 input element with type "email"
		if (emailInput.checkValidity()) {
			var emailmsg = document.createElement('div');
			emailmsg.innerhtml = 'There is a problem with your email address. Please check and try again.';
			error.appendChild(emailmsg);
			error.style.display = 'block';
		}
		else if (//validation check for url, linkInput.checkValidity()){
			var linkwmsg = document.createElement('div');
			linkmsg.innerhtml = 'There is a problem with the url you entered. Please check and try again.';
			error.appendChild(linkmsg);
			error.style.display = 'block';
		}
		else {
			return
		}
	}
}
