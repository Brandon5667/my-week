const mongoose = require("mongoose");
const MONGODB_URI= "mongodb://127.0.0.1:27017/myweek"
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://brandoncullifer:tQrKojf1zUh50uDJ@serverlessinstance0.gvhb2jj.mongodb.net/?retryWrites=true&w=majority");

module.exports = mongoose.connection;
