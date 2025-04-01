import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import exampleRoute from "./routes/example.route";

const PORT = process.env.PORT || 3003;
const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.use("/api/v1/example", exampleRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
