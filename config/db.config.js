module.exports = () => {
	return {
		HOST:  process.ENV.DB_HOST || "1.2.3.4",
		PORT: process.ENV.DB_PORT || "5432",
		PASSWORD: process.ENV.DB_PASSWORD || "pass",
		DB: process.ENV.DB_NAME || "db",
		DBUser: process.ENV.DB_USER || "user"
	}
};