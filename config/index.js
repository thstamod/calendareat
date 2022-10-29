require('dotenv').config();

module.exports = {
  mongoCloud: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.2h49zxb.mongodb.net/calendareat?retryWrites=true&w=majority`,
  jwtPassphrase: process.env.JWTPASSPHRASE,
};
