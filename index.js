const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});
app.get("/user", (req, res) => {
  res.send("<h1>User</h1>");
});
app.get("/api/v1/dog", (req, res) => {
  let urls = [
    "https://unsplash.com/photos/a-golden-retriever-sitting-on-a-sandy-beach-FTbC150wV8Q",
    "https://unsplash.com/photos/a-brown-and-white-dog-sitting-on-top-of-a-white-sheet-FP5M2q3M4J0",
    "https://unsplash.com/photos/black-dog-wearing-blue-denim-collar-K4mSJ7kc0As",
    "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
    "https://images.unsplash.com/photo-1588269845464-8993565cac3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    "https://plus.unsplash.com/premium_photo-1680542687469-350ab49cb75b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  ];
  let idx = Math.floor(Math.random() * 10) + 1;
  res.send(urls[idx]);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
