import { Card, Input,Button, Flex} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import styles from "./styles.module.css"


function Login() {
  return (
    <div className={styles.root}>
   <Card hoverable title="Login" bordered={false} style={{ width: 300 }}>
       <form action="">
        <Flex gap="middle" vertical>
          <div>
          <Input placeholder="Email" />
          </div>
          <div>
             <Input.Password
              placeholder="Password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </div>
          <div>
             <Button type="primary">Login</Button>
          </div>
        </Flex>
       
       </form>
  </Card>
    </div>
  )
}

export default Login;