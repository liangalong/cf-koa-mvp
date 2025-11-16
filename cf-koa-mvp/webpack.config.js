import createConfig from '@bit/zeus-webpack';

const config = async () => {
	const config = await createConfig.createConfig({
		isDev: false,
		isLambda: false,
		env: null,
	});
	return {
		...config[0],
		externals: {},
	};
};

export default config()