const router = require('express').Router();
const user = require('./Ficr');
require('../db/db')

const User = require('../models/Ficr');

router.get('/', (req, res) => {
    res.json({
        'msg': 'Não vai rolar.'
    })
})

//authentication
router.post('/login', async(req, res, next) => {
    console.log(req.body)

    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user) return res.status(400).send({ error: 'User not found' });
    if (user.password !== password) return res.status(400).send({ error: 'Invalid Password' });

    user.password = undefined;

    if (user) return res.json({ auth: true, user: user });

})

// login alternativo
router.post('/alternate', async(req, res, next) => {
    console.log(req.body)

    const { email, question } = req.body;
    const user = await User.findOne({ email }).select('+password', '+question');

    if (!user) return res.status(400).send({ error: 'User not found', msg: "Usuário não encontrado." });
    if (user.question !== question) return res.status(400).send({ msg: 'Resposta errada.' });

    if (question === user.question) return res.json({ auth: true,  user: user });

})

router.post('/register', async(req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        andress: req.body.andress,
        phone: req.body.phone,
    })
    try {
        const saverUser = await user.save()
        res.json({
            status: true,
            data: saverUser,
        })
    } catch (err) {
        res.json({
            status: false,
            message: err
        })
    }
})

router.post('/logout', function(req, res) {
    res.json({ auth: false });
})

router.use('/user', user),



module.exports = router