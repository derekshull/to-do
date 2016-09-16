'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var todoButton = function (_HTMLElement) {
	_inherits(todoButton, _HTMLElement);

	function todoButton() {
		_classCallCheck(this, todoButton);

		var _this = _possibleConstructorReturn(this, (todoButton.__proto__ || Object.getPrototypeOf(todoButton)).call(this));

		document.addEventListener('touchstart', _this.className += "hover");
		document.addEventListener('touchend', _this.className.className.replace(/\bhover\b/, ''));
		return _this;
	}

	_createClass(todoButton, [{
		key: 'createdCallback',
		value: function createdCallback() {
			this.createShadowRoot().innerHTML = '\n\t\t\t<style>\n:host {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  background: #b7121f;\n  border: 4px solid #eb8991;\n  border-radius: 10px;\n  contain: content;\n  cursor: pointer;\n  display: inline-block;\n  padding: 6px 14px;\n  -webkit-transition: box-shadow 0.1s;\n  transition: box-shadow 0.1s; }\n\n@media screen and (min-width: 768px) {\n  :host(:hover) {\n    box-shadow: 0 16px 28px 0 rgba(0, 0, 0, 0.22), 0 25px 55px 0 rgba(0, 0, 0, 0.21); } }\n\n:host(:active) {\n  box-shadow: none; }\n\nbutton {\n  background: #b7121f;\n  border: 0px;\n  border-radius: 10px;\n  color: white;\n  cursor: pointer;\n  font-size: 14px; }\n\n</style>\n\t\t\t<button>\n\t\t\t\t<content></content>\n\t\t\t</button>\n\t\t';
		}
	}, {
		key: 'attachedCallback',
		value: function attachedCallback() {
			if (window.WebComponents && WebComponents.ShadowCSS) {
				WebComponents.ShadowCSS.shimStyling(this.shadowRoot, 'todo-button');
			}
		}
	}]);

	return todoButton;
}(HTMLElement);

var myTodoButton = document.registerElement("todo-button", todoButton);

var todoInput = function (_HTMLElement2) {
	_inherits(todoInput, _HTMLElement2);

	function todoInput() {
		_classCallCheck(this, todoInput);

		return _possibleConstructorReturn(this, (todoInput.__proto__ || Object.getPrototypeOf(todoInput)).call(this));
	}

	_createClass(todoInput, [{
		key: 'createdCallback',
		value: function createdCallback() {
			var _this3 = this;

			this.createShadowRoot().innerHTML = '\n      \t\t<style>\n\n</style>\n      \t\t<p>\n\t\t\t\t<input type="text" id="todoText" autofocus> <todo-button>Send</todo-button>\n\t\t\t</p>\n    \t';
			var input = this.shadowRoot.querySelector('input');
			var btn = this.shadowRoot.querySelector('todo-button');
			btn.addEventListener('click', function () {
				return _this3.updateList(input);
			});
		}
	}, {
		key: 'attachedCallback',
		value: function attachedCallback() {
			if (window.WebComponents && WebComponents.ShadowCSS) {
				WebComponents.ShadowCSS.shimStyling(this.shadowRoot, 'todo-input');
			}
		}
	}, {
		key: 'updateList',
		value: function updateList(input) {
			document.querySelector("todo-list").setAttribute("json", '[{"id": 0, "name": "' + input.value + '"}]');
			input.value = "";
		}
	}]);

	return todoInput;
}(HTMLElement);

var myTodoInput = document.registerElement("todo-input", todoInput);

var todoList = function (_HTMLElement3) {
	_inherits(todoList, _HTMLElement3);

	function todoList() {
		_classCallCheck(this, todoList);

		return _possibleConstructorReturn(this, (todoList.__proto__ || Object.getPrototypeOf(todoList)).call(this));
	}

	_createClass(todoList, [{
		key: 'createdCallback',
		value: function createdCallback() {
			this.innerHTML = '\n\t\t\t<p>\n\t\t\t\tThe List:\n\t\t\t\t<div id="todoListItems"></div>\n\t\t\t</p>\n\t\t';
		}
	}, {
		key: 'attachedCallback',
		value: function attachedCallback() {
			if (window.WebComponents && WebComponents.ShadowCSS) {
				WebComponents.ShadowCSS.shimStyling(this.shadowRoot, 'todo-list');
			}
		}
	}, {
		key: 'attributeChangedCallback',
		value: function attributeChangedCallback(json, oldValue, newValue) {
			var items = JSON.parse(newValue);

			if (!oldValue) {
				for (var i in items) {
					this.querySelector('#todoListItems').innerHTML += '\n\t\t\t\t\t<div class="todoItem">\n\t\t\t\t\t\t' + items[i].name + '\n\t\t\t\t\t\t<button class="complete">Complete</button>\n\t\t\t\t\t\t<button class="remove">Remove</button>\n\t\t\t\t\t</div>\n\t\t\t\t';
				}
			} else {
				var todoListItems = this.querySelector('#todoListItems');
				for (var i in items) {
					var theKid = document.createElement("div");
					theKid.innerHTML = '\n\t\t\t\t\t<div class="todoItem">\n\t\t\t\t\t\t' + items[i].name + '\n\t\t\t\t\t\t<button class="complete">Complete</button>\n\t\t\t\t\t\t<button class="remove">Remove</button>\n\t\t\t\t\t</div>\n\t\t\t\t';
					todoListItems.insertBefore(theKid, todoListItems.firstChild);
				}
			}
		}
	}]);

	return todoList;
}(HTMLElement);

var myTodoList = document.registerElement("todo-list", todoList);