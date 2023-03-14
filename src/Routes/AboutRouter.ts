import express, { Request, Response } from "express";
import { getMemberData, getMemberList } from "../Utils/FirebaseUtil";

const aboutRouter = express.Router();

interface resdata {
  RES_STATUS: number;
  RES_MSG: string;
  RES_DATA: any;
}

aboutRouter.get("/", async (req: Request, res: Response) => {
  //const d = await getMemberData('Accounting');
  const d = await getMemberList();
  console.log(d);
  res.send("this is About Router");
});

//각 운영진의 역할 및 인원을 담은 List 반환
aboutRouter.post("/getMemberList", async (req: Request, res: Response) => {
  /*
  const Data: any = [];
  const resObj: resdata = {
    RES_STATUS: 200,
    RES_MSG: "Success",
    RES_DATA: [],
  };

  const collectionRef = collection(db, "Members");
  const memberList = await getDocs(collectionRef);
  if (!collectionRef || !memberList) {
    resObj["RES_STATUS"] = 404;
    resObj["RES_MSG"] = "Failure";
  } else {
    memberList.forEach((doc) => {
      const docData = doc.data();
      const docMemberList = [...docData["member_list"]];
      docMemberList.forEach((member) => {
        Data.push({ ...member });
      });
    });
    resObj["RES_DATA"] = Data;
  }
  return JSON.stringify(resObj);
   */
});

export default aboutRouter;
