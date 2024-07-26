const autoBind = require("auto-bind");
const {blogModel} = require("./blog.model");
const {isValidObjectId} = require("mongoose");

class BlogService {
    #blog;
    constructor() {
        autoBind(this);
        this.#blog = blogModel
    }
    async create (blogDto, id) {
        const {title,
            short_desc,
            long_desc,
        } = blogDto;

        const blog = await this.#blog.findById(id);
        if(!blog){
            await blogModel.create({
                author : id,
                title,
                short_desc,
                long_desc,
            });
            return {message : "blog created"}
        }
        return {
            message: "already crated"
        };
    }
    
    async delete (id) {
        const blog = await this.#blog.findById(id);
        await blogModel.deleteOne({_id: blog._id});
        return {
            message: "Deleted"
        };
    }
    async findAll () {
        const blogs = await blogModel.find({});
        return {
            blogs
        };
    }
}

module.exports = BlogService;