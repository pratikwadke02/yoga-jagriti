import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
// material
import {
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box
} from '@mui/material';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'courseName', label: 'Course Name', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'phone', label: 'Phone', alignRight: false },
  { id: 'paymentStatus', label: 'Payment Status', alignRight: false },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get('http://localhost:8080/api/yoga/getAllStudents');
      setUsers(data);
      console.log(users);
    };
    getUserData();
  }, []);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  const [expanded, setExpanded] = useState(false);

  const handleChange = (id) => (event, isExpanded) => {
    setExpanded(isExpanded ? id : false);
  };

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Student
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Student
          </Button>
        </Stack>

        <Card>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <Box sx={{display:'flex', flexDirection:'column',pr:2, pl:2}}>
            <Box sx={{display:'flex', width:'100%',flexDirection:'row', justifyContent:'space-between',}}>
              {
                TABLE_HEAD.map((head, index) => {
                  return (
                    <Box sx={{display:'flex', width:'100%', justifyContent:'center'}}>
                      <Typography variant="h6">
                        {head.label}
                      </Typography>
                    </Box>
                  )
                })
              }
              </Box>
              {
                users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => {
                  return(
                    <>
                    <Accordion expanded={expanded === index} onChange={handleChange(index)} sx={{mt:2}}>
                      <AccordionSummary>
                    <Box sx={{display:'flex', width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', width:'100%', justifyContent:'center'}}>
                      <Typography variant="h7">
                        {user.firstName} {user.lastName}
                      </Typography>
                    </Box>
                    <Box sx={{display:'flex', width:'100%', justifyContent:'center'}}>
                      <Typography variant="h7">
                        {user.courseName}
                      </Typography>
                    </Box>
                    <Box sx={{display:'flex', width:'100%', justifyContent:'center'}}>
                      <Typography variant="h7">
                        {user.phone}
                      </Typography>
                    </Box>
                    <Box sx={{display:'flex', width:'100%', justifyContent:'center'}}>
                      <Typography variant="h7">
                        {user.email}
                      </Typography>
                    </Box>
                    <Box sx={{display:'flex', width:'100%', justifyContent:'center'}}>
                      <Typography variant="h7">
                        Payment Status
                      </Typography>
                    </Box>
                    </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Typography variant="h7">
                            Address: {user.address}
                          </Typography>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                    </>

                  )
                })
              }
            
            </Box>

          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}


