import express, { Request, Response } from "express";
import { getProjectData, getProjectList } from "../Utils/FirebaseUtil";

const projectRouter = express.Router();

projectRouter.get("/", (req: Request, res: Response) => {
    res.send("About Router");
});

//특정 프로젝트의 정보를 담은 값 반환
//매개변수 어떻게 받음?
projectRouter.post("/getProjectData", async (req: Request, res: Response) => {
    const project_data = await getProjectData("0001");
    res.send(project_data);
});
  
//각 프로젝트의 역할 및 인원을 담은 List 반환
projectRouter.post("/getProjectList", async (req: Request, res: Response) => {
    const project_list = await getProjectList();
    res.send(project_list);
});

export default projectRouter;