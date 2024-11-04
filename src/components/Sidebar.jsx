import React from 'react';
    import { Link } from 'react-router-dom';

    function Sidebar() {
      return (
        <div className="sidebar">
          <ul>
            <li><Link to="/">Listening</Link></li>
            <li><Link to="/speaking">Speaking</Link></li>
            <li><Link to="/reading">Reading</Link></li>
            <li><Link to="/writing">Writing</Link></li>
            <li><Link to="/grammar">Grammar</Link></li>
            <li><Link to="/vocabulary">Vocabulary</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      );
    }

    export default Sidebar;
