const cracoConfig = require('craco-alias');

module.exports = {
	plugins: [
		{
			plugin: cracoConfig,
			options: {
				source: "tsconfig",
				baseUrl: "./src",
				tsConfigPath: "./tsconfig.paths.json"
			}
		}
	]
}