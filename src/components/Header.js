import React from 'react';

//Stateless functional component
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle} </h2>}
        </div>
    </div>
);

Header.defaultProps = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of others'
};

export default Header;