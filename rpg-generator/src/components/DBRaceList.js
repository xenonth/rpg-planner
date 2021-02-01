import React from 'react';


function DBRaceList (props) {
    const races = props.races.races;

    const listItems = races.map((race) => 
        <li key={race.percentage}>
            {race.raceOne??race.raceTwo??race.raceThree??race.raceFour}
        </li>
    )

    return (
        <ul>{listItems}</ul>
      );
}

export default DBRaceList;