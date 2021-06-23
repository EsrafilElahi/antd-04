import React, { useState } from 'react'
import { Anchor, Drawer, Button } from 'antd'
import '../App.css'

const { Link } = Anchor;

function MenuSec() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <div className='container-fluid'>
                <div className="header">

                    <div className='mobileHidden'>
                        <Anchor offsetTop='15'>
                            <Link href='#home' title='خانه' />
                            <Link href='#about' title='درباره ما' />
                            <Link href='#features' title='فیچرها' />
                            <Link href='#how' title='چطوری کار میکند' />
                            <Link href='#faq' title='سوالات پرتکرار' />
                            <Link href='#pricing' title='هزینه ای ها' />
                            <Link href='#contact' title='تماس باما' />
                        </Anchor>
                    </div>

                    <div className='mobileVisible'>
                        <Button type="primary" onClick={showDrawer}>
                            <i className='fas fa-bars'></i>
                        </Button>
                        <Drawer
                            title='منو'
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            visible={visible}
                        >
                            <Anchor offsetTop='15'>
                                <Link href='#home' title='خانه' />
                                <Link href='#about' title='درباره ما' />
                                <Link href='#features' title='فیچرها' />
                                <Link href='#how' title='چطوری کار میکند' />
                                <Link href='#faq' title='سوالات پرتکرار' />
                                <Link href='#pricing' title='هزینه ای ها' />
                                <Link href='#contact' title='تماس باما' />
                            </Anchor>
                        </Drawer>
                    </div>

                </div>
            </div>
        </>

    )
}

export default MenuSec
