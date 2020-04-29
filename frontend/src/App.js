import React from 'react';
import './App.css';
import { Layout, Drawer, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-style" title=" " scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/steam">STEAM</Link>
                <Link to="/lessons">Lessons</Link>
                <Link to="/videos">Videos</Link>
                <Link to="/quizes">Quizes</Link>
            </Navigation>
        </Header>
        <Drawer title="STEAMWorks">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/steam">STEAM</Link>
                <Link to="/lessons">Lessons</Link>
                <Link to="/videos">Videos</Link>
                <Link to="/quizes">Quizes</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    </div>
  );
}

export default App;
