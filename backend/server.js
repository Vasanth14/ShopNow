import express from 'express'
import connectDb from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
const port = process.env.PORT || 5000

connectDb()
const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})