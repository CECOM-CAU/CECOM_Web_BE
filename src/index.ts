import express,{ Request, Response } from "express";
import { initFirebase } from "./Utils/FirebaseUtil";

import aboutRouter from "./Routes/AboutRouter";
import activityRouter from "./Routes/ActivityRouter";
import projectRouter from "./Routes/ProjectRouter";

const app = express();
app.use("/about", aboutRouter);
app.use("/activity", activityRouter);
app.use("/project", projectRouter);

initFirebase();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.listen(3000, () => {
    console.log("Server is Running with Port 8080");
})