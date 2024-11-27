const db = require("../config/db");

const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const query =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
  db.query(query, [name, address, latitude, longitude], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Database error",
      });
    }
    res.status(201).json({
      message: "School added successfully!",
      schoolId: results.insertId,
    });
  });
};



const listSchools = (req, res) => {
    const {latitude, longitude} = req.query;

    if(!latitude || !longitude) {
        return res.status(400).json({
            message: 'Latitude and Longitude are required!'
        })
    }

    const query = 'SELECT id, name, latitude, longitude FROM schools';
    db.query(query, (err, results) => {
        if(err) {
            console.error(err);
            return res.status(500).json({
                message: 'Database error'
            })
        }

        const schools = results.map(school => {
            const distance = Math.sqrt(
                Math.pow(school.latitude - latitude, 2) +
                Math.pow(school.longitude - longitude , 2)
            );
            return {...school, distance};
        })

        schools.sort((a, b) => a.distance - b.distance);

        res.status(200).json(schools)
    })

}

module.exports = {addSchool, listSchools}