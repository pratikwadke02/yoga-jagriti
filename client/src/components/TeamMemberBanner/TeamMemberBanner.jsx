import { Typography, Container, Box } from "@mui/material";
import React from "react";
import TeamCard from "../utils/TeamCard/TeamCard";
import { theme } from "../../theme";
import {images} from '../../constants';

const TeamMemberBanner = () => {
  const teamMembers = [
    {
      name: "Yukti Sharma",
      role: "YOGA TEACHER",
      image: "team_one",
    },
    {
      name: "Jasmin Narayan",
      role: "YOGA TEACHER",
      image: "team_two",
    },
    {
      name: "Shakti Mohan",
      role: "YOGA TEACHER", 
      image: "team_three",
    },
  ];

  return (
    <>
      <Container sx={{mt:10,display:'flex', flexDirection:'column', alignItems:'center',width:'100%'}}>
        <Box sx={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Typography  variant="h2" sx={{ color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold }}>
            TEAM MEMBER
          </Typography>
          <div className="darkbar"></div>
          <Typography variant="h3" sx={{mt:2,width:'70vw', textAlign:'center'}}>
            The concise narration about the way of yoga practice
          </Typography>
        </Box>
        <Box sx={{width:'100%', mt:4, display:'flex', flexDirection:{xs:'column', md:'row'}, justifyContent:'space-between'}}>
          {teamMembers.map((member, index) => {
            return (
              <TeamCard key={index} name={member.name} role={member.role} image={images.team_one}/>
            );
          })}
        </Box>
        <Box sx={{mt:8, display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Box sx={{mr:2}}>
            <img src={images.adv} alt="" />
          </Box>
          <Box>
            <Typography variant="h4" sx={{ mb:.25 }}>
            24 Hours Service Available
            </Typography>
            <Typography  variant="h6" sx={{ fontWeight: theme.typography.fontWeightBold, color:theme.palette.text.dark }}>
              Begin your journey to a better life with peace and happiness.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TeamMemberBanner;
