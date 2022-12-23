import React from 'react'
import { useGetVideosQuery } from '../services/videoApi'
import { Typography, Select, Row, Col, Card, Avatar} from 'antd'

const { Text, Title } = Typography

const YouTubeVIdeos = () => {
    const {data, isFetching} = useGetVideosQuery()
    const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'


  if(isFetching) return 'Loading...'

  return (
    <>
    {data?.contents.map((movie) => console.log(movie.video))}
    <Row gutter={[24, 24]}>
      <Col span={24}>
        {/* <Select showSearch
        className='select-news'
        placeholder="Select Crypto"
        optionFilterProp="children"
        onChange={(value) => setNewsCategory(value)}
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) > 0}>
          <Option value="Cryptocurrency">Cryptocurrency</Option>
          {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
        </Select> */}
      </Col>
      {data?.contents?.map((movie, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            {/* <a href={video.video.game_url} target="_blank" rel="noreferrer"> */}
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{movie.video.title}</Title>
                
              </div>
              <img className="game-image" src={movie.video?.thumbnails[0].url || demoImage} alt="news"/>
             
              <div className='provider-container'>
                
                <Text>{movie.video.publishedTimeText}</Text>
                
              </div>
            {/* </a> */}

          </Card>
        </Col>
      ))}

    </Row>
      
    </>
  )
}

export default YouTubeVIdeos
