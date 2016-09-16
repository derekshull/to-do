class todoInput extends HTMLElement {

	constructor() {
		super();
	} 
	createdCallback() {
		this.createShadowRoot().innerHTML = `
      		<!-- inject-style src="./processing/todo-input/todo-input.css" -->
      		<p>
				<input type="text" id="todoText" autofocus> <todo-button>Send</todo-button>
			</p>
    	`;
		var input = this.shadowRoot.querySelector('input');
		var btn = this.shadowRoot.querySelector('todo-button');
        btn.addEventListener('click',() => this.updateList(input));
	}

	attachedCallback() {
		if (window.WebComponents && WebComponents.ShadowCSS) {
	        WebComponents.ShadowCSS.shimStyling(this.shadowRoot, 'todo-input');
	    }
	}

  	updateList(input) {
	    document.querySelector("todo-list").setAttribute("json", '[{"id": 0, "name": "'+input.value+'"}]');
       	input.value = "";
  	}
}

var myTodoInput = document.registerElement("todo-input", todoInput);