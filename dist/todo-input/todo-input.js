"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var todoInput = function (_HTMLElement) {
	_inherits(todoInput, _HTMLElement);

	function todoInput() {
		_classCallCheck(this, todoInput);

		return _possibleConstructorReturn(this, (todoInput.__proto__ || Object.getPrototypeOf(todoInput)).call(this));
	}

	_createClass(todoInput, [{
		key: 'createdCallback',
		value: function createdCallback() {
			var _this2 = this;

			this.innerHTML = '\n\t\t\t<p>\n\t\t\t\t<input type="text" id="todoText"> <button id="submit">Send</button>\n\t\t\t</p>\n\t\t';
			var input = this.querySelector('input');
			var btn = this.querySelector('button');
			btn.addEventListener('click', function () {
				return _this2.updateList(input);
			});
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