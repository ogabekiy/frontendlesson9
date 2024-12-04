import React, { useRef, useState } from 'react';
import { Button, Col, Row, Slider, Space, Tour, Typography } from 'antd';
const { Text } = Typography;
const MyTour = () => {
  const tourNodeRef = useRef(null);
  const [radius, setRadius] = useState(8);
  const [offsetX, setOffsetX] = useState(2);
  const [offsetY, setOffsetY] = useState(2);
  const [offset, setOffset] = useState(2);
  const [open, setOpen] = useState(false);
  const [offsetDirection, setOffsetDirection] = useState('individual');
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://i.pinimg.com/736x/cd/3d/d0/cd3dd0fb9a861ff08440215285946a1d.jpg"
        />
      ),
      target: () => tourNodeRef.current,
    },
  ];
  const offsetGap =
    offsetDirection === 'both'
      ? {
          offset,
        }
      : {
          offset: [offsetX, offsetY],
        };
  return (
    <div ref={tourNodeRef} style={{marginTop:'20px'}}>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Space
        style={{
          display: 'flex',
          marginTop: 12,
        }}
        direction="vertical"
      >
        <Row>
          <Col span={6}>
            <Text>Radius:</Text>
          </Col>
          <Col span={12}>
            <Slider value={radius} onChange={(val) => val && setRadius(val)} />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text> offset:</Text>
          </Col>
          <Col span={12}>
            <Slider
              value={offset}
              max={50}
              onChange={(val) => val && setOffset(val)}
              onFocus={() => setOffsetDirection('both')}
            />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text>Horizontal offset:</Text>
          </Col>
          <Col span={12}>
            <Slider
              value={offsetX}
              max={50}
              onChange={(val) => val && setOffsetX(val)}
              onFocus={() => setOffsetDirection('individual')}
            />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text>Vertical offset:</Text>
          </Col>
          <Col span={12}>
            <Slider
              value={offsetY}
              max={50}
              onChange={(val) => val && setOffsetY(val)}
              onFocus={() => setOffsetDirection('individual')}
            />
          </Col>
        </Row>
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        gap={{
          ...offsetGap,
          radius,
        }}
      />
    </div>
  );
};
export default MyTour;