const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://brandoncullifer:tQrKojf1zUh50uDJ@serverlessinstance0.gvhb2jj.mongodb.net/?retryWrites=true&w=majority");

module.exports = mongoose.connection;
