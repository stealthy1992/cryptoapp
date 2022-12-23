import React from 'react'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import { useGetGamesQuery } from '../services/gamesApi'

const CrytoDetails = () => {

  const { coinId } = useParams()
  const {data} = useGetGamesQuery(coinId)
  return (
    
    <div>
      {console.log(data?.title)}
       <h1>CrytoDetails</h1> 
    </div>
  )
}

export default CrytoDetails
