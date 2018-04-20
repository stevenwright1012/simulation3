module.exports ={
    newUser: (req, res, next) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        db.create_new_user([username, password]).then(user => {
            res.status(200).send(user)
        })
    },
    login: (req, res, next) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        db.find_user([username, password]).then(user => {
            res.status(200).send(user)
        })
    }
}