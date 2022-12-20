const abc = require('express');
const router = abc.Router();

router.get('/api', (req, res)=>{
    res.json([{
        "name" : "abcd", 
        "add" : {
            "city" : "abcd",
            "state" : "MH"
        },
        "conatct" : "1234567"
    },
    {
        "name" : "xyz", 
        "add" : {
            "city" : "abcd",
            "state" : "MH"
        },
        "conatct" : "1234567"
    },
])
})

module.exports = router
