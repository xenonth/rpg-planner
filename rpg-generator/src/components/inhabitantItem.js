import React from 'react';

function InhabitantItem (props) {
    const races = props.races;
    const removeBlanks = races.filter(race => race !== undefined);
    const listItems = removeBlanks.map((race) => 
        <li>
            {race}
        </li>
    )

    return (
        <ul>{listItems}</ul>
      );
}

export default InhabitantItem;

    