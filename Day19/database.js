const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(
    "mongodb+srv://2k22ece2213223:8Wi1LD4cJ8FcDzcF@cluster0.c8fbenr.mongodb.net/Instagram"
  );
}

module.exports = main;
