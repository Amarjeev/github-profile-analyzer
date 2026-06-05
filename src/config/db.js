import mysql from "mysql2/promise";

const pool = mysql.createPool({
    uri: process.env.DATABASE_URL,
});

//Connect to Database
const connectDB = async () => {
    try {
        const connection = await pool.getConnection();
        console.log("✅ MySQL Connected Successfully");
        connection.release();
    } catch (error) {
        console.log("❌ Database Connection Failed");
        console.log(error.message);
        process.exit(1);
    }
}

export { connectDB };