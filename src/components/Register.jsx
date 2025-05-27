import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRegister = async () => {
    try {
      const formData = new FormData();
      formData.append('fullname', fullName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('role', role);
      if (profilePic) {
        formData.append('profilePic', profilePic);
      }
  
      const response = await axios.post('http://localhost:5000/api/users/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Registered successfully:', response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      alert('Registration failed!');
    }
  };
  

  return (
    <Wrapper>
      <FormContainer>
        <Title>Register</Title>
        <Input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Label>Upload Profile Picture</Label>
        <ImageUpload>
          <Input type="file" accept="image/*" onChange={handleImageChange} required />
        </ImageUpload>

        {preview && <ImagePreview src={preview} alt="Profile Preview" />}

        <Label>Select Your Role</Label>
        <Select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Choose Role</option>
          <option value="researcher">Researcher</option>
          <option value="innovator">Innovator</option>
          <option value="entrepreneur">Entrepreneur</option>
          <option value="investor">Investor</option>
          <option value="mentor">Mentor</option>
        </Select>

        <Button onClick={handleRegister}>Register</Button>
        <Text>
          Already have an account? <StyledLink to="/signin">Sign In</StyledLink>
        </Text>
      </FormContainer>
    </Wrapper>
  );
};

export default Register;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
`;

const FormContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  text-align: left;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
  font-size: 16px;
`;

const ImageUpload = styled.div`
  margin-bottom: 15px;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #218838;
  }
`;

const Text = styled.p`
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  color: #28a745;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
