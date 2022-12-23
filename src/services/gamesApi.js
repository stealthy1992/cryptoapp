import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const gamesApiHeaders = {
    'X-RapidAPI-Key': '4173325277msh9d2c8abd90bdcf8p1cd329jsnc97124ee98b3',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
}

const baseUrl = 'https://free-to-play-games-database.p.rapidapi.com'

const createRequest = (url) => ({
    url,
    headers: gamesApiHeaders
})

export const gamesApi = createApi({
    reducerPath: 'gamesApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getGames: builder.query({
            query: () => createRequest('/api/games')
        })
    })
})


export const {
    useGetGamesQuery
} = gamesApi