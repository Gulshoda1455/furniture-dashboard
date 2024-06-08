import { Card, Input,Button, Flex} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import styles from "./styles.module.css"


function Register() {
  return (
    <div className={styles.root}>
   <Card hoverable title="Register" bordered={false} style={{ width: 300 }}>
       <form action="">
        <Flex gap="middle" vertical>
        <div>
          <Input placeholder="Name" />
          </div>
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
             <Button type="primary">Register</Button>
          </div>
        </Flex>
       
       </form>
  </Card>
    </div>
  )
}

export default Register;