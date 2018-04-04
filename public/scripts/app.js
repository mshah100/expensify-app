"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("componentDidMount");
            try {
                var json = localStorage.getItem("options");
                console.log(json);
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {}
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            console.log("componentDidUpdate");
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem("options", json);
            }
        }
    }, {
        key: "componentDidUnMount",
        value: function componentDidUnMount() {
            console.log("componentDidUnMount");
        }
    }, {
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            // this.setState(() => {
            //     return {
            //         options: []
            //     };
            // });
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var _this2 = this;

            this.setState(function () {
                var rand = Math.floor(Math.random() * _this2.state.options.length);
                var op = _this2.state.options[rand];
                alert(op);
            });
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid option to add';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists on the list';
            }
            // this.setState((prevState) => {
            //     return {
            //         options: prevState.options.concat([option])
            //     };
            // });

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision app";
            var subtitle = "Put your life in the hands of a computer";

            var removeAll = "Remove All";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitles: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOptions, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

//Stateless functional component
var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "h2",
            null,
            props.subtitle,
            " "
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle} </h2>
//             </div>
//         )
//     }
// }
// class based component

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { disabled: !this.props.hasOptions,
                        onClick: this.props.handlePick },
                    "What should I do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

// class Options extends React.Component {  
//     render() {
//         return (
//             <div>

//                 <button id='removeAll' onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((eachVal) => <Option key={eachVal} optionText={eachVal}/>)
//                 }
//                 <Option/>
//             </div>
//         );
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { id: "removeAll", onClick: props.handleDeleteOptions },
            "Remove All"
        ),
        props.options.length === 0 && React.createElement(
            "p",
            null,
            "Please add an option to get started!"
        ),
        props.options.map(function (eachVal) {
            return React.createElement(Option, {
                key: eachVal,
                optionText: eachVal,
                handleDeleteOption: props.handleDeleteOption });
        }),
        React.createElement(Option, null)
    );
};

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            props.optionText
        ),
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                } },
            "remove"
        )
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.optionText}</p>
//             </div>
//         );
//     }
// }

var AddOptions = function (_React$Component3) {
    _inherits(AddOptions, _React$Component3);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this4 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this4.handleAddOption = _this4.handleAddOption.bind(_this4);
        _this4.state = {
            error: undefined
        };
        return _this4;
    }

    _createClass(AddOptions, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            // this.setState(() => {
            //     return { error };
            // }); 
            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add option"
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

var User = function User(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "Name: ",
            props.name
        ),
        React.createElement(
            "p",
            null,
            "Age: ",
            props.age
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
