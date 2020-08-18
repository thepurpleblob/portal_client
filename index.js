#!/usr/bin/env node

require('dotenv').config()
const axios = require('axios')

// Test data
const url = process.env.REST_URL
const token = process.env.REST_TOKEN
const guid = 'gmg28x'
const maxresults = 10;

// Send call
const data = new URLSearchParams();
data.append('guid', guid);
data.append('maxresults', maxresults)

let moodlep = axios.post(url + '?wstoken=' + token + '&wsfunction=local_guws_portal_courses&moodlewsrestformat=json', data)
moodlep.then(function(result) {
    console.log(result.data)
})
.catch(function(error) {
    console.log(error.message)
})

