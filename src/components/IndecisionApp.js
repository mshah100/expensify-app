import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionsModal';

class IndecisionApp extends React.Component {
    state = {
        options : [], //props.options
        selectedOption: undefined
    };
    
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick = () => {
        const rand = Math.floor(Math.random() * this.state.options.length);
        const op = this.state.options[rand];
        this.setState(() => ({
            selectedOption: op
        }))
    };
    handleAddOption = (option) => {
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
    };
    handleClearOptionSelected = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    };
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
    
    render() {
        const title = "Indecision app";
        const subtitle = "Put your life in the hands of a computer";
    
        const removeAll = "Remove All";
        return (
            <div>
                <Header title={title} subtitles={subtitle}/>
                <div className="container">
                <div className="widget">
                    <Action hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}/>
                    <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}/>
                        <AddOptions handleAddOption={this.handleAddOption}/>
                </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearOptionSelected={this.handleClearOptionSelected}/>
            </div>
        );
    }
}

export default IndecisionApp;