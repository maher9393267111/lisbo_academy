
export default {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME_DEVELOPMENT,
		host: process.env.DB_HOSTNAME,
		port: process.env.DB_PORT,
		dialect: "mysql",
		dialectModule: require('mysql2'),
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD_PROD,
		database: process.env.DB_NAME_PRODUCTION,
		host: process.env.DB_HOSTNAME,
		port: process.env.DB_PORT_PROD,
		logging: true,
		dialect: "mysql",
		dialectModule: require('mysql2'),
	},
};
