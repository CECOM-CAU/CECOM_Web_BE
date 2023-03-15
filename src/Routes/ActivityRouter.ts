import express, { Request, Response } from "express";
import { getActivityData, getActivityList } from "../Utils/FirebaseUtil";

const activityRouter = express.Router();

activityRouter.get("/", (req: Request, res: Response) => {
    res.send("About Router");
});

//특정 활동의 정보를 담은 값 반환
//매개변수 어떻게 받음?
activityRouter.post("/getActivityData", async (req: Request, res: Response) => {
    const activity_data = await getActivityData("0001");
    res.send(activity_data);
  });
  
  //각 운영진의 역할 및 인원을 담은 List 반환
  activityRouter.post("/getMemberList", async (req: Request, res: Response) => {
    const activity_list = await getActivityList();
    res.send(activity_list);
  });

export default activityRouter;