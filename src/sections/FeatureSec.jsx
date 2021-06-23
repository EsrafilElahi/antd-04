import React from 'react'

import images1 from '../assets/images/img1.jpg'
import images2 from '../assets/images/img2.jpg'
import images3 from '../assets/images/img3.jpg'
import images4 from '../assets/images/img4.jpg'
import images5 from '../assets/images/img5.jpg'
import images6 from '../assets/images/img6.jpg'
import images7 from '../assets/images/img7.jpg'
import images8 from '../assets/images/img8.jpg'

import { Row, Col, Card, Space } from 'antd'
const { Meta } = Card;




const items = [
    {
        key: 1,
        title: 'طراحی مدرن',
        description: 'هزینه مناسب',
        alt: 'alt1',
        src: images1
    },
    {
        key: 2,
        title: 'توسعه سریع',
        description: 'کدزنی',
        alt: 'alt2',
        src: images2
    },
    {
        key: 3,
        title: 'آپشن های پیشرفته',
        description: 'کلاس بالا',
        alt: 'alt3',
        src: images3
    },
    {
        key: 4,
        title: 'سرعت بالا',
        description: 'بازدهی مناسب',
        alt: 'alt4',
        src: images4
    },
    {
        key: 5,
        title: 'سفارشی سازی',
        description: 'قابل ادیت',
        alt: 'alt5',
        src: images5
    },
    {
        key: 6,
        title: 'پشتیبانی عالی',
        description: 'همیشه در دسترس',
        alt: 'alt6',
        src: images6
    },
    {
        key: 7,
        title: 'پروژه دقیق',
        description: 'تحویل آنی',
        alt: 'alt7',
        src: images7
    },
    {
        key: 8,
        title: 'فیچرهای بینهایت',
        description: 'استفاده آسان',
        alt: 'alt8',
        src: images8
    },
]



function FeatureSec() {
    return (
        <div id='features' className='block'>
            <div className="container-fluid">

                <Row type='flex' justify='center' align='middle'>
                    <Col className='titleHolder'>
                        <h1>ویژگی ها و مزایا</h1>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </Col>
                </Row>

                <Row className='card-container' gutter={[24, 32]}>
                    {
                        items.map((item) => {
                            return (
                                <Col xs={24} sm={12} md={8} lg={8} xl={6} >
                                    <Space>
                                        <Card
                                            className='card'
                                            key={item.key}
                                            hoverable
                                            cover={<img alt={item.alt} style={{ height: 200 }} src={item.src} />}
                                        >
                                            <Meta title={item.title} description={item.description} />
                                        </Card>
                                    </Space>
                                </Col>
                            )
                        })
                    }
                </Row>

            </div>
        </div>
    )
}

export default FeatureSec
