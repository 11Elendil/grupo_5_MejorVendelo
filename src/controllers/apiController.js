const  db = require("../../db/models")


const apiController = {

    search:async function (req,res){
        const user = await db.User.findByPk(req.session.user.id)
            res.send(user)
    }
    

}

module.exports = apiController