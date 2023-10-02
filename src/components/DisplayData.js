
import React from 'react';
import { Container, Typography } from '@mui/material';

function DisplayData({ data }) {
  return (
    <Container>
      <Typography variant="h4">Enrollment Data</Typography>
      <Typography>Name: {data.name}</Typography>
      <Typography>Email: {data.email}</Typography>
      <Typography>Age: {data.age}</Typography>
      <Typography>Gender: {data.gender}</Typography>
      <Typography>Course: {data.course}</Typography>
    </Container>
  );
}

export default DisplayData;

