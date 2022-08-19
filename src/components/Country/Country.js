import React from 'react';

const Country = (props) => {

    const {name, flag, population, region} = props.country;

    const flagStyle = {height : '50px'};

    return (
        <div>
            <h4>This is a {name}</h4>
            <img style={flagStyle} src={flag} alt="" srcset="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;