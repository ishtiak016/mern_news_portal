const mongoose = require("mongoose");

const db_connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.db_production_url);
    console.log(`Mnted: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = db_connect;
