import React from 'react';
import { Button, Tooltip } from 'antd';
const style = {
  width: '300vw',
  height: '300vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const MyTooltip = () => {
//   React.useEffect(() => {
//     document.documentElement.scrollTop = document.documentElement.clientHeight;
//     document.documentElement.scrollLeft = document.documentElement.clientWidth;
//   }, []);
  return (
    <div style={style}>
      <Tooltip title="Thanks for using antd. Have a nice day !" open>
        <Button type="primary">Scroll The Window</Button>
      </Tooltip>
    </div>
  );
};
export default MyTooltip