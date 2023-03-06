import {React} from 'react'
import { Link } from 'react-router-dom';
import './MatchDetailsCard.scss';

export const MatchDetailsCard = ({match, teamName}) => {
  if(!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`
  return (
    <div className="MatchDetailsCard">   
         <span className='vs'>vs</span>
         <h1> <Link to={otherTeamRoute}>{otherTeam}</Link> </h1>
         <h2 className='match-date'>{match.date}</h2>
         <h3 className='match-venue'>at {match.venue}</h3>
         <h3 className='match-result'> {match.matchWinner} won by {match.resultMargin} {match.result}</h3>
    </div>
  );
}
 


