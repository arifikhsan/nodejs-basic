const fs = require("fs");
const { resolve } = require("path");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    console.log(error);
    return;
  }
  console.log(data);
};

// fs.readFile("filesystem\\notes.txt", "UTF-8", fileReadCallback);
fs.readFile(resolve(__dirname, "notes.txt"), "UTF-8", fileReadCallback);
