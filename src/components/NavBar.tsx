import React from 'react';
import {Layout, Menu, Row} from 'antd';

type PropsType = {};

export const NavBar: React.FC<PropsType> = props => {
    return (
        <Layout.Header>
            <Row justify={'end'}>
                <Menu
                    theme="dark"
                    mode="horizontal">
                    <Menu.Item key="login">Login</Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
};