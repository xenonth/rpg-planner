import React from 'react';

function InhabitantItem (props) {
    const races = props.races;
    console.log(races)
    const removeBlanks = races.filter(race => race !== undefined);
    console.log(removeBlanks)
    const listItems = removeBlanks.map((race) => 
        <li key={race.toString()}>
            {race}
        </li>
    )

    return (
        <ul>{listItems}</ul>
      );
}

export default InhabitantItem;

//Transport this data to new file