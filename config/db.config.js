module.exports = () => {
	return {
		HOST:  process.env.DB_HOST || "35.193.42.55",
		PORT: process.env.DB_PORT || "5432",
		PASSWORD: process.env.DB_PASSWORD || "user@123",
		DB: process.env.DB_DATABASE || "userdb",
		DBUser: process.env.DB_USER || "postgres"
	}
};
