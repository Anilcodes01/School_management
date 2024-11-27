const mysql = require('mysql2')

const db = mysql.createPool({
    host: process.env.MYSQLHOST, // Railway private domain
    user: process.env.MYSQLUSER, // Database username (e.g., root)
    password: process.env.MYSQLPASSWORD, // Database password
    database: process.env.MYSQLDATABASE, // Database name (e.g., railway)
    port: process.env.MYSQLPORT,

})

db.getConnection((err) => {
    if(err) {
        console.error('Database connection failed:', err)
    } else{
        console.log('Database connected successfully')
    }
})

module.exports = db