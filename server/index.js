const express = require("express");
var cors = require("cors");

require("dotenv").config();
const stripe = require("stripe")(process.env.SERVER_KEY);

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send(`⚡ [server]: All engines running 🦾`);
});

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;

  let lineItems = [];

  console.log(items);

  items.forEach((item) => {
    lineItems.push({
      price: item.identifier,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: process.env.SUCCESS_URL,
    cancel_url: process.env.CANCEL_URL,
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(PORT, () => console.log(`⚡ [server]: Running on port: ${PORT}`));
