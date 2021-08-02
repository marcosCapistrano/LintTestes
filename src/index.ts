import express = require("express");

const app = express();
const PORT = process.env.PORT || 3308;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
  console.log("")

});

