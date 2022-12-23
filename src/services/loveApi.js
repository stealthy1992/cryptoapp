import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const loveApiHeaders = {
    'X-RapidAPI-Key': '4173325277msh9d2c8abd90bdcf8p1cd329jsnc97124ee98b3',
    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
}

const baseUrl = 'https://love-calculator.p.rapidapi.com'

const createRequest = (url) => ({
    url,
    headers: loveApiHeaders
})

export const loveApi = createApi({
    reducerPath: 'loveApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getLove: builder.query({
            query: ({yourName, partnerName}) => createRequest(`/getPercentage?sname=${yourName}&&fname=${partnerName}`)
        })
    })
})

export const {
    useGetLoveQuery
} = loveApi