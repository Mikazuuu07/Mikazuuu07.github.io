const kntlElement = ['Freelancer', 'Web Developer', 'Graphic Designer', 'Artist', 'Mechanical Engineering'];
let count = 0;
let kntlIndex = 0;
let currentKntl = '';
let words = '';

(function ngentot(){

	if(count == kntlElement.length){
		 count = 0;
	}

	currentKntl = kntlElement[count];

	words = currentKntl.slice(0, ++kntlIndex);
	document.querySelector('.ngentot').textContent = words;

	if(words.length == currentKntl.length){
		count++;
		kntlIndex = 0;
	}

	setTimeout(ngentot, 200);

})();

const munggahCok = document.querySelector(".topless");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		munggahCok.classList.add("active");
	} else {
		munggahCok.classList.remove("active");
	}
})

function Cok() {
  document.getElementById('check').checked = false;
}

var sideIconToggle = document.getElementById('Jancok');

document.addEventListener('click', function(event) {
  if (!Jancok.contains(event.target))
    Cok();
});

const budi = document.body;
let sekrolAkhir = 0;

window.addEventListener('scroll', () => {
	const sekrolSaiki = window.pageYOffset

	if (sekrolSaiki <= 0) {
		budi.classList.remove("sekrol-munggah")
	}

	if (sekrolSaiki > sekrolAkhir && !budi.classList.contains("sekrol-mudun")) {
		budi.classList.remove("sekrol-munggah")
		budi.classList.add("sekrol-mudun")
	}

	if (sekrolSaiki < sekrolAkhir && budi.classList.contains("sekrol-mudun")) {
	budi.classList.remove("sekrol-mudun")
	budi.classList.add("sekrol-munggah")
	}


	sekrolAkhir = sekrolSaiki;
})