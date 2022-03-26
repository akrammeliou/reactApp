import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Menu() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>React App</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
            <Link className="nav-link" to="/">Home</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" to="/vente">Vente</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" to="/contact">Contact</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" to="/checkpoint-jsx">Checkpoint Jsx</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" to="/profil">Profil</Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}