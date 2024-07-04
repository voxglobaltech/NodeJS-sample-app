const mongoose = require("mongoose");

const CONNECTDB = () => {
  let url =
    "mongodb+srv://scans-admin-portal:rRvU0Bk2dMJkhJ6L@scans.piw9eso.mongodb.net/scans-admin-portal";
  mongoose
    .connect(
      url
   
    )

    .then(async () => {
      console.log("🚀 ~ DB Connection to Scans-admin is Successfull");
    })
    .catch((error) => {
      console.log("🚀 ~ CONNECTDB ~ error:", error);
      return console.log(error.message);
    });
};

module.exports = CONNECTDB;
