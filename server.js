const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const connectionString = process.env.MONGO_URL;

mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, goose) => {
    if (err) console.log("ERROR on connection MongoDB:");
    else {
      console.log("MongoDB connection succeed");

      const server = require("./app");
      let PORT = process.env.PORT || 3003;
      server.listen(PORT, function () {
        console.log(`runnig syccessfuly ${PORT}, http://localhost:${PORT}`);
      });
    }
  }
);
