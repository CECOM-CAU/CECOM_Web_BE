import express, { Request, Response } from "express";

const activityRouter = express.Router();

activityRouter.get("/", (req: Request, res: Response) => {
    res.send("About Router");
});

export default activityRouter;