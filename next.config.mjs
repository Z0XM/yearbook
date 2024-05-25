/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/yb1',
				destination:
					'https://docs.google.com/forms/d/e/1FAIpQLSdKWoRlMb82zI0-KrWre1Nit_wRFWaU5lad3yKVxoTMm-Flag/viewform?usp=sf_link',
				permanent: true
			},
			{
				source: '/yb2',
				destination:
					'https://docs.google.com/forms/d/e/1FAIpQLSdLHZtHmup5lrryVluZ0vA3C_WyLQzbkiyUczEryAuZm9b1fQ/viewform?usp=sf_link',
				permanent: true
			},
			{
				source: '/yb3',
				destination: 'https://miro.com/app/board/uXjVKJT4wvs=/',
				permanent: true
			}
		];
	}
};

export default nextConfig;
