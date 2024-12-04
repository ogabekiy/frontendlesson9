import React from 'react';
import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const MySelect = () => (
//   <div style="display: flex; justify-content:center" >
    <Space wrap style={{display:'flex', justifyContent: 'center',alignItems: 'center',gap:'10px'}}>
        <h3 style={{fontFamily:'monospace'}}>Select using: </h3>
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      disabled
      options={[
        {
          value: 'lucy',
          label: 'Lucy',
        },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      loading
      options={[
        {
          value: 'lucy',
          label: 'Lucy',
        },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      allowClear
      options={[
        {
          value: 'lucy',
          label: 'Lucy',
        },
      ]}
      placeholder="select it"
    />
  </Space>
//   </div>
);
export default MySelect;