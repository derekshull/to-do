class todoButton extends HTMLElement {

	constructor() {
		super();
	} 
	createdCallback() {
		this.createShadowRoot().innerHTML = `
      		<!-- inject-style src="./processing/todo-button/todo-button.css" -->
      		<div id="container">
      			<button>
      				<content></content>
      			</button>
      		</div>
    	`;
	}
}

var myTodoButton = document.registerElement("todo-button", todoButton);