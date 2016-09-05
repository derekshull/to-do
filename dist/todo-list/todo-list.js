"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var todoList = function (_HTMLElement) {
	_inherits(todoList, _HTMLElement);

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
		key: 'attributeChangedCallback',
		value: function attributeChangedCallback(json, oldValue, newValue) {
			var items = JSON.parse(newValue);

			if (!oldValue) {
				for (var i in items) {
					this.querySelector('#todoListItems').innerHTML += '\n\t\t\t\t\t<div class="todoItem">' + items[i].name + '</div>\n\t\t\t\t';
				}
			} else {
				var todoListItems = this.querySelector('#todoListItems');
				for (var i in items) {
					var theKid = document.createElement("div");
					theKid.innerHTML = '<div class="todoItem">' + items[i].name + '</div>';
					todoListItems.insertBefore(theKid, todoListItems.firstChild);
				}
			}
		}
	}]);

	return todoList;
}(HTMLElement);

var myTodoList = document.registerElement("todo-list", todoList);