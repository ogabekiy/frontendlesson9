import React, { useState } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Badge, Space, Switch } from 'antd';
const MyBadge = () => {
  const [show, setShow] = useState(true);
  return (
    <div style={{position:'absolute' ,top:9,right:5 ,}}>
        <Space>
            <p style={{fontFamily:'monospace'}}>Badge usin:</p>
      <Switch checked={show} onChange={() => setShow(!show)} />
      <Badge count={show ? 11 : 0} showZero color="#faad14" />
      <Badge count={show ? 25 : 0} />
      <Badge
        count={
          show ? (
            <ClockCircleOutlined
              style={{
                color: '#f5222d',
              }}
            />
          ) : (
            0
          )
        }
      />
      <Badge
        className="site-badge-count-109"
        count={show ? 109 : 0}
        style={{
          backgroundColor: '#52c41a',
        }}
      />
    </Space>
    </div>
  );
};
export default MyBadge;