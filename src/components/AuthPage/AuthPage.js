import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Container } from 'react-bootstrap';
import './AuthPage.css';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Attempting to log in...');
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      console.log('Login response:', response);
      const data = await response.json();
      console.log('Login data:', data);
      if (response.ok) {
        localStorage.setItem('token', data.token);
        console.log('Login successful, redirecting...');
        if (data.role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/employee-dashboard');
        }
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center auth-container">
      <Card className="auth-card">
        <Card.Body>
          <Card.Title className="text-center">Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AuthPage;
