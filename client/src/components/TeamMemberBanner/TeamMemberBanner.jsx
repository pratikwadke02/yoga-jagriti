import { Typography, Container, Box } from "@mui/material";
import React from "react";
import TeamCard from "../utils/TeamCard/TeamCard";

const TeamMemberBanner = () => {
  const teamMembers = [
    {
      name: "Amanda Rivera",
      role: "YOGA TEACHER",
    },
    {
      name: "jasmin Narayan",
      role: "YOGA TEACHER",
    },
    {
      name: "Jennifer Winds",
      role: "YOGA TEACHER", 
    },
    {
      name: "Elena Rusconi",
      role: "YOGA TEACHER",
    },
  ];

  return (
    <>
      <Container>
        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
            _TEAM MEMBER_
          </Typography>
          <Typography sx={{ fontSize: "46px" }}>
            The concise narration about the way of yoga practice
          </Typography>
        </Box>
        <Box>
          {teamMembers.map((member, index) => {
            return (
              <TeamCard key={index} name={member.name} role={member.role} />
            );
          })}
        </Box>
        <Box>
          <Box></Box>
          <Box>
            <Typography sx={{ fontSize: "24px", fontWeight: "00" }}>
            24 Hours Service Available
            </Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
              Begin your journey to a better life with peace and happiness.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TeamMemberBanner;
