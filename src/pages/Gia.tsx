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
      <Box>
        <h1>T boss ka puli kana??? </h1>
      </Box>
      <Box sx={{ paddingTop: buttonPD }}>
        <Button
          onClick={() => {
            setButtonPd((prev) => (prev > 10 ? prev - 10 : prev + 10));
          }}
        >
          yes?
        </Button>
      </Box>

      {buttonPD == 1 && (
        <Box>
          <h1>Goods</h1>
        </Box>
      )}
    </Container>
  );
};

export default Gia;
