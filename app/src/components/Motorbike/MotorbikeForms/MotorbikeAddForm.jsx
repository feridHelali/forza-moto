
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';



function MotorbikeAddForm() {
  //Controlled Forms
  const [label,setLabel]=useState('')
  const [brand,setBrand]=useState('')
  const [description,setDescription]=useState('')
  const [price,setPrice]=useState(0)


  const handleSubmit = function (e) {
     e.preventDefault()
     fetch('http://localhost:3000/motor/add',{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({label,brand,description,price})
     })
     .then(data=>{
      if(data.status===200){
        return data.json()
      }else{
        alert('Error')
        throw Error('Error')
      }
     })
     .then(json=>console.log(json))
     .catch(error=>console.log(error.message))
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
            value={label}
            onChange={(e)=>setLabel(e.target.value)}
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
            value={brand}
            onChange={(e)=>setBrand(e.target.value)}
          />

          <Textarea 
            name="description"
            minRows={3}
            aria-label="description" 
            placeholder="Description" 
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="price"
            label="price"
            type="number"
            id="price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
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