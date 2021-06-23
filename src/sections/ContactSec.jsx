import React from 'react'
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd';


const { TextArea } = Input;


function ContactSec() {


    const onFinish = (values) => {
        console.log('Success:', values);
        message.success('اطلاعات با موفقیت ارسال شد', [1])
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('! خطایی پیش آمده ', [1])
    };


    return (
        <div id="contact" className='block'>

            <div className="container-fluid">
                <Row type='flex' justify='center' align='middle'>
                    <Col className='titleHolder'>
                        <h1>در تماس باشید</h1>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </Col>
                </Row>
            </div>


            <div className='form-block'>

                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'لطفا نام کاربری خود را وارد کنید!',
                            },
                        ]}
                    >
                        <Input placeholder='نام کاربری' />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'لطفا ایمیل خود را وارد کنید!',
                            },
                        ]}
                    >
                        <Input type='email' placeholder='ایمیل' />
                    </Form.Item>

                    <Form.Item name="subject"
                        rules={[
                            {
                                required: true,
                                message: 'لطفا فیلد موردنظر را پر کنید!',
                            },
                        ]}
                    >
                        <Input placeholder='موضوع' />
                    </Form.Item>


                    <Form.Item name='message'
                        rules={[
                            {
                                required: true,
                                message: 'لطفا فیلد موردنظر را پر کنید!',
                            },
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('لطفا تیک آبی را بزنید ! ')),
                            },
                        ]}
                    >
                        <Checkbox>من با شرایط و ضوابط موافقم</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" size='large' htmlType="submit">ارسال</Button>
                    </Form.Item>

                </Form>

            </div>

        </div>
    )
}

export default ContactSec
