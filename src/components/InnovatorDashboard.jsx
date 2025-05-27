// src/components/InnovatorDashboard.jsx
import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FiBriefcase, FiUsers, FiMessageCircle, FiLogOut } from 'react-icons/fi';

const DashboardWrapper = styled.div`
  display: flex;
  margin-top: 0px;
  height: calc(100vh - 80px);
  background: #f0f2f5;
`;

const Sidebar = styled.div`
  width: 260px;
  background: linear-gradient(135deg, #f39c12, #e67e22);
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
  background-color: ${({ active }) => (active ? '#e67e22' : 'transparent')};
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #e67e22;
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

function InnovatorDashboard() {
  const location = useLocation();

  return (
    <DashboardWrapper>
      <Sidebar>
        <SidebarTitle>Innovator</SidebarTitle>
        <NavLink to="/projects" active={location.pathname === '/projects' ? 1 : 0}>
          <FiBriefcase /> My Projects
        </NavLink>
        <NavLink to="/collaborations" active={location.pathname === '/collaborations' ? 1 : 0}>
          <FiUsers /> Collaborations
        </NavLink>
        <NavLink to="/messages" active={location.pathname === '/messages' ? 1 : 0}>
          <FiMessageCircle /> Messages
        </NavLink>
        <NavLink to="/logout" active={location.pathname === '/logout' ? 1 : 0}>
          <FiLogOut /> Logout
        </NavLink>
      </Sidebar>

      <Content>
        <HeadingCard>
          <Heading>Welcome, Innovator 👋</Heading>
          <SubText>
            Manage your projects, find collaborations, and stay connected with researchers and the government.
          </SubText>
        </HeadingCard>
      </Content>
    </DashboardWrapper>
  );
}

export default InnovatorDashboard;
