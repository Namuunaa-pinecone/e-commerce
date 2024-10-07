import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { error } from "console";

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("GET huselt");
});

app.get("/products", (request, response) => {
  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    let dbData = data ? JSON.parse(data) : [];

    response.json({
      success: true,
      products: dbData,
      error: "DB data hooson",
    });
  });
});

app.post("/product", (request, response) => {
  const { productName, price, image } = request.body;

  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    let dbData = data ? JSON.parse(data) : [];

    const newProduct = {
      id: Date.now().toString(),
      productName: productName,
      price: price,
      image: image,
    };

    dbData.push(newProduct);

    fs.writeFile("./data/products.json", JSON.stringify(dbData), (error) => {
      if (error) {
        response.json({
          success: false,
          error: error,
        });
      } else {
        response.json({
          success: true,
          product: newProduct,
        });
      }
    });
  });
});

app.post("/", (request, response) => {
  response.send("POST huselt");
});

app.listen(port, () => {
  console.log(`server ajillaa http://localhost:${port}`);
});
