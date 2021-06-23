import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'antd'



function HowWorkSec() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };



    return (
        <div id='how' className='background-fixed'>

            <div className='block-works'>
                <div className="container-fluid">
                    <Row type='flex' justify='center' align='middle'>
                        <Col className='titleHolder'>
                            <h1 className='work-h1'>چطوری کار میکند</h1>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='btn-play'>
                <Button onClick={showModal} >
                    <i className="fas fa-play"></i>
                </Button>
            </div>

            <Modal title="نمونه کارها"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <iframe width='100%' height='350' src='https://github.com/EsrafilElahi' ></iframe>
            </Modal>

        </div>
    )
}

export default HowWorkSec
