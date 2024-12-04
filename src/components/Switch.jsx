import { Switch } from 'antd';
const MySwitch = () => (
  <>
  <div style={{display:'flex', justifyContent: 'center',alignItems: 'center',gap:'10px'}}>
    <h3 style={{fontFamily:'monospace'}}>Swtich using :</h3>
  <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </div>
  </>
);
export default MySwitch;