import React from 'react';
import './App.css';

//design
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const App = () => (
    <div className="background">
      <header className="header">
          <Avatar size={64} icon={<UserOutlined />} />
      </header>
    </div>
);

export default App;
