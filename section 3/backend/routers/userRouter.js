const express = require('express');

const router = express.Router();

router.get( '/add', (req, res) => {
    res.send('Response from user add');
});

router.get( '/getall', (req, res) => {
    res.send('Response from user getall');
});

router.get( '/getbyid/:id', (req, res) => 
{
    res.send('Response from user getbyid');
});

router.get( '/delete', (req, res) => {
    res.send('Response from user delete');
});

router.get( '/update', (req, res) => {
    res.send('Response from user update');
});

// getall
// getbyid
// delete
// update

module.exports = router;