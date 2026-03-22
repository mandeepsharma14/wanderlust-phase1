/**
 * Database Seed Script
 * Run with: npm run seed
 * Clears all listings and inserts 30 fresh sample listings.
 */

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => console.log("Connected to MongoDB."))
  .catch((err) => { console.error(err); process.exit(1); });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    console.log("Cleared existing listings.");
    await Listing.insertMany(initData.data);
    console.log(`Inserted ${initData.data.length} sample listings.`);
  } catch (err) {
    console.error("Seed error:", err);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
  }
};

initDB();
