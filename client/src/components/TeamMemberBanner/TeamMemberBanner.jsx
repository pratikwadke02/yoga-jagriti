import { Typography, Container, Box } from "@mui/material";
import React from "react";
import TeamCard from "../utils/TeamCard/TeamCard";
import { theme } from "../../theme";
import {images} from '../../constants';

const TeamMemberBanner = () => {
  const teamMembers = [
    {
      name: "Amanda Rivera",
      role: "YOGA TEACHER",
      image: "team_one",
    },
    {
      name: "jasmin Narayan",
      role: "YOGA TEACHER",
      image: "team_two",
    },
    {
      name: "Jennifer Winds",
      role: "YOGA TEACHER", 
      image: "team_three",
    },
    {
      name: "Elena Rusconi",
      role: "YOGA TEACHER",
      image: "team_four",
    },
  ];

  return (
    <>
      <Container sx={{mt:10,display:'flex', flexDirection:'column', alignItems:'center',width:'100%'}}>
        <Box sx={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Typography  variant="h6" sx={{ color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold }}>
            _TEAM MEMBER_
          </Typography>
          <Typography variant="h1" sx={{mt:2,width:'70vw', textAlign:'center'}}>
            The concise narration about the way of yoga practice
          </Typography>
        </Box>
        <Box sx={{width:'100%', mt:4, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          {teamMembers.map((member, index) => {
            return (
              <TeamCard key={index} name={member.name} role={member.role} image={images.team_one}/>
            );
          })}
        </Box>
        <Box sx={{mt:8}}>
          <Box></Box>
          <Box>
            <Typography variant="h4" sx={{ mb:.25 }}>
            24 Hours Service Available
            </Typography>
            <Typography  variant="h6" sx={{ fontWeight: theme.typography.fontWeightBold, color:theme.palette.text.light }}>
              Begin your journey to a better life with peace and happiness.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TeamMemberBanner;
