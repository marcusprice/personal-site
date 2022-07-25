import express, { Express, Response } from 'express'
const app: Express = express()
const port: number = 5000

app.use(express.static("./public"))

app.get("/webook", (_, res: Response) => {
    console.log("run git pull command here")
    res.status(200).send("suh")
})

app.listen(port, () => {
    console.log("listening on port", port)
})
