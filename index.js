import express from "express";
import routes from "./routes/routes.js";


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`);
});