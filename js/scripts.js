function tabChanging(evt, tab1, tab2) {
  var i, tabcontent, tablinks, backLogin;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  backLogin = document.getElementsByClassName("backLogin");
  for (i = 0; i < backLogin.length; i++) {
    backLogin[i].style.backgroundColor = "#99999996";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tab1).style.display = "block";
  evt.currentTarget.className += " active";

  document.getElementById(tab2).style.backgroundColor = "#0020cd";
  evt.currentTarget.className += " active";

}

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
