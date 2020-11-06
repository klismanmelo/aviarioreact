import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthState {
  user: object;
}

interface SignInCredentials {
  email: string,
  password: string,
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContex = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@GoBarber:user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', {
      username: email,
      password,
    });

    const { data } = response.data;

    console.log(response.data);

    // setData({ user });
  }, []);

  return (
    <AuthContex.Provider value={{ name: 'klisman', signIn }}>
      {children}
    </AuthContex.Provider>
  );
};

export { AuthContex, AuthProvider };
