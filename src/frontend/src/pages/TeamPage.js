import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

import './TeamPage.scss';

export const TeamPage = () => {

  const [team, setTeam] = useState({matches: []});
  const {teamName} = useParams();
  useEffect(
     () => {
        const fetchMatches = async () => {
          const response = await fetch(`https://seremba-scaling-system-g75v6gvvjj4hp4x9-8080.preview.app.github.dev/team/${teamName}`);
          const data = await response.json();
          console.log(data);
          setTeam(data);
        }
        fetchMatches();

       }, [teamName]);

  
       if(!team || !team.teamName){
        return "Team Not Found";
       }
  return (
    <div className='TeamPage'>  
      <div className='team-name-section'>
          <h1 className='team-name'>{team.teamName}</h1>
      </div> 
      <div className='win-loss-section'>Wins / Losses</div>
      <div className='match-detail-section'>
          <h3>Latest Match</h3>
          <MatchDetailsCard  teamName={team.teamName} match={team.matches[0]}/>
      </div>
          {team.matches.slice(1).map(match => (<MatchSmallCard teamName={team.teamName} key={match.id} match={match}/>))}
      <div><a href='#'>More...</a></div>
    </div>
  );
}
 


