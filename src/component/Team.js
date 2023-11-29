import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Own.css'



const handleSocialMediaClick = (link) => {
  if (link) {
    window.open(link, '_blank');
  }
};
// ... (import your images)
const TeamMemberCard = ({ data, index, setHoveredCard }) => (
  
  <div
    key={index}
    className="card"
    onMouseEnter={() => setHoveredCard(index)}
    onMouseLeave={() => setHoveredCard(null)}
  >
    <div className="imge-sections">
      {data.teamImage && <img src={data.teamImage.url} alt="" className="imge-section-two" />}
    </div>
    <div
      className="heading-sections"
      style={{ textTransform: 'uppercase', marginTop: '160px', textAlign: 'center' }}
    >
      {data.Heading}
    </div>
    <div style={{ textAlign: 'center', marginTop: '10px' }}>{data.Designation}</div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15px',
      }}
    >
      {data.socilMediaImages.map((socialMediaImage, idx) => (
        <div className="inst-image" key={idx}  >
          {socialMediaImage.socialMediaImage && <img src={socialMediaImage.socialMediaImage.url} className="inst-image-two" alt="" onClick={() => handleSocialMediaClick(socialMediaImage.socialMediaLink)} />}
        </div>
      ))}
    </div>
  </div>
);

const TeamSection = ({ teamData, setHoveredCard }) => (
  <div className="card-container">
    {teamData.map((member, index) => (
      <TeamMemberCard key={index} data={member} index={index} setHoveredCard={setHoveredCard} />
    ))}
  </div>
);
// ... (import statements)

const Team = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [teamData, setTeamData] = useState({
    foundingTeam: [],
    advisoryBoard: [],
    titles: {
      team: "",
      foundingTeam: "",
      advisoryBoard: "",
    },
  });
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/websiteteam?locale=undefined&draft=false&depth=3');
        console.log("teamdata",response)
        const { docs } = response.data;
    
        // Assuming the first object in the array contains the team information
        const teamInfo = docs[0];
    
        const foundingTeam = teamInfo.WebsiteFoundingTeamSection[0]?.WebsiteFoundingTeamCardSection || [];
        const advisoryBoard = teamInfo.WebsiteAdvisoryBoardTeamSection[0]?.WebsiteAdvisoryTeamCardSection || [];
    
        setTeamData({
          foundingTeam,
          advisoryBoard,
          titles: {
            team: teamInfo.Heading || "",
            foundingTeam: teamInfo.WebsiteFoundingTeamSection[0]?.Heading || "",
            advisoryBoard: teamInfo.WebsiteAdvisoryBoardTeamSection[0]?.Heading || "",
          },
        });
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };
    
    

    fetchData();
  }, []); // Empty dependency array to fetch data once when the component mounts
  
  return (
    <>
     <section className="section bg-light" id="team">
      <div className="team-section">
        <div style={{ textAlign: 'center' }}>{teamData.titles.team}</div>
        <div className="heading-sections" style={{ textAlign: 'center', color: 'black', marginTop: '20px', fontSize: '20px' }}>
          <b>{teamData.titles.foundingTeam}</b>
        </div>
        <TeamSection teamData={teamData.foundingTeam} setHoveredCard={setHoveredCard} />
      </div>

      <div className="team-section">
        <div className="heading-sections" style={{ textAlign: 'center', color: 'black', marginTop: '20px', fontSize: '20px' }}>
          <b>{teamData.titles.advisoryBoard}</b>
        </div>
        <TeamSection teamData={teamData.advisoryBoard} setHoveredCard={setHoveredCard} />
      </div>
      </section>
    </>
  );
};

export default Team;

