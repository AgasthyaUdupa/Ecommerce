/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
    images:{
     remotePatterns:[{hostname:"images.unsplash.com"},

 {hostname:"lh3.googleusercontent.com"}   ],
    //  domains: ['example.com'],
    },
    experimental: {
        serverActions: true,
      },

}

module.exports = nextConfig


//Test Github

// module.exports = {
//     experimental: {
//       serverActions: true,
//     },
//   }


  