import React, {useState} from 'react'
import { Drawer, Button, Radio, Space } from 'antd';

const DrawerComponent = () => {
    const [visible, setVisible] = useState(true)

    const onClose = () => {
        setVisible(false)
    }

    return (
        <div>
            <Drawer
                title="Basic Drawer"
                placement={'right'}
                closable={false}
                visible={visible}
                onClose={onClose}
                width={"20%"}
                mask={false}
                closeIcon={true}
                >
                <p>Hier chart rein?</p>
            </Drawer> 
        </div>
    )
}

export default DrawerComponent
