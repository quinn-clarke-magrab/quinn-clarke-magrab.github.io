var pics = [];
for (var i = 0; i < 10; i++) {
	pics[i] = "ch/" + (i + 86) + ".png";
}

function picture() {
	var random = Math.floor((Math.random() * 10));
	pic = document.getElementById("picture");
	pic.innerHTML = "<img src=" + pics[random] + " alt='the best comic' id='pic'>";
	caption = document.getElementById("caption");
	caption.innerHTML = "<p>July 11th, 19" + (random + 86) + "</p>";
}

var text = document.getElementById("description");
text.style.opacity = '1';

function begin() {
	var id = setInterval(function fadeout() {
		if (text.style.opacity == '0') {
			clearInterval(id);
			text.innerHTML = bio;
			text.style.opacity = '0';
			end();
		} else {
			text.style.opacity = text.style.opacity - 0.01;
		}
	}, 5);

}

function end() {
	var id2 = setInterval(function fadein() {
		if (text.style.opacity == '1') {
			clearInterval(id2);
		} else {
			text.style.opacity = text.style.opacity - -0.01;
		}
	}, 5);
}

var bio = "<p>A student at Tufts University studying Cognitive Brain Sciences " 
		+ "and Computer Science (no, I can't fix your printer). Originally "
		+ "from Westfield, New Jersey or as its commonly known, 'The Paris of "
		+ "Northern Central Jersey.' Favorite activities include crossword "
		+ "puzzles, surfing, watching tv, and staring at my computer screen coding." 
		+ " Huge sports "
		+ "fan whose teams include class franchises (Boston Red Sox)"
		+ " and the not-so-class (Washington R-words). Show and band "
		+ "of choice are Scrubs and The Killers respectively and any other "
		+ "answers are unacceptable and incorrect.</p>";





