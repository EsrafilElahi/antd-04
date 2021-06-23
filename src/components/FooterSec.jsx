import React from 'react'
import { BackTop } from 'antd'


function FooterSec() {
    return (
        <div className='container-fluid'>
            <div className="icon">
                <ul>
                    <li>
                        <a href="https://twitter.com/ElahiEsrafil" target='_blank'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/esrafil-elahi/" target='_blank'>
                            <i className='fab fa-linkedin-in'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/EsrafilElahi" target='_blank'>
                            <i className='fab fa-github'></i>
                        </a>
                    </li>
                    <li>
                        <a href="Esrafil.Elahi@gmail.com" target='_blank'>
                            <i className='far fa-envelope'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/Esrafil_Elahi" target='_blank'>
                            <i className='fab fa-telegram-plane'></i>
                        </a>
                    </li>
                </ul>
            </div>
            <p>کپی رایت &copy; 2021</p>

            <BackTop>
                <div className='goTop'>
                    <i className='fas fa-arrow-circle-up'></i>
                </div>
            </BackTop>

        </div>
    )
}

export default FooterSec
