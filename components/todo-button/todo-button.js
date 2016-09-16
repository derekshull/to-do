class todoButton extends HTMLElement {

	constructor() {
		super();
		document.addEventListener('touchstart', this.className += "hover");
	    document.addEventListener('touchend', this.className.className.replace(/\bhover\b/,''));
	} 
	createdCallback() {
		this.createShadowRoot().innerHTML = `
			<!-- inject-style src="./processing/todo-button/todo-button.css" -->
			<button>
				<content></content>
			</button>
		`;
	}

	attachedCallback() {
		if (window.WebComponents && WebComponents.ShadowCSS) {
	        WebComponents.ShadowCSS.shimStyling(this.shadowRoot, 'todo-button');
	    }
	}
}

var myTodoButton = document.registerElement("todo-button", todoButton);