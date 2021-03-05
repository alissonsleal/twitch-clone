import { FaTwitch, FaSearch } from 'react-icons/fa';
import { CgCrown } from 'react-icons/cg';
import { BsPerson } from 'react-icons/bs';

import {
  Container,
  LeftMenu,
  MiddleMenu,
  RightMenu,
} from '../styles/components/Header';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <Container>
      <LeftMenu>
        <FaTwitch size={32} />
        <ul>
          <li>
            <a href="#">Browse</a>
          </li>
          <li>...</li>
        </ul>
      </LeftMenu>
      <MiddleMenu>
        <div>
          <input type="text" placeholder="Search" />
          <FaSearch size={16} />
        </div>
      </MiddleMenu>
      <RightMenu>
        <CgCrown size={24} />
        <Button buttonType="secondary">Log In</Button>
        <Button buttonType="primary">Sign Up</Button>
        <BsPerson size={24} color="#fafafa" />
      </RightMenu>
    </Container>
  );
};

export default Header;
