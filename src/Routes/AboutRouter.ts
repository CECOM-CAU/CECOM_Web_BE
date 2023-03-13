import express, { Request, Response } from "express";
import { getFirestore, collection, getDocs, DocumentData } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIjZK4dqNRjg47LJz-bmbD-TxJwEGk3OI",
  authDomain: "cecom-web.firebaseapp.com",
  projectId: "cecom-web",
  storageBucket: "cecom-web.appspot.com",
  messagingSenderId: "327995337362",
  appId: "1:327995337362:web:1831900525cb1d959b944b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const aboutRouter = express.Router();

interface resdata {
  RES_STATUS: number; 
  RES_MSG: string;
  RES_DATA: DocumentData[];
};

aboutRouter.get("/", (req: Request, res: Response) => {
  res.send('this is About Router');
});

//각 운영진의 역할 및 인원을 담은 List 반환
aboutRouter.post("/getMemberList", async (req: Request, res: Response) => {
  const Data: DocumentData[] = [];
  const resObj: resdata = {
    RES_STATUS: 200,
    RES_MSG: 'Success',
    RES_DATA: []
  };

  const collectionRef = collection(db, "Members");
  const memberList = await getDocs(collectionRef);
  if(!collectionRef || !memberList){
      resObj['RES_STATUS'] = 404;
      resObj['RES_MSG'] = 'Failure';
  }
  else{
      memberList.forEach((doc) => {
          const docData = doc.data();
          const docMemberList = [...docData['member_list']];
          docMemberList.forEach((member) => {
            Data.push({...member})
          })
      })
      resObj['RES_DATA'] = Data;
  }
  return JSON.stringify(resObj);
})

export default aboutRouter;