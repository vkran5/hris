import { To, useLocation, useNavigate } from 'react-router-dom';

const navigate = useNavigate();

export const redirectPage = (somePath: To) => {
  navigate(somePath);
};
