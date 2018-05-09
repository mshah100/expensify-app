class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if (!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleRemoveOne(){ 
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        /*this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });*/
        /*this.setState({
            count: 0
        });
        this.setState({
            count: this.state.count + 1
        });*/
    }
    render() {
        return (
            <div>
                <h1> Count: {this.state.count}</h1>
                <button id='my-id' className='button' onClick={this.handleAddOne}>+1</button>
                <button id='minus-one' className='button' onClick={this.handleRemoveOne}>-1</button>
                <button id='reset' className='reset' onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter count={25}/>, document.getElementById('app'));

/*let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id='my-id' className='button' onClick={addOne}>+1</button>
            <button id='minus-one' className='button' onClick={minusOne}>-1</button>
            <button id='reset' className='reset' onClick = {() =>  {count = 0; renderCounterApp();}}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}


renderCounterApp();*/