class todoButton extends HTMLElement {

	constructor() {
		super();
	} 
	createdCallback() {
		this.createShadowRoot().innerHTML = `
			<!-- inject-style src="./processing/todo-button/todo-button.css" -->
			<button>
				<content></content>
			</button>
		`;
	}
}

var myTodoButton = document.registerElement("todo-button", todoButton);