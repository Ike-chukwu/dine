// stripe key = sk_test_51NyEfQIFNTaf5vdzHmoGT3qA6t3uafC2OvidKnqioWzaZwlXErSJzxXxefCL0GLCX60MbGSmYSUz1uu6fJ6zCWzE00zlV6xHwX
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NyEfQIFNTaf5vdzHmoGT3qA6t3uafC2OvidKnqioWzaZwlXErSJzxXxefCL0GLCX60MbGSmYSUz1uu6fJ6zCWzE00zlV6xHwX"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
let items;
app.post("/checkout", async (req, res) => {
  items = req.body.items;

  const session = await stripe.checkout.sessions.create({
    line_items: items.map((item) => {
      const price = parseInt(item.price);
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: price * 100,
        },
        quantity: item.amount,
      };
    }),
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
