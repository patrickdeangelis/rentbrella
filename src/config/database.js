export default {
  dialect: "sqlite",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true
  }
};
