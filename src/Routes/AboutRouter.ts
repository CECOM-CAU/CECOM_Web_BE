import express, { Request, Response } from "express";

const aboutRouter = express.Router();

aboutRouter.get("/", (req: Request, res: Response) => {
    res.send("About Router");
});

export default aboutRouter;