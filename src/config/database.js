module.exports = {
  dialect: 'sqlite',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'restbrella',
  host: process.env.DB_HOSTNAME || 'localhost',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
  storage: './db_restbrella.sqlite3'
};
