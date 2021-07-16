const router = require('express').Router();
const { User, Pie, Vote } = require('../../models');

//CREATE a new Pie
router.post('/', async (req, res) => {
    try {
        const pieData = await Pie.create({
            name: req.body.name,
            category: req.body.category,
            labels: req.body.labels,
            data: req.body.data,
            user_id: req.body.user_id || req.session.userId,
        });

        res.status(200).json(pieData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}); 

// //update
// router.put('/', async (req, res) => {
//     try {
//         const postData = await Post.update({
//             title: req.body.title,
//             content: req.body.content,
//             user_id: req.session.userId
//         },{
//             where: {id: req.body.post_id}
//         });

//         res.status(200).json(postData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// //delete
// router.delete('/', async (req, res) => {
//     try {
//         const postData = await Post.destroy({
//             where: {id: req.body.post_id}
//         });

//         res.status(200).json(postData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

module.exports = router;