import {useState} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home'); // To change active link on navbar
    const [expanded, setExpanded] = useState(false); // To change expanded for toggle icon

    // Create function to update active link
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const onToggleNavBar = () => {
        setExpanded(!expanded);
    }
    return (
        <Navbar>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" onClick={onToggleNavBar}>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>     
                        <Nav.Link href="#history" className={activeLink === 'history' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('history')}>History</Nav.Link>
                        <Nav.Link href="#etymology" className={activeLink === 'etymology' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('etymology')}>Etymology</Nav.Link>
                        <Nav.Link href="#characteristics" className={activeLink === 'characteristics' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('characteristics')}>Characteristics</Nav.Link>
                        <Nav.Link href="#breeds" className={activeLink === 'breeds' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('breeds')}>Breeds</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}