import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, HeartFilled, VideoCameraFilled } from '@ant-design/icons'
import icon from '../images/icon.png'
// import Drawer from '@mui/material/Drawer';

const Navbar = () => {

  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo" >
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            {/* <Button className='menu-control-container'>

            </Button> */}

        </div>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">
                    Crypto Currencies
                </Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">
                    Exchanges
                </Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">
                    News
                </Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/games">
                    Games
                </Link>
            </Menu.Item>
            <Menu.Item icon={<HeartFilled />}>
                <Link to="/calculator">
                    Love Calculator
                </Link>
            </Menu.Item>
            <Menu.Item icon={<VideoCameraFilled />}>
                <Link to="/videos">
                    YouTube Videos
                </Link>
            </Menu.Item>
        </Menu>
      
    </div>
  )
}

export default Navbar
