import express, { Request, Response } from "express";
import { getActivityData, getActivityList } from "../Utils/FirebaseUtil";

const activityRouter = express.Router();

activityRouter.get("/", (req: Request, res: Response) => {
    res.send("About Router");
});

activityRouter.post("/getActivityData", async (req: Request, res: Response) => {
    const ACTIVITY_ID: string = req.body.ACTIVITY_ID;
    const API_RESULT = await getActivityData(ACTIVITY_ID);

    res.send(API_RESULT);
});

activityRouter.post("/getActivityList", async (req: Request, res: Response) => {
    const API_RESULT = await getActivityList();

    res.send(API_RESULT);
});

export default activityRouter;