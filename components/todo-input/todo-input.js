"use strict";
class todoInput extends HTMLElement {

	constructor() {
		super();
	} 
	createdCallback() {
		this.innerHTML = `
			<p>
				<input type="text" id="todoText"> <button id="submit">Send</button>
			</p>
		`;
		var input = this.querySelector('input');
		var btn = this.querySelector('button');
        btn.addEventListener('click',() => this.updateList(input));
	}

  	updateList(input) {
	    document.querySelector("todo-list").setAttribute("json", '[{"id": 0, "name": "'+input.value+'"}]');
       	input.value = "";
  	}
}

var myTodoInput = document.registerElement("todo-input", todoInput);