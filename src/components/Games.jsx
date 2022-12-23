import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Typography, Select, Row, Col, Card, Avatar} from 'antd'
import { useGetGamesQuery} from '../services/gamesApi'
import { useEffect } from 'react'
import moment from 'moment'

const { Text, Title } = Typography

const Games = ({simplified}) => {

  const {data: gamesList, isFetching} = useGetGamesQuery()
  const [games, setGames] = useState([])
  const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

//   useEffect(() => {
//     if(isFetching) 
//     {   
//         setGames(gamesList)
//     }
    
//   },[])

  if(isFetching) return 'Loading...'

  return (
    <>
    {console.log(gamesList)}
    <Row gutter={[24, 24]}>
      {/* <Col span={24}>
        <Select showSearch
        className='select-news'
        placeholder="Select Crypto"
        optionFilterProp="children"
        onChange={(value) => setNewsCategory(value)}
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) > 0}>
          <Option value="Cryptocurrency">Cryptocurrency</Option>
          {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
        </Select>
      </Col> */}
      {gamesList.map((game, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={game.game_url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{game.title}</Title>
                
              </div>
              <img className="game-image" src={game?.thumbnail || demoImage} alt="news"/>
              <p>
                {game.short_description > 100 ? 
                  `${game.short_description.substring(0, 100)} ...`
                  : game.short_description
                }
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={game.thumbnail || demoImage} alt=""/>
                  <Text className='provider-name'>{game.title}</Text>
                </div>
                <Text>{moment(game.release_date).startOf('ss').fromNow()}</Text>
                
              </div>
            </a>

          </Card>
        </Col>
      ))}

    </Row>
    </>
  )
}

export default Games
