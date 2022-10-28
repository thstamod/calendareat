module.exports = {
  mongoCloud: (username, password) =>
    `mongodb+srv://${username}:${password}@cluster0.2h49zxb.mongodb.net/calendareat?retryWrites=true&w=majority`,
  jwtPassphrase: 'someprivatekey',
};
