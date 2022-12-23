import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Column, Input, Col} from 'antd'
import { useState, useEffect } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({ simplified, isHomepage }) => {

  const count = simplified ? 10 : 100
  // const renderSearch = isHomepage ? true : false
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
  const [ cryptos, setCryptos ] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    

    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredData)

  },[cryptoList, searchTerm])
  

  console.log(simplified)
  return (
    <>
    {count === 100 && <div className="search-crypto">
      <Input placeholder='Search Currencies' onChange={(e) => setSearchTerm(e.target.value)}/>

    </div>}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card 
              title={`${currency.rank} .${currency.name}`}
              extra={<img className='crypto-image' src={currency.iconUrl} />}
              hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
