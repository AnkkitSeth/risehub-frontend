import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Wrapper isScrolled={isScrolled}>
      <Container>
        <Nav>
          <Logo>RiseHub</Logo>
          <NavLinks>
            <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>
            <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
            <NavLink onClick={() => scrollToSection("network")}>Network</NavLink>
            <NavLink onClick={() => scrollToSection("features")}>Features</NavLink>
            <NavLink onClick={() => scrollToSection("projects")}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection("testimonials")}>Testimonials</NavLink>
            <NavLink onClick={() => scrollToSection("faqs")}>FAQs</NavLink>
            <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>

            {/* Stakeholders Dropdown */}
            <Dropdown
              onMouseEnter={() => setOpenDropdown("stakeholders")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink>Stakeholders ▼</NavLink>
              <DropdownMenu isOpen={openDropdown === "stakeholders"}>
                <DropdownItem as={Link} to="/investors">Investors</DropdownItem>
                <DropdownItem as={Link} to="/government">Government</DropdownItem>
                <DropdownItem as={Link} to="/mentors">Mentors</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Pioneers Dropdown */}
            <Dropdown
              onMouseEnter={() => setOpenDropdown("pioneers")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink>Pioneers ▼</NavLink>
              <DropdownMenu isOpen={openDropdown === "pioneers"}>
                <DropdownItem as={Link} to="/researcher">Researcher</DropdownItem>
                <DropdownItem as={Link} to="/innovators">Innovators</DropdownItem>
                <DropdownItem as={Link} to="/entrepreneurs">Entrepreneurs</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavLinks>

          <AuthButtons>
            <AuthButton as={Link} to="/signin">Sign In</AuthButton>
            <AuthButton as={Link} to="/register" secondary>Register</AuthButton>
          </AuthButtons>
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default Header;

/* Styled Components */
const Wrapper = styled.header`
  background-color: ${({ isScrolled }) => (isScrolled ? "#fff" : "transparent")};
  padding: 15px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.4s ease;
  box-shadow: ${({ isScrolled }) => (isScrolled ? "0px 4px 8px rgba(0,0,0,0.1)" : "none")};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(45deg, #ff0000, #00bfff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.span`
  cursor: pointer;
  color: #007BFF;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: rgb(5, 7, 107);
  }
`;

const Dropdown = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
  z-index: 10;
  min-width: 180px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")}; /* Ensure dropdown stays */
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const AuthButton = styled.span`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: ${({ secondary }) => (secondary ? "#007BFF" : "#ffffff")};
  background-color: ${({ secondary }) => (secondary ? "#ffffff" : "#007BFF")};
  border: ${({ secondary }) => (secondary ? "2px solid #007BFF" : "none")};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ secondary }) => (secondary ? "#007BFF" : "#0056b3")};
    color: #ffffff;
  }
`;
