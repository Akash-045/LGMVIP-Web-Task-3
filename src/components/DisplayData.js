
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function DisplayData({ data }) {
  const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '16px',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const nameBoxStyles = {
    backgroundColor: '#FF6B6B',
  };

  const emailBoxStyles = {
    backgroundColor: '#6BFF6B',
  };

  const ageBoxStyles = {
    backgroundColor: '#6B6BFF',
  };

  const genderBoxStyles = {
    backgroundColor: '#FF6BFF',
  };

  const courseBoxStyles = {
    backgroundColor: '#FFFF6B',
  };

  return (
    <Container>
      <Typography variant="h4">Enrollment Data</Typography>
      <Box style={{ ...boxStyles, ...nameBoxStyles }}>
        <Typography><strong>Name:</strong> {data.name}</Typography>
      </Box>
      <Box style={{ ...boxStyles, ...emailBoxStyles }}>
        <Typography><strong>Email:</strong> {data.email}</Typography>
      </Box>
      <Box style={{ ...boxStyles, ...ageBoxStyles }}>
        <Typography><strong>Age:</strong> {data.age}</Typography>
      </Box>
      <Box style={{ ...boxStyles, ...genderBoxStyles }}>
        <Typography><strong>Gender:</strong> {data.gender}</Typography>
      </Box>
      <Box style={{ ...boxStyles, ...courseBoxStyles }}>
        <Typography><strong>Course:</strong> {data.course}</Typography>
      </Box>
    </Container>
  );
}

export default DisplayData;

