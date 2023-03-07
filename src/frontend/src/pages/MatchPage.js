import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { YearSelector } from '../components/YearSelector';

import './MatchPage.scss';

export const MatchPage = () => {
 const [matches, setMatches] = useState([]);
 const {teamName, year} = useParams();
 
 useEffect(
  () => {
     const fetchMatches = async () => {
       const response = await fetch(`https://seremba-scaling-system-g75v6gvvjj4hp4x9-8080.preview.app.github.dev/team/${teamName}/matches?year=${year}`);
       const data = await response.json();
       console.log(data);
       setMatches(data);
     }
     fetchMatches();

    }, [teamName, year]);
  return (
    <div className="MatchPage">   
        <div className='year-selector'>
          <h3>Select Year</h3>
          <YearSelector teamName={teamName}/>
        </div>
        <div>
         <h1>Match Page</h1>   
         {matches.map(match => (<MatchDetailsCard teamName={teamName} key={match.id} match={match}/>))}   
        </div>
    </div>
  );
}
 


