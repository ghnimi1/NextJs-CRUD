import connectDB from '../../../config/connectDB'
import Posts from '../../../models/post.models'

connectDB()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getPost(req, res)
            break;
        case "DELETE":
            await deletePost(req, res)
            break;
        case "PATCH":
            await updatePost(req, res)
            break;

    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.query
        await Posts.findByIdAndDelete(id)
        res.json({ msg: 'Deleted Success!' })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const updatePost = async (req, res) => {
    try {
        const { id } = req.query
        const updatedPost = await Posts.findByIdAndUpdate(
            { _id: id },
            req.body)
        res.json(updatedPost)
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const getPost = async (req, res) => {
    try {
        const { id } = req.query
        const post = await Posts.findById(id)
        res.json(post)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}