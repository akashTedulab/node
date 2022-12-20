module.exports = reqFilter = (req,res,next) => {
    if(!req.query.password){
        // res.send("Please Enter your password in URL")
        res.send("Enter your password in URL query")
    } else if(req.query.password !== "Hello"){
        res.send('Please Provide correct password')
    } else{
        next()
    }   
}