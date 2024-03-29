import exp from "constants";
import express,{ Request, Response } from "express";

import aboutRouter from "./Routes/AboutRouter";
import activityRouter from "./Routes/ActivityRouter";
import projectRouter from "./Routes/ProjectRouter";

import * as FirebaseUtil from "./Utils/FirebaseUtil";

const app = express();

FirebaseUtil.initFirebase();

app.use(express.json());
app.use(express.urlencoded());

app.use("/about", aboutRouter);
app.use("/activity", activityRouter);
app.use("/project", projectRouter);

app.get("/", (req: Request, res: Response) => {
    res.redirect("https://cecom.dev");
});

app.listen(8080, () => {
    console.log("Server is Running with Port 8080");
})