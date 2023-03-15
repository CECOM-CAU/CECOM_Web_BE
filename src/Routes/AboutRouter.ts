import express, { Request, Response } from "express";

import { getMemberData, getMemberList } from "../Utils/FirebaseUtil";

const aboutRouter = express.Router();

aboutRouter.get("/", async (req: Request, res: Response) => {
  res.send("this is About Router");
});

//특정 운영진의 역할 및 인원을 담은 값 반환
//매개변수 어떻게 받음?
aboutRouter.post("/getMemberData", async (req: Request, res: Response) => {
  const adminType: string = req.body.AdminType;
  const memberData = await getMemberData(adminType);

  res.send(memberData);
});

//각 운영진의 역할 및 인원을 담은 List 반환
aboutRouter.post("/getMemberList", async (req: Request, res: Response) => {
  const memberList = await getMemberList();

  res.send(memberList);
});

export default aboutRouter;
