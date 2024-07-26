/**
 * @swagger
 * tags:
 *  name : Blog
 *  description : blog module and routes 
 */



/**
 * @swagger
 *  components:
 *      schemas:
 *          Create:
 *              type: object
 *              required:
 *                  -   title
 *                  -   short_desc
 *                  -   long_desc
 *              properties:
 *                  title:
 *                      type: string
 *                  short_desc:
 *                      type: string
 *                  long_desc:
 *                      type: string
 *          Delete:
 *              type: object
 *              required:
 *                  -   id
 *              properties:
 *                  id:
 *                      type: string
 */



/**
 * @swagger
 * 
 * /blog/create:
 *  post:
 *      summary: create blog
 *      tags:
 *          -   Blog
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Create'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Create'
 *      responses:
 *          201:
 *              description: success
 */

/**
 * @swagger
 * 
 * /blog/delete:
 *  delete:
 *      summary : delete blog
 *      tags:
 *          -   Blog
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Delete'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Delete'
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 * 
 * /blog/findAll:
 *  get:
 *      summary : find all blogs
 *      tags:
 *          -   Blog
 *      responses:
 *          200:
 *              description: success
 */
