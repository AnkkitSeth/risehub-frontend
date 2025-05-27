// src/components/ResearcherDashboard.jsx
import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FiUser, FiBookOpen, FiClipboard, FiDollarSign, FiMessageCircle, FiLogOut } from 'react-icons/fi';

const DashboardWrapper = styled.div`
  display: flex;
  margin-top: 0px; /* Assuming your header is fixed and around 80px tall */
  height: calc(100vh - 80px);
  background: #f0f2f5;
`;

const Sidebar = styled.div`
  width: 260px;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
`;

const SidebarTitle = styled.h2`
  color: #ecf0f1;
  margin-bottom: 40px;
  font-size: 24px;
  text-align: center;
`;

const NavLink = styled(Link)`
  color: ${({ active }) => (active ? '#fff' : '#bdc3c7')};
  text-decoration: none;
  font-size: 18px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  padding: 10px 15px;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? '#1abc9c' : 'transparent')};
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #1abc9c;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 40px;
`;

const HeadingCard = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Heading = styled.h1`
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const SubText = styled.p`
  font-size: 18px;
  color: #777;
`;

function ResearcherDashboard() {
  const location = useLocation();

  return (
    <DashboardWrapper>
      <Sidebar>
        <SidebarTitle>Researcher</SidebarTitle>
        <NavLink to="/profile" active={location.pathname === '/profile' ? 1 : 0}><FiUser /> Profile</NavLink>
        <NavLink to="/my-research" active={location.pathname === '/my-research' ? 1 : 0}><FiBookOpen /> My Research</NavLink>
        <NavLink to="/publications" active={location.pathname === '/publications' ? 1 : 0}><FiClipboard /> Publications</NavLink>
        <NavLink to="/funding" active={location.pathname === '/funding' ? 1 : 0}><FiDollarSign /> Funding</NavLink>
        <NavLink to="/messages" active={location.pathname === '/messages' ? 1 : 0}><FiMessageCircle /> Messages</NavLink>
        <NavLink to="/logout" active={location.pathname === '/logout' ? 1 : 0}><FiLogOut /> Logout</NavLink>
      </Sidebar>

      <Content>
        <HeadingCard>
          <Heading>Welcome to Your Dashboard 👋</Heading>
          <SubText>Manage your research, publications, and funding opportunities — all in one place.</SubText>
        </HeadingCard>
      </Content>
    </DashboardWrapper>
  );
}

export default ResearcherDashboard;
