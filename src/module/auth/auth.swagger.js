/**
 * @swagger
 * tags:
 *  name : Auth
 *  description : auth module and routes 
 */



/**
 * @swagger
 *  components:
 *      schemas:
 *          SignUp:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   password
 *                  -   confirmPassword
 *              properties:
 *                  mobile:
 *                      type: string
 *                  password:
 *                      type: string
 *                  confirmPassword:
 *                      type: string
 *          Login:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   password
 *              properties:
 *                  mobile:
 *                      type: string
 *                  password:
 *                      type: string
 *          Confirmation:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   code
 *              properties:
 *                  mobile:
 *                      type: string
 *                  code:
 *                      type: string
 */



/**
 * @swagger
 * 
 * /auth/signUp:
 *  post:
 *      summary: create an account
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/SignUp'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/SignUp'
 *      responses:
 *          201:
 *              description: success
 */

/**
 * @swagger
 * 
 * /auth/login:
 *  post:
 *      summary : login to account
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Login'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Login'
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 * 
 * /auth/confirmation:
 *  post:
 *      summary : confirmation otp code
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Confirmation'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Confirmation'
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 * 
 * /auth/logOut:
 *  post:
 *      summary : log out from account
 *      tags:
 *          -   Auth
 *      responses:
 *          200:
 *              description: success
 */

