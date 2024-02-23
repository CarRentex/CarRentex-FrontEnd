import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutSuccess } from '../../store/signInSlice';

export default function SignedOut({  }: {}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div></div>
  );
}