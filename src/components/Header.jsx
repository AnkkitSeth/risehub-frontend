import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false); // close mobile menu after click
  };

  // Toggle dropdown open state in mobile menu
  const toggleDropdown = (menu) => {
    if (openDropdown === menu) setOpenDropdown(null);
    else setOpenDropdown(menu);
  };

  return (
    <Wrapper isScrolled={isScrolled}>
      <Container>
        <Nav>
          <Logo>RiseHub</Logo>

          {/* Hamburger icon for mobile */}
          <MobileIcon onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </MobileIcon>

          {/* Desktop & Mobile Nav Links */}
          <NavLinks open={mobileOpen}>
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
              onMouseEnter={() => window.innerWidth >= 768 && setOpenDropdown("stakeholders")}
              onMouseLeave={() => window.innerWidth >= 768 && setOpenDropdown(null)}
            >
              <NavLink
                onClick={() => window.innerWidth < 768 && toggleDropdown("stakeholders")}
                role="button"
                aria-expanded={openDropdown === "stakeholders"}
              >
                Stakeholders ▼
              </NavLink>
              <DropdownMenu isOpen={openDropdown === "stakeholders"}>
                <DropdownItem as={Link} to="/investors" onClick={() => setMobileOpen(false)}>
                  Investors
                </DropdownItem>
                <DropdownItem as={Link} to="/government" onClick={() => setMobileOpen(false)}>
                  Government
                </DropdownItem>
                <DropdownItem as={Link} to="/mentors" onClick={() => setMobileOpen(false)}>
                  Mentors
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Pioneers Dropdown */}
            <Dropdown
              onMouseEnter={() => window.innerWidth >= 768 && setOpenDropdown("pioneers")}
              onMouseLeave={() => window.innerWidth >= 768 && setOpenDropdown(null)}
            >
              <NavLink
                onClick={() => window.innerWidth < 768 && toggleDropdown("pioneers")}
                role="button"
                aria-expanded={openDropdown === "pioneers"}
              >
                Pioneers ▼
              </NavLink>
              <DropdownMenu isOpen={openDropdown === "pioneers"}>
                <DropdownItem as={Link} to="/researcher" onClick={() => setMobileOpen(false)}>
                  Researcher
                </DropdownItem>
                <DropdownItem as={Link} to="/innovators" onClick={() => setMobileOpen(false)}>
                  Innovators
                </DropdownItem>
                <DropdownItem as={Link} to="/entrepreneurs" onClick={() => setMobileOpen(false)}>
                  Entrepreneurs
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Auth buttons for mobile */}
            <MobileAuthButtons>
              <AuthButton as={Link} to="/signin" onClick={() => setMobileOpen(false)}>
                Sign In
              </AuthButton>
              <AuthButton as={Link} to="/register" secondary onClick={() => setMobileOpen(false)}>
                Register
              </AuthButton>
            </MobileAuthButtons>
          </NavLinks>

          {/* Auth buttons desktop */}
          <AuthButtons>
            <AuthButton as={Link} to="/signin">
              Sign In
            </AuthButton>
            <AuthButton as={Link} to="/register" secondary>
              Register
            </AuthButton>
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

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;
  color: #007bff;

  @media (max-width: 767px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 767px) {
    position: fixed;
    top: 60px;
    right: 0;
    height: calc(100vh - 60px);
    width: 240px;
    background: #fff;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    overflow-y: auto;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
  }
`;

const NavLink = styled.span`
  cursor: pointer;
  color: #007bff;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: rgb(5, 7, 107);
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    user-select: none;
  }
`;

const Dropdown = styled.div`
  position: relative;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 180px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  @media (max-width: 767px) {
    position: static;
    border: none;
    box-shadow: none;
    min-width: auto;
    padding-left: 15px;
    border-left: 2px solid #007bff;
    margin-bottom: 10px;
  }
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

  @media (max-width: 767px) {
    padding: 8px 0;
    color: #007bff;

    &:hover {
      background-color: transparent;
      text-decoration: underline;
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileAuthButtons = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }
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
  text-align: center;
  user-select: none;

  &:hover {
    background-color: ${({ secondary }) => (secondary ? "#e6f0ff" : "#0056b3")};
  }
`;
