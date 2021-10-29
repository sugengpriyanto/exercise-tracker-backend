let User = require('../models/user.model');

exports.get_user = (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
}

exports.addUser = (req, res) => {
    const name = req.body.name;

    const newUser = new User({name});

    newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.getUser = (req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
} 

exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.updateUser = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.name = req.body.name;

        user.save()
        .then(() => res.json('User Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));       
    })
}