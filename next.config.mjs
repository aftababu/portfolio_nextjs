/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push(
      {
        test: /\.(mp3|glb|gltf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: `/_next/static/assets/`,
            outputPath: `${isServer ? '../' : ''}static/assets/`,
          },
        },
      }
    );


    return config;
  },
};

export default nextConfig;
