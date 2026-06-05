import app from "./app.js";
import { connectDB } from "./src/config/db.js";

const PORT = process.env.PORT || 3000;

// Start Database Connection
connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on 🌐 http://localhost:${PORT}`);
});