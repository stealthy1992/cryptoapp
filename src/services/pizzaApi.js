import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const pizzaApiHeaders = {
    'X-RapidAPI-Key': '4173325277msh9d2c8abd90bdcf8p1cd329jsnc97124ee98b3',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
}

const baseUrl = 'https://pizza-and-desserts.p.rapidapi.com'

const createRequest = (url) => ({
    url,
    header: pizzaApiHeaders
})

export const pizzaApi = createApi({
    reducerPath: 'pizzaApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getPizza: builder.query({
          query: () => createRequest('/pizzas')  
        })
    })
})

export const {
    useGetPizzaQuery
} = pizzaApi