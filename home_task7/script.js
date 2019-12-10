class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createDiv(text) {
		let div = document.createElement('div');
		div.innerHTML = text;
		document.body.appendChild(div);

		div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;
		text-align: ${this.textAlign}`;
	}

}

var newDiv1 = new Options(300, 300, 'red', 14, 'center');
var newDiv2 = new Options(200, 300, 'green', 20, 'center');

newDiv1.createDiv('div1');
newDiv2.createDiv('div2');