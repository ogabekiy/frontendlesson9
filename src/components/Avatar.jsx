import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
const MyAvatar = () => (
  <Space size={24} style={{position:'absolute' ,top:'10px'}}>
    <Badge count={1}>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
    <Badge dot>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
    <p style={{fontFamily:'monospace'}}>Avatar using</p>
  </Space>
);
export default MyAvatar;