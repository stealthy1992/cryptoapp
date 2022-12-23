import { createApi, fetchBaseQuery }from '@reduxjs/toolkit/query/react'


const videoApiHeaders = {
    'X-RapidAPI-Key': '4173325277msh9d2c8abd90bdcf8p1cd329jsnc97124ee98b3',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}

const baseUrl = 'https://youtube-search-and-download.p.rapidapi.com'

const createRequest = (url) => ({
    url,
    headers: videoApiHeaders
})

export const videoApi = createApi({
    reducerPath: 'videoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => createRequest('/trending')
        })
    })
})

export const {
    useGetVideosQuery
} = videoApi