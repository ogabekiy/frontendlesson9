import React, { useState } from 'react';
import { Button, Image, Space } from 'antd';
const MyImage = () => {
  const [random, setRandom] = useState();
  return (
    <div style={{display:'flex', justifyContent:'center',marginTop:'15px'}}>
        <Space size={12}>
      <Image
        width={200}
        src={`https://i.pinimg.com/736x/03/61/a4/0361a4c2cb944c711d4dff5c60bef1c6.jpg`}
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />
      <Button
        type="primary"
        onClick={() => {
          setRandom(Date.now());
        }}
      >
        Yow Kendrick
      </Button>
    </Space>
    </div>
  );
};
export default MyImage;