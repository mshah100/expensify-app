console.log('app.js is running!');

//JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }
}
const removeAll = () => {
    app.options=[];
    renderOptions();
}
let count = 0;
const addOne = () => {
    count++;
}
const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.title}!</h1> 
            {(app.subTitle) && <p>{app.subTitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button id='remove-all' onClick={removeAll}>Remove All</button>
            <ol> 
                {
                    app.options.map((eachVal) => <li key={addOne}>{eachVal}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
renderOptions();
