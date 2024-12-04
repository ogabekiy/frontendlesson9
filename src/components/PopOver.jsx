import React from 'react';
import { Button, Popover, Space } from 'antd';
const content = (
  <div>
    <p>I.m PopOver</p>
    <p>I.m who i am</p>
  </div>
);
const MyPopOver = () => (
  <div style={{display:'flex',justifyContent:'center',paddingTop:'5px'}}>
    <Space wrap>
    <Popover content={content} title="about me" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </Space>
  </div>
);
export default MyPopOver;