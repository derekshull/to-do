"use strict";
class todoList extends HTMLElement {

	constructor() {
		super();
	} 
	createdCallback(){
		this.innerHTML = `
			<p>
				The List:
				<div id="todoListItems"></div>
			</p>
		`;
	}
	attributeChangedCallback(json, oldValue, newValue) {
		var items = JSON.parse(newValue);

		if (!oldValue) {
			for (var i in items) {
				this.querySelector('#todoListItems').innerHTML += `
					<div class="todoItem">${items[i].name}</div>
				`;
			}
		}
		else {
			let todoListItems = this.querySelector('#todoListItems');
			for (var i in items) {
				let theKid = document.createElement("div");
				theKid.innerHTML = `<div class="todoItem">${items[i].name}</div>`;
				todoListItems.insertBefore(theKid, todoListItems.firstChild);
			}
		}
	}
}

var myTodoList = document.registerElement("todo-list", todoList);