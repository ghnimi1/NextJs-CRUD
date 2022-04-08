import connectDB from '../../../config/connectDB'
import Posts from '../../../models/post.models'
const ValidatePost = require('../../../validation/posts.validation')

connectDB()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getPosts(req, res)
            break;
        case "POST":
            await createPost(req, res)
            break;
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await Posts.find({})
        res.json(posts)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }

}

const createPost = async (req, res) => {
    const { errors, isValid } = ValidatePost(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            const post = new Posts({
                title: req.body.title,
                desc: req.body.desc
            })
            const createPo = await post.save()
            res.status(201).json(createPo)
        }
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}