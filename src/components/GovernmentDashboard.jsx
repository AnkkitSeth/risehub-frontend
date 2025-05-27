// src/components/GovernmentDashboard.jsx
import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FiUser, FiTrendingUp, FiFileText, FiMessageCircle, FiLogOut } from 'react-icons/fi';

const DashboardWrapper = styled.div`
  display: flex;
  margin-top: 80px; 
  height: calc(100vh - 80px);
  background: #f0f2f5;
`;

const Sidebar = styled.div`
  width: 260px;
  background: linear-gradient(135deg, #27ae60, #2ecc71);
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
  background-color: ${({ active }) => (active ? '#16a085' : 'transparent')};
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #16a085;
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

function GovernmentDashboard() {
  const location = useLocation();

  return (
    <DashboardWrapper>
      <Sidebar>
        <SidebarTitle>Government</SidebarTitle>
        <NavLink to="/dashboard" active={location.pathname === '/dashboard' ? 1 : 0}><FiTrendingUp /> Dashboard</NavLink>
        <NavLink to="/projects" active={location.pathname === '/projects' ? 1 : 0}><FiFileText /> Projects Overview</NavLink>
        <NavLink to="/schemes" active={location.pathname === '/schemes' ? 1 : 0}><FiFileText /> Government Schemes</NavLink>
        <NavLink to="/messages" active={location.pathname === '/messages' ? 1 : 0}><FiMessageCircle /> Messages</NavLink>
        <NavLink to="/logout" active={location.pathname === '/logout' ? 1 : 0}><FiLogOut /> Logout</NavLink>
      </Sidebar>

      <Content>
        <HeadingCard>
          <Heading>Welcome, Government Representative 👋</Heading>
          <SubText>Explore government schemes, monitor ongoing projects, and communicate with innovators and researchers.</SubText>
        </HeadingCard>
      </Content>
    </DashboardWrapper>
  );
}

export default GovernmentDashboard;
