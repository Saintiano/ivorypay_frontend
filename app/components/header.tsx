import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};
interface HeaderComponentProps {

    headerTitle: string;
    
}

const HeaderComponent : React.FC<HeaderComponentProps> = ({headerTitle}) => {

    return (

        <Layout>
            <Header style={headerStyle}>{headerTitle}</Header>
        </Layout>

    );
}

export default HeaderComponent;