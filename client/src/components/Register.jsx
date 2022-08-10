import {
  Box,
  Button,
  TextField,
  Typography,
  styled
} from '@mui/material';
import React from 'react';
import {useState} from 'react';

const Register = () => {
  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onChangeInput = (e) => {
    setRegisterInput(prevState =>({
      ...prevState,
      [e.target.name]:e.target.value
    }));
  }

  const onFormSubmit = (e) =>{
    e.preventdefault();
    console.log(registerInput);
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <Box
          maxWidth={400}
          display='flex'
          flexDirection={'column'}
          alignItems='center'
          boxShadow='10px 10px 20px #ccc'
          padding={2}
          margin='auto'
          width={'75%'}
          marginTop={2}
          borderRadius={5}
        >
          <TypographyStyled padding={3}>
            Register
          </TypographyStyled>
          <TextField
            value={registerInput.email}
            placeholder='Email'
            type='email'
            margin='normal'
            name='email'
            onChange={onChangeInput}
          />
          <TextField
            value={registerInput.name}
            placeholder='name'
            margin='normal'
            name='name'
            onChange={onChangeInput}
          />
          <TextField
            value={registerInput.password}
            placeholder='Password'
            type='password'
            margin='normal'
            name='password'
            onChange={onChangeInput}
          />
          <TextField
            value={registerInput.confirmPassword}
            placeholder='Confirm Password'
            type='password'
            margin='normal'
            name='confirmPassword'
            onChange={onChangeInput}
          />
          <ButtonStyled variant='contained' sx={{borderRadius: 3}}>
            Submit
          </ButtonStyled>
        </Box>
      </form>
    </div>
  )
}

const TypographyStyled = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
`;
const ButtonStyled = styled(Button)`
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
  font-size: 12px;
  color: white;
  background-color: black;
  &:hover {
    background-color: #a19d9d;
  }
`;

export default Register;