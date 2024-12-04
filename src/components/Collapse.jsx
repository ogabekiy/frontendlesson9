import React from 'react';
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const itemsNest = [
  {
    key: '1',
    label: 'This is Collapse Using',
    children: <p>{text}</p>,
  },
];
const items = [
  {
    key: '1',
    label: 'This is Collapse Using',
    children: <Collapse defaultActiveKey="1" items={itemsNest} />,
  },
  {
    key: '2',
    label: 'This is Collapse Using',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is Collapse Using',
    children: <p>{text}</p>,
  },
];
const MyCollapse = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div style={{marginTop:'10px'}}>
        <Collapse onChange={onChange} items={items} />
    </div>
  );
};
export default MyCollapse;