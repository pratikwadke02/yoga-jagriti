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

const Invoice = () => {


  return (
    <>
      <Page title="User">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Invoice
            </Typography>
          </Stack>
          <Card sx={{ p: 2 }}>
            Invoice
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default Invoice;
