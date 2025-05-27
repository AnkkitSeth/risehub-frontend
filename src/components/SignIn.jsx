// src/components/SignIn.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f6f9;
`;

const SignInForm = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
  
  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  text-align: center;
  font-size: 14px;
`;

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email or password is empty before submitting
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token and role in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);

        // Role-based navigation
        switch (data.user.role) {
          case "researcher":
            navigate("/dashboard/researcher");
            break;
          case "innovator":
            navigate("/dashboard/innovator");
            break;
          case "entrepreneur":
            navigate("/dashboard/entrepreneur");
            break;
          case "government":
            navigate("/dashboard/government");
            break;
          case "investor":
            navigate("/dashboard/investor");
            break;
          case "mentor":
            navigate("/dashboard/mentor");
            break;
          default:
            navigate("/"); // Fallback
            break;
        }
      } else {
        setError(data.msg || "An error occurred. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <Container>
      <SignInForm>
        <Title>Sign In</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
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
          <Button type="submit">Sign In</Button>
        </form>
      </SignInForm>
    </Container>
  );
}

export default SignIn;
