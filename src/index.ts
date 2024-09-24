import app from "./app";
import logger from "./utils/logger";
import env from './config/environment.config';

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });