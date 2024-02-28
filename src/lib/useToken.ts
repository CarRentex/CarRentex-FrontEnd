import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, logoutSuccess } from '../store/signInSlice';
import { AppDispatch } from '../store/store';
interface TokenModel {
    emailAddress: string;
    address: string;
    phoneNumber: string;
    role: string;
    id: number;
    sub: string;
    iat: number;
    exp: number;
}

const useToken = () => {
  const [token, setToken] = useState('');
  const [decodedToken, setDecodedToken] = useState<TokenModel | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken ?? '');

    if (storedToken) {
      const decodedToken = parseJwt(storedToken);
      setDecodedToken(decodedToken);
    }
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = parseJwt(token);
      setDecodedToken(decodedToken);
      // Redux'a token'ı set et
      dispatch(loginSuccess(decodedToken));
    }
  }, [dispatch]);

  const clearToken = () => {
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
    setToken('');
    setDecodedToken(null);
  };

  const parseJwt = (token: string) => {
    if (!token) {
      console.error("Token is undefined.");
      return null;
    }
    const [header, payload, signature] = token.split('.');
    const decodedPayload: TokenModel = JSON.parse(atob(payload));
    return decodedPayload;
  };

  return { token, decodedToken, clearToken };
};


export default useToken;