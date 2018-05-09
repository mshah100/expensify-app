import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>   
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                id='removeAll' 
                onClick={props.handleDeleteOptions}
                className="button button--link">
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
            props.options.map((eachVal, index) => (
                <Option 
                    key={eachVal} 
                    optionText={eachVal}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}/>))
            }
            <Option/>
    </div>
);

export default Options;