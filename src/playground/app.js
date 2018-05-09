class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : [] //props.options
        };
    }
    componentDidMount() {
        console.log("componentDidMount");
        try {
            const json = localStorage.getItem("options");
            console.log(json);
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }
    componentDidUnMount() {
        console.log("componentDidUnMount");
    }
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        this.setState(() => ({options: []}));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick() {
        this.setState(() => {
            const rand = Math.floor(Math.random() * this.state.options.length);
            const op = this.state.options[rand];
            alert(op);
        });
    }
    handleAddOption(option) {
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

        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
    
    render() {
        const title = "Indecision app";
        const subtitle = "Put your life in the hands of a computer";
    
        const removeAll = "Remove All";
        return (
            <div>
                <Header title={title} subtitles={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}/>
                <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// };

//Stateless functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle} </h2>}
        </div>
    )
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
class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions}
                    onClick = {this.props.handlePick}>
                    What should I do?
                </button>
            </div>
        );
    }
}

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

const Options = (props) => {
    return (
        <div>
            
            <button id='removeAll' onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((eachVal) => (
                    <Option 
                        key={eachVal} 
                        optionText={eachVal}
                        handleDeleteOption={props.handleDeleteOption}/>))
            }
            <Option/>
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button onClick={(e) => 
                {props.handleDeleteOption(props.optionText)}}>
                remove
            </button>
        </div>
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

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e)  {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        // this.setState(() => {
        //     return { error };
        // }); 
        this.setState(() => ({error}));
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));