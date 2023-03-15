import express, { Request, Response } from "express";
import { getActivityData, getActivityList } from "../Utils/FirebaseUtil";

const activityRouter = express.Router();

activityRouter.get("/", (req: Request, res: Response) => {
    res.send("About Router");
});

//특정 활동의 정보를 담은 값 반환
//매개변수 어떻게 받음?
activityRouter.post("/getActivityData", async (req: Request, res: Response) => {
    const ACTIVITY_ID: string = req.body.ACTIVITY_ID;
    const API_RESULT = await getActivityData(ACTIVITY_ID);

    res.send(API_RESULT);
});
  
  //각 운영진의 역할 및 인원을 담은 List 반환
activityRouter.post("/getActivityList", async (req: Request, res: Response) => {
    const API_RESULT = await getActivityList();
    
    res.send(API_RESULT);
});

export default activityRouter;