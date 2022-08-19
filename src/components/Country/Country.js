import React from 'react';

const Country = (props) => {

    const { name, flag, population, region } = props.country;

    const flagStyle = { height: '50px' };

    const countryStyle = {
        border: '1px solid green',
        margin: '20px',
        padding: '15px'
    };

    const handleAddCountry = props.handleAddCountry

    return (
        <div style={countryStyle}>
            <h4>{name}</h4>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button
                onClick={() => handleAddCountry(props.country)}
            >
                Add Country</button>
        </div>
    );
};

export default Country;