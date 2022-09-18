import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
import Page from '../components/Page';

const StudentDetails = () => {
  const { id } = useParams();

  const [student, setStudent] = React.useState([]);

  useEffect(() => {
    const getStudentData = async () => {
      const { data } = await axios.get(`https://yogajagriti.herokuapp.com/api/yoga/getStudent/${id}`);
      setStudent(data);
      console.log(student);
    };
    getStudentData();
  }, []);

  return (
    <>
      <Page title="User">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Student Details
            </Typography>
          </Stack>
          <Card sx={{ p: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: {xs:'column', md:'row'},
                justifyContent: 'space-around',
                alignItems: 'center',
                
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%',mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  Name:
                </Typography>
                <Typography variant="h7">
                  {student.title} {student.firstName} {student.middleName} {student.lastName}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%',mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  Father's Name:
                </Typography>
                <Typography variant="h7">{student.fatherName}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  Mother's Name:
                </Typography>
                <Typography variant="h7">{student.motherName}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: {xs:'column', md:'row'},
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  Spouse's Name:
                </Typography>
                <Typography variant="h7">{student.spouseName}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  Gender:
                </Typography>
                <Typography variant="h7">{student.gender}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  DOB:
                </Typography>
                <Typography variant="h7">{student.dob}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: {xs:'column', md:'row'},
                justifyContent: 'space-around',
                alignItems: 'center',
                
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  Course:
                </Typography>
                <Typography variant="h7">{student.courseName}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  Category:
                </Typography>
                <Typography variant="h7">{student.category}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  PwD Certificate:
                </Typography>
                <Typography variant="h7">{student.pwdCertificate}</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: {xs:'column', md:'row'},
                justifyContent: 'space-around',
                alignItems: 'center',
                
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  Country:
                </Typography>
                <Typography variant="h7">{student.country}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  Nationality:
                </Typography>
                <Typography variant="h7">{student.nationality}</Typography>
              </Box>
              <Box sx={{ width: '100%' }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: {xs:'column', md:'row'},
                justifyContent: 'space-around',
                alignItems: 'center',
                
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  ID Type:
                </Typography>
                <Typography variant="h7">{student.idType}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  ID Number:
                </Typography>
                <Typography variant="h7">{student.idNumber}</Typography>
              </Box>
              <Box sx={{ width: '100%' }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: {xs:'column', md:'row'},
                justifyContent: 'space-around',
                alignItems: 'center',
                
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  Email:
                </Typography>
                <Typography variant="h7">{student.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 1,
                mb: 1, }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  Phone:
                </Typography>
                <Typography variant="h7">{student.phone}</Typography>
              </Box>
              <Box sx={{ width: '100%' }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: {xs:'column', md:'row'},
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                mt:{md:2},
              }}
            >
              <Box sx={{width:'100%', mr:{md: 1}}}>
                <Typography variant="h5" sx={{}}>
                  Correspondence Address
                </Typography>
                <Box sx={{ display: 'flex',flexDirection:'row', alignItems: 'flex-start',  mt:1 }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    Address:
                  </Typography>
                  <Typography variant="h7">{student.address}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt:1 }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    State:
                  </Typography>
                  <Typography variant="h7">{student.state}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt:1 }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    District:
                  </Typography>
                  <Typography variant="h7">{student.district}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt:1 }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    Pincode:
                  </Typography>
                  <Typography variant="h7">{student.pincode}</Typography>
                </Box>
              </Box>
              <Box sx={{width:'100%', ml:{md:1}, mt:{xs:1, md:0}}}>
                <Typography variant="h5" sx={{}}>
                  Permanent Address
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', alignItems: 'flex-start', mt:1 }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    Address:
                  </Typography>
                  <Typography variant="h7">{student.permanentAddress}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt:1 }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    State:
                  </Typography>
                  <Typography variant="h7">{student.permanentState}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt:1 }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    District:
                  </Typography>
                  <Typography variant="h7">{student.permanentDistrict}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt:1 }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    Pincode:
                  </Typography>
                  <Typography variant="h7">{student.permanentPincode}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt:1 }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    Country:
                  </Typography>
                  <Typography variant="h7">{student.permanentCountry}</Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default StudentDetails;
