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