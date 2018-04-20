module.exports ={
    newUser: (req, res, next) => {
        const db = req.app.get('db')
        const {username, password, profileImg} = req.body

        db.create_new_user([username, password, profileImg]).then(user => {
            res.status(200).send(user)
        })
    },
    login: (req, res, next) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        db.find_user([username, password]).then(user => {
            res.status(200).send(user)
        })
    },
    allPosts: (req, res, next) => {
        const db = req.app.get('db')

        db.get_all_posts().then(posts => {
            res.status(200).send(user)
        })
    }
}
