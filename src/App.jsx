import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Sidebar from './components/Sidebar';
    import Header from './components/Header';
    import MainContent from './components/MainContent';
    import Listening from './pages/Listening';
    import Speaking from './pages/Speaking';
    import Reading from './pages/Reading';
    import Writing from './pages/Writing';
    import Grammar from './pages/Grammar';
    import Vocabulary from './pages/Vocabulary';
    import AdminDashboard from './pages/AdminDashboard';
    import UserProfile from './pages/UserProfile';
    import './App.css';

    function App() {
      return (
        <div className="app">
          <Header />
          <div className="content">
            <Sidebar />
            <MainContent>
              <Routes>
                <Route path="/" element={<Listening />} />
                <Route path="/speaking" element={<Speaking />} />
                <Route path="/reading" element={<Reading />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/grammar" element={<Grammar />} />
                <Route path="/vocabulary" element={<Vocabulary />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/profile" element={<UserProfile />} />
              </Routes>
            </MainContent>
          </div>
        </div>
      );
    }

    export default App;
