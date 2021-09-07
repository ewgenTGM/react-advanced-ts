import React from 'react';
import './App.css';
import {AppRouter} from './components/AppRouter';
import {NavBar} from './components/NavBar';
import {Layout} from 'antd';

export const App: React.FC = () => {
    return (
        <Layout>

            <Layout.Header>
                <NavBar/>
            </Layout.Header>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
};

export default App;
