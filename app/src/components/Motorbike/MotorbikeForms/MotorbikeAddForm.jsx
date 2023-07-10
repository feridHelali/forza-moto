
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function MotorbikeAddForm() {

  const handleSubmit = function (e) {

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Add Motorbike
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="label"
            label="Label"
            name="label"
            autoComplete="label"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="brand"
            label="Brand"
            type="text"
            id="brand"
            autoComplete="brand"
          />

          <Textarea 
            name="description"
            minRows={3}
            aria-label="description" 
            placeholder="Description" 
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="price"
            label="price"
            type="number"
            id="price"
            
            />
           
            <Button
              type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
            >
          Save
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
      </Container >
  );
}

export default MotorbikeAddForm;
