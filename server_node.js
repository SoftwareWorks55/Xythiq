const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors({
  origin: '*', 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use(express.static("public"));
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});  
