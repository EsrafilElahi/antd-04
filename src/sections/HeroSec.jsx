import React from 'react'
import { Carousel, Button, message } from 'antd';


const items = [
    {
        key: '1',
        title: 'برنامه نویسی',
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
    },
    {
        key: '2',
        title: 'گرافیست',
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
    },
    {
        key: '3',
        title: 'مدیر پروژه',
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
    },
]


function Hero() {
    return (
        <div id='home' className='hero-block'>

            <Carousel autoplay>
                {items.map((item) => {
                    return (
                        <div dir='rtl' className='container-fluid'>
                            <div className="content">
                                <h1>{item.title}</h1>
                                <p>{item.content}</p>
                                <div className="btn-holder">
                                    <Button onClick={() => message.warning('دمویی وجود ندارد حاجی', [1])} size='large' type="primary">
                                        تماشا دمو
                                    </Button>
                                    <Button onClick={() => message.warning('یادگیری وجود ندارد داداش', [1])} size='large' className='btn-border' type='link'>
                                        یادگیری ها
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>

        </div>
    )
}

export default Hero
