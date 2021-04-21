const router = require('express').Router();
const BASE_URL = process.env.BASE_URL;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const base64 = require('base-64');
const axios = require('axios');

// fetching the job routes
router.get('/fetch_routes', (req, res, next) => {
    const config = {
        method: 'POST',
        credentials: 'included',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Basic ${base64.encode(`${USERNAME}:${PASSWORD}`)}`
        },
    };
    axios.get(BASE_URL+'/routes', config) 
    .then((routes) => {
        //! must access the data by putting (routes.data)
        return res.status(200).json({
            routes: routes.data
        });
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json({
            serverMsg: 'Server Error!',
            err
        });
    });
});

module.exports = router;