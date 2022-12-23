import React from 'react'
import { Button, Form, Input, Select, Card, Row, Col, Statistic } from 'antd';
import { useGetLoveQuery } from '../services/loveApi';
import { useState } from 'react';


const LoveCalculator = () => {

const [trigger, setTrigger] = useState(false)
const [yourName, setYourName] = useState('')
const [partnerName, setPartnerName] = useState('')
const {data, isFetching} = useGetLoveQuery({yourName, partnerName})

const onFinish = (values) => {
    // console.log('Success:', values.sname);
    setYourName(values.sname)
    setPartnerName(values.fname)
    // setTrigger(true)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    {!isFetching && console.log(data)}
    <Card hoverable>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
    <div className="search-crypto">
    
        <Form.Item
            label="Your Name"
            name="sname"
            rules={[
            {
                required: true,
                message: 'Please input your name!',
            },
            ]}
        >
            <Input placeholder='Your Name' onChange=""/>
        </Form.Item>

    </div>
    <div className="search-crypto">
        <Form.Item
            label="Partner Name"
            name="fname"
            rules={[
            {
                required: true,
                message: 'Please input your partner name!',
            },
            ]}
        >
            <Input placeholder='Partner Name' onChange=""/>
        </Form.Item>

    </div>
    <div className="search-crypto">
        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
            Calculate Love
            </Button>
        </Form.Item>
    

    </div>
    </Form>
    <div className="search-crypto">
        
        {!isFetching && <Row>
            <Col span={24}>
                <Statistic title="Love Percentage" value={data.percentage}/>
            </Col>
            <Col span={24}>
                {/* <Statistic title="Comments" > */}
                    <p>{data.result}</p>
                {/* </Statistic> */}
            </Col>
        </Row>}

    </div>
    </Card>
      
    </>
  )
}

export default LoveCalculator
