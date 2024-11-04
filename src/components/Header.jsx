import React from 'react';

    function Header() {
      return (
        <header className="header">
          <h1>IELTS Learning Dashboard</h1>
          <div className="user-account">
            <span>User Account</span>
            <input type="text" placeholder="API Key" />
          </div>
        </header>
      );
    }

    export default Header;
