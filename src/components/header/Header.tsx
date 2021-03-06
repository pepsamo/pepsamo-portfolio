import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import { IPropsHeader } from '../../interfaces/general.interface';
import { changeSection } from '../../store/section/section';
import { connect } from 'react-redux';
import './Header.scss';

const mapDispatchToProps = (dispatch: any) => ({
  changeSection: (action: string) => dispatch(changeSection(action))
});
const Header = (props: IPropsHeader) => {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

const { changeSection } = props;
  return (
    <header className="nav-color">
      <Nav>
        <NavItem>
          <NavLink href="#" onClick ={() => changeSection('HOME')}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick ={() => changeSection('BIOGRAFIA')}>Chi sono?</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick ={() => changeSection('CONTATTI')}>Contatti</NavLink>
        </NavItem>
      </Nav>
  </header>
  );
};

export default connect(null, mapDispatchToProps)(Header);