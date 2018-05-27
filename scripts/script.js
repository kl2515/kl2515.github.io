// Katherine Lin Porfolio Javascript
$(document).ready(function(){

	//blizzard app modal functions
	var blizzModal = document.getElementById('blizz-content');
	var blizzBtn = document.getElementById('blizz-btn');
	var blizzSpan = document.getElementsByClassName('blizz-close')[0];

	blizzBtn.onclick = function() {
	    blizzModal.style.display = "block";
	}
	blizzSpan.onclick = function() {
		blizzModal.style.display = "none";
	}


	//cmac modal functions
	var cmacModal = document.getElementById('cmac-content');
	var cmacBtn = document.getElementById('cmac-btn');
	var cmacSpan = document.getElementsByClassName('cmac-close')[0];

	cmacBtn.onclick = function() {
		cmacModal.style.display = "block";
	}
	cmacSpan.onclick = function() {
		cmacModal.style.display = "none";
	}


	//socius modal functions
	var sociusModal = document.getElementById('socius-content');
	var sociusBtn = document.getElementById('socius-btn');
	var sociusSpan = document.getElementsByClassName('socius-close')[0];

	sociusBtn.onclick = function() {
		sociusModal.style.display = "block";
	}
	sociusSpan.onclick = function() {
		sociusModal.style.display = "none";
	}


	//pronat modal functions
	var pronatModal = document.getElementById('pronat-content');
	var pronatBtn = document.getElementById('pronat-btn');
	var pronatSpan = document.getElementsByClassName('pronat-close')[0];

	pronatBtn.onclick = function() {
		pronatModal.style.display = "block";
	}
	pronatSpan.onclick = function() {
		pronatModal.style.display = "none";
	}


	//stanns modal functions
	var stannsModal = document.getElementById('stanns-content');
	var stannsBtn = document.getElementById('stanns-btn');
	var stannsSpan = document.getElementsByClassName('stanns-close')[0];

	stannsBtn.onclick = function() {
		stannsModal.style.display = "block";
	}
	stannsSpan.onclick = function() {
		stannsModal.style.display = "none";
	}


	window.onclick = function(event) {
		if (event.target == blizzModal) {
			blizzModal.style.display = "none";
		}
		if (event.target == cmacModal) {
			cmacModal.style.display = "none";
		}
		if (event.target == sociusModal) {
			sociusModal.style.display = "none";
		}
		if (event.target == pronatModal) {
			pronatModal.style.display = "none";
		}
		if (event.target == stannsModal) {
			stannsModal.style.display = "none";
		}
	}

});