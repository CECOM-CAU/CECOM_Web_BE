import express, { Request, Response } from "express";

import { getMemberData, getMemberList } from "../Utils/FirebaseUtil";

const aboutRouter = express.Router();

aboutRouter.get("/", async (req: Request, res: Response) => {
  res.send("this is About Router");
});

aboutRouter.post("/getMemberData", async (req: Request, res: Response) => {
  const adminType: string = req.body.AdminType;
  const memberData = await getMemberData(adminType);

  res.send(memberData);
});

aboutRouter.post("/getMemberList", async (req: Request, res: Response) => {
  const memberList = await getMemberList();

  res.send(memberList);
});

export default aboutRouter;
