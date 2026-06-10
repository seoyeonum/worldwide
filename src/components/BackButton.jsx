import { useNavigate } from 'react-router-dom';
import Button from './Button';

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type={'back'}
      onClick={(e) => {
        e.preventDefault(); // form 제출 방지
        navigate(-1); // 이전 url로 1번 돌아가기
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
