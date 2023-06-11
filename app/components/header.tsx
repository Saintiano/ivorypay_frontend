import React from 'react';

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