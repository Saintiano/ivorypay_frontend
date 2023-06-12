"use client";

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  BankOutlined,
  DatabaseOutlined,
  FormOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd'
import Sider from 'antd/es/layout/Sider'
import Image from 'next/image'
import { Content, Header } from 'antd/es/layout/layout';
import HeaderComponent from './components/header';
import CreateTransaction from './home/CreateTransaction';


export default function Home() {
  
  const [collapsed, setCollapsed] = useState(false);
  const [pageContent, setPageContent] = useState<string>('');

  const changeContentPage  = (key : string) => {
    if(key === '1'){
      setPageContent('1');
    }else if(key === '2'){
      setPageContent('2');
    }else{
      setPageContent('3');
    }
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <FormOutlined />,
              label: 'Create Transaction',
              onClick: () => changeContentPage('1'),
            },
            {
              key: '2',
              icon: <DatabaseOutlined />,
              label: 'Transaction History',
              onClick: () => changeContentPage('2'),
            },
            {
              key: '3',
              icon: <BankOutlined />,
              label: 'View Transaction Details',
              // disabled: true, 
              onClick: () => changeContentPage('3'), // Will make the link to external site. 描述如何调用该函数。 请参见讨论页面
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>

        { pageContent === '1' ? 
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <HeaderComponent headerTitle={'Create Transaction'}/>
            <CreateTransaction/>

          </Content>
         : pageContent === '2' ? 
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <HeaderComponent headerTitle={'Transaction History'}/>
            Content 2
          </Content>
          :
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <HeaderComponent headerTitle={'Transaction Details'}/>
            Content 3
          </Content>
        }
      </Layout>
    </Layout>
  )
}
