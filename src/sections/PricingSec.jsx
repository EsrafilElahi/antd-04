import React from 'react'
import { Row, Col, List, Card, Button, message } from 'antd'


const data = [
    {
        title: 'بیسیک',
        content: [
            {
                price: '£29.99',
                space: '1 گیگ',
                user: '1 کاربره',
                support: '24/7 پشتیبانی',
                backup: 'امن و بکاپ',
                access: 'دسترسی همه جانبه'
            }
        ]
    },
    {
        title: 'پریمیوم',
        content: [
            {
                price: '£59.99',
                space: '5 گیگ',
                user: '5 کاربره',
                support: '24/7 پشتیبانی',
                backup: 'امن و بکاپ',
                access: 'دسترسی همه جانبه'
            }
        ]
    },
    {
        title: 'اینترپرایز',
        content: [
            {
                price: '£99.99',
                space: 'نامحدود',
                user: '15 کاربره',
                support: '24/7 پشتیبانی',
                backup: 'امن و بکاپ',
                access: 'دسترسی همه جانبه'
            }
        ]
    }
];


function PricingSec() {
    return (
        <div id='pricing'>
            <div className='block'>
                <div className="container-fluid">
                    <Row type='flex' justify='center' align='middle'>
                        <Col className='titleHolder'>
                            <h1>طرحی متناسب با نیازهای خود انتخاب کنید </h1>
                            <p>
                                لورم ایپسوم
                                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                            </p>
                        </Col>
                    </Row>

                    <div className="list-container">
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 1,
                                md: 4,
                                lg: 4,
                                xl: 6,
                                xxl: 3
                            }}
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item style={{ maxWidth: '150rem' }}>
                                    <Card style={{ width: '13rem' }} className='card-list' title={item.title}>
                                        <h1>{item.content[0].price}</h1>
                                        <p>{item.content[0].sapce}</p>
                                        <p>{item.content[0].user}</p>
                                        <p>{item.content[0].support}</p>
                                        <p>{item.content[0].backup}</p>
                                        <p>{item.content[0].access}</p>
                                        <Button size='large' type='primary' onClick={() => message.success(`طرح ${item.title} انتخاب شد`, [1.2])} > انتخاب<i className='fab fa-telegram-plane'></i> </Button>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </div>

                </div><hr className='hr' />
            </div>
        </div>
    )
}

export default PricingSec
