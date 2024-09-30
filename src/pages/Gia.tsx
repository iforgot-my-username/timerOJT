import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';

const Gia = () => {
  const [buttonPD, setButtonPd] = useState(1);
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '150px',
      }}
    >
      <Typography>GOOD MORNING</Typography>
      <Box sx={{ paddingTop: buttonPD }}>
        <Button
          onClick={() => {
            setButtonPd((prev) => (prev > 10 ? prev - 10 : prev + 10));
          }}
        >
          CLICK
        </Button>
      </Box>
    </Container>
  );
};

export default Gia;
