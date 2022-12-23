import { Typography, Select, Row, Col, Card, Avatar } from 'antd'
import React from 'react'
import { useGetNewsQuery } from '../services/newsApi'
import { useGetPizzaQuery } from '../services/pizzaApi'
import moment from 'moment'
import { useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'


  const { Text, Title } = Typography
  const { Option } = Select

const News = ({ simplified }) => {

  
  const { data } = useGetCryptosQuery(100)
  const [ newsCategory, setNewsCategory ] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetNewsQuery({ newsCategory, count: simplified ? 6 : 12})
  const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'
  

  if(!cryptoNews?.value) return 'Loading...'
  return (
    <Row gutter={[24, 24]}>
      {!simplified && 
      <Col span={24}>
        <Select showSearch
        className='select-news'
        placeholder="Select Crypto"
        optionFilterProp="children"
        onChange={(value) => setNewsCategory(value)}
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) > 0}>
          <Option value="Cryptocurrency">Cryptocurrency</Option>
          {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
        </Select>
      </Col>}
      {cryptoNews.value.map((news, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
              </div>
              <p>
                {news.description > 100 ? 
                  `${news.subscription.substring(0, 100)} ...`
                  : news.description
                }
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=""/>
                  <Text className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                
              </div>
            </a>

          </Card>
        </Col>
      ))}

    </Row>
  )
}

export default News
