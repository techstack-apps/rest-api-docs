const express = require('express')
const productRoutes = require('./product.routes.js')
const router = express.Router()

/**
 * @openapi
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Returns API operational status
 *     responses:
 *       200:
 *         description: API is  running
 */
router.get('/healthcheck', (req, res) => res.sendStatus(200))

router.use(productRoutes)

module.exports = router
