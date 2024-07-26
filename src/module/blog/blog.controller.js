const autoBind = require("auto-bind");
const BlogService = require("./blog.service");

class BlogController {
    #service;
    constructor() {
        autoBind(this);
        this.#service = new BlogService();
    }

    async create (req, res, next) {
        try {
            const blogData = req.body 
            const id = req.user.id
            const result = await this.#service.create(blogData,id);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
    async delete (req, res, next) {
        try {
            const id = req.user.id
            const result = await this.#service.delete(id);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
    async findAll (req, res, next) {
        try {
            const result = await this.#service.findAll();
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = {
    blogController: new BlogController()
};