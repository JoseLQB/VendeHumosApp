const axios = require("axios");

const getVendehumo = (req, res, next) => {
    const vendehumo = req.body;

    axios.get('http://localhost:3000/vendehumos')
    .then(resp =>{
        return res.json(resp.data);
    })

}

module.exports = {
    getVendehumo
}