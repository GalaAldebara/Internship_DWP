import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const PageWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: `url('/images/background-page.jfif')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const LoginBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  height: '600px',
  padding: '20px',
  border: '0px solid #306c94',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url('/images/background.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
}));

const CustomButton = styled(Button)({
  width: '100%', 
  maxWidth: '300px',
  backgroundColor: '#306c94',
  color: '#fff',
  margin: '10px auto', 
  '&:hover': {
    backgroundColor: '#245572',
  },
});

const CustomTextField = styled(TextField)({
  width: '100%', 
  maxWidth: '300px',
  margin: '10px auto', 
});

const GoogleButton = styled(Button)({
  width: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#306c94',
  borderColor: '#306c94',
  '&:hover': {
    borderColor: '#245572',
    backgroundColor: 'rgba(48, 108, 148, 0.1)',
  },
});

const LoginPage = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/users');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const user = data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        onLogin(user); // Panggil fungsi onLogin untuk memperbarui state di App
        navigate('/dashboard'); // Lakukan navigasi ke dashboard
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Error connecting to the server:', err);
      setError('Error connecting to the server');
    }
  };

  return (
    <PageWrapper>
      <LoginBox>
        <Typography variant="h4" gutterBottom align="center" color="#000">
          Welcome!
        </Typography>

        <Button
          variant="outlined"
          sx={{
            marginTop: '16px',
            borderColor: '#000',
            color: '#000',
            borderRadius: '30px',
            padding: '6px 5px',
            fontSize: '12px',
            width: '250px',
            '&:hover': {
              borderColor: '#d8f9a0',
              backgroundColor: '#f1f3f4',
            },
          }}
          startIcon={
            <img
              src="/images/google.jpeg"
              alt="Google"
              style={{ width: '18px', height: '18px' }}
            />
          }
        >
          Sign in with Google
        </Button>

        <Button
          variant="outlined"
          sx={{
            marginTop: '16px',
            borderColor: '#000',
            color: '#000',
            borderRadius: '30px',
            padding: '6px 5px',
            fontSize: '12px',
            width: '250px',
            textAlign: 'left',
            justifyContent: 'flex-start',
            '&:hover': {
              borderColor: '#d8f9a0',
              backgroundColor: '#f1f3f4',
            },
          }}
          startIcon={
            <img
              src="/images/email.jpg"
              alt="Email"
              style={{
                width: '24px',
                height: '24px',
                marginLeft: '34px',
              }}
            />
          }
        >
          Sign in with Email
        </Button>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <CustomTextField
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            sx={{
              borderRadius: '8px',
              marginLeft: '45px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <CustomTextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            sx={{
              borderRadius: '8px',
              marginLeft: '45px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <CustomButton
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              marginLeft: '45px', 
            }}
            type="submit"
          >
            Login
          </CustomButton>
        </form>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        <Link href="#" sx={{ mt: 2 }} color="#306c94">
          Lupa Password?
        </Link>

        <Typography variant="body2" sx={{ mt: 2 }} align="center">
          Belum punya akun?{' '}
          <Link href="#" color="#306c94">
            Sign Up
          </Link>
        </Typography>
      </LoginBox>
    </PageWrapper>
  );
};

export default LoginPage;
