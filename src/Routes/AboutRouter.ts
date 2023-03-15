import express, { Request, Response } from "express";

import { getMemberData, getMemberList } from "../Utils/FirebaseUtil";

const aboutRouter = express.Router();

aboutRouter.post("/getMemberData", async (req: Request, res: Response) => {
  const adminType: string = req.body.AdminType;
  const API_RESULT = await getMemberData(adminType);

  res.send(API_RESULT);
});

aboutRouter.post("/getMemberList", async (req: Request, res: Response) => {
  const API_RESULT = await getMemberList();

  res.send(API_RESULT);
});

export default aboutRouter;
