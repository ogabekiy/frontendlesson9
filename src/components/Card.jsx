import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const MyCard = () => (
    <div style={{display:'flex',justifyContent:'center',paddingTop:'10px'}}>
        <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://i.pinimg.com/736x/b6/e8/73/b6e873072274cd84f5e074a6667abe5d.jpg"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://i.pinimg.com/736x/65/8f/96/658f96a26612b9afc8802c7ce5fde704.jpg" />}
      title="Card usin"
      description="This is the Travis Scott"
    />
  </Card>
    </div>
);
export default MyCard;