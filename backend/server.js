import { connectToDb } from "./db/connectToDB.js";
import {app} from './app.js'


connectToDb()
  .then(() => {
    app.listen(process.env.PORT , () => {
      console.log("Database and Server Started Successfully on PORT: ",process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("Server Connection is Failed: ", error.message);
    process.exit(1)
  });
