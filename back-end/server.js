import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config();

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const sql = neon(`${process.env.DATABASE_URL}`);

app.get("/products", async (request, response) => {
  try {
    const sqlResponse = await sql`SELECT * FROM products `;

    response.json({ data: sqlResponse, success: true });
  } catch (error) {
    response.json({ error: error , success: false});
  }
});

app.get("/products/{id}", async (request, response) => {
  try {
    const sqlResponse = await sql`SELECT * FROM products WHERE id={} `;

    response.json({ data: sqlResponse, success: true });
  } catch (error) {
    response.json({ error: error , success: false});
  }
});

// app.get("/products", (request, response) => {
//   fs.readFile("./data/products.json", "utf-8", (readError, data) => {
//     if (readError) {
//       response.json({
//         success: false,
//         error: error,
//       });
//     }

//     let dbData = data ? JSON.parse(data) : [];

//     response.json({
//       success: true,
//       products: dbData,
//       error: "DB data hooson",
//     });
//   });
// });

// app.post("/product", (request, response) => {
//   const { productName, price, image } = request.body;

//   fs.readFile("./data/products.json", "utf-8", (readError, data) => {
//     if (readError) {
//       response.json({
//         success: false,
//         error: error,
//       });
//     }

//     let dbData = data ? JSON.parse(data) : [];

//     const newProduct = {
//       id: Date.now().toString(),
//       productName: productName,
//       price: price,
//       image: image,
//     };

//     dbData.push(newProduct);

//     fs.writeFile("./data/products.json", JSON.stringify(dbData), (error) => {
//       if (error) {
//         response.json({
//           success: false,
//           error: error,
//         });
//       } else {
//         response.json({
//           success: true,
//           product: newProduct,
//         });
//       }
//     });
//   });
// });

// app.post("/", (request, response) => {
//   response.send("POST huselt");
// });

app.listen(port, () => {
  console.log(`server ajillaa http://localhost:${port}`);
});
