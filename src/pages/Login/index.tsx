import React, { useContext, useCallback } from 'react';
import app from '../../services/api';
import { Form } from '@unform/web';

import logoImg from '../../assets/livtechlogo.svg';
import { Container, View, Content } from './style';

import { AuthContex } from '../../context/AuthContex';

import Input from '../../components/input';
import Button from '../../components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {

  const { signIn } = useContext(AuthContex);

  const handleSubmit = useCallback((data: SignInFormData): void => {
    signIn({
      email: data.email,
      password: data.password,
    });
  },[]);

  return (
    <Container>
      <Content>
        <View>
          <img src={logoImg} alt="GoBarber" />
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu Logon</h1>

            <Input name="email"
              placeholder="Email"
            />

            <Input
              name="password"
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>

          </Form>
        </View>
      </Content>
    </Container>
  );
};

export default Login;
