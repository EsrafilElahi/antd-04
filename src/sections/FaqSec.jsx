import React, { useState } from 'react'
import { Row, Col, Collapse, Button, message } from 'antd'


const { Panel } = Collapse;


function FaqSec() {

    return (
        <div id="faq" className='faqsec'>
            <div className='block'>
                <div className="container-fluid">
                    <Row type='flex' justify='center' align='middle'>
                        <Col className='titleHolder'>
                            <h1>سوالات تکراری</h1>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </Col>
                    </Row>

                    <div className="faq-sec">
                        <Collapse dir='rtl' accordion>
                            <Panel header=" چگونه میتوانم از این برنامه استفاده کنم؟" key="1">
                                <p>چه میدونم چجوری</p>
                            </Panel>
                            <Panel header=" کجا میتوانم از این برنامه استفاده کنم؟" key="2">
                                <p>چه میدونم کجا همه جا</p>
                            </Panel>
                            <Panel header=" کی میتوانم از این استفاده کنم این برنامه چیست؟" key="3">
                                <p>چه میدونم کی همیشه بزن استفاده کن</p>
                            </Panel>
                        </Collapse>
                    </div>

                    <Row type='flex' justify='center' align='middle'>
                        <Col className='faq-holder'>
                            <h1>ارسال سوال؟</h1>
                            <p>
                                لورم ایپسوم متن ساختگی
                                با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                 گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                            <Button size='large' type='primary' onClick={() => message.success('ارسال شد', [.7])}> ارسال <i className='fas fa-envelope'></i>  </Button>
                        </Col>
                    </Row>

                </div>
            </div>

            <hr className='hr' />

        </div>
    )
}

export default FaqSec
