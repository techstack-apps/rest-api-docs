const express = require('express')
const {
    getProductsHandler,
    addProductHandler,
    deleteProductHandler,
    editProductHandler
} = require('../controllers/product.controller.js')

const router = express.Router()

/**
 * @openapi
 * '/api/products':
 *  get:
 *     tags:
 *     - Product
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/products', getProductsHandler)

/**
 * @openapi
 * '/api/product':
 *  post:
 *     tags:
 *     - Product
 *     summary: Create a product
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *              - name
 *            properties:
 *              id:
 *                type: number
 *                default: 2
 *              name:
 *                type: string
 *                default: New Product Name
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/product', addProductHandler)

/**
 * @openapi
 * '/api/product/{id}':
 *  put:
 *     tags:
 *     - Product
 *     summary: Modify a product
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the product
 *        required: true
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *              - name
 *            properties:
 *              id:
 *                type: number
 *                default: 1
 *              name:
 *                type: string
 *                default: Product Name
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/product/:id', editProductHandler)

/**
 * @openapi
 * '/api/product/{id}':
 *  delete:
 *     tags:
 *     - Product
 *     summary: Remove product by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the product
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/product/:id', deleteProductHandler)

module.exports = router