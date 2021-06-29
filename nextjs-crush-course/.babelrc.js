module.exports = {
	presets: [
		[
			'next/babel',
			{
				'preset-react': {
					development: true,
				},
			},
		],
	],
	plugins: [
		[
			'styled-components',
			{
				pure: true,
				ssr: true,
			},
		],
	],
};
