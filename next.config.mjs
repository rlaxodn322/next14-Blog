// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 기존 Next.js 설정
};

export default withPWA({
  dest: 'public',
})(nextConfig);
