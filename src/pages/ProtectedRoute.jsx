import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/FakeAuthContext';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Effect가 실제로는 Component가 이미 렌더링된 후에만 실행됨을 기억하자!
  useEffect(
    function () {
      if (!isAuthenticated) navigate('/');
    },
    [isAuthenticated, navigate],
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
