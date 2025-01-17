// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoNewsHeaders = {
//     'x-rapidapi-key': 'eaa3a5d980msh799ee1d0bcc1a6cp12f27ejsn1376018d57e1',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'X-BingApis-SDK': 'true'
// };

// const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics?textFormat=Raw&safeSearch=Off';

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query: (newsCategory, count) => createRequest(`/news/search?q=${newsCategory}&count=${count}`),
//         }),
//         // Add more endpoints if needed

//     })
// });
// export const { useGetCryptoNewsQuery } = cryptoNewsApi;

// // import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // const cryptoNewsHeaders = {
// //     'x-rapidapi-key': 'eaa3a5d980msh799ee1d0bcc1a6cp12f27ejsn1376018d57e1',
// //     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
// //     'X-BingApis-SDK': 'true'
// // };

// // const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

// // const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// // export const cryptoNewsApi = createApi({
// //     reducerPath: 'cryptoNewsApi',
// //     baseQuery: fetchBaseQuery({ baseUrl }),
// //     endpoints: (builder) => ({
// //         getCryptoNews: builder.query({
// //             query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&count=${count}`),
// //         }),
// //         // Add more endpoints if needed

// //     })
// // });

// // export const { useGetCryptoNewsQuery } = cryptoNewsApi;
