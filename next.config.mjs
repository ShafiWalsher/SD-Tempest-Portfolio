/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/assets/videos/",
          name: "[name].[ext]",
        },
      },
    });

    return config;
  },
};

export default nextConfig;
