const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});
app.get("/user", (req, res) => {
  res.send("<h1>User</h1>");
});
app.get("/api/v1/dog", (req, res) => {
  let urls = [
    {
      type: "dog-image",
      url: "https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    {
      type: "dog-image",
      url: "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=714",
    },
    {
      type: "dog-image",
      url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=717",
    },
    {
      type: "dog-image",
      url: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      type: "dog-image",
      url: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      type: "dog-image",
      url: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
    },
    {
      type: "dog-image",
      url: "https://images.unsplash.com/photo-1588269845464-8993565cac3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      type: "dog-image",
      url: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      type: "dog-image",
      url: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      type: "dog-image",
      url: "https://plus.unsplash.com/premium_photo-1680542687469-350ab49cb75b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
  ];
  let idx = Math.floor(Math.random() * 10) + 1;
  res.json(urls[idx]);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
