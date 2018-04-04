
const app = {
    title: 'Visibility Toggle',
    buttonTitle: 'Hide details',
    buttonToggleTitle: 'Show details',
    textToggle: 'The button should be labeled Hide details',
    textShowToggle: 'The button should be labeled Show details'
}

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            buttonTitle: app.buttonTitle,
            textRendered: app.textToggle
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                buttonTitle: prevState.buttonTitle === app.buttonTitle ? app.buttonToggleTitle : app.buttonTitle,
            };
        });
        this.setState((prevState) => {
            return {
                textRendered: prevState.buttonTitle === app.buttonTitle ? app.textToggle : app.textShowToggle
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1> 
                    <button id='toggle-button' onClick={this.handleToggleVisibility}>{this.state.buttonTitle}</button>
                    <p id='para-text'>{this.state.textRendered}</p>
            </div>
        );
    }
}


ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));


/*const app = {
    title: 'Visibility Toggle',
    buttonTitle: 'Show details',
    buttonToggleTitle: 'Hide details',
    textToggle: 'The button should be labeled Hide details'
}

const appRoot = document.getElementById('app');

const toggleClick = () => {
    document.getElementById("toggle-button").innerText === app.buttonTitle ? document.getElementById("toggle-button").innerText = app.buttonToggleTitle :  document.getElementById("toggle-button").innerText = app.buttonTitle;
    document.getElementById("toggle-button").innerText === app.buttonTitle ? document.getElementById("para-text").innerText = '' :  document.getElementById("para-text").innerText = app.textToggle;
    render();
}



const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            <button id='toggle-button' onClick={toggleClick}>{app.buttonTitle}</button>
            <p id='para-text'></p>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
render();*/

