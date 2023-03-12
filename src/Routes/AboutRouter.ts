import express, { Request, Response } from "express";
import { getFirestore,  doc, getDoc, collection, getDocs, DocumentData } from "firebase/firestore";

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

aboutRouter.get("/", async (req: Request, res: Response) => {
    const Data: DocumentData[] = [];
    const collectionRef = collection(db, "Members");
    const memberList = await getDocs(collectionRef);
    if(!collectionRef || !memberList){
        res.status(404);
        res.statusMessage = "Failure";
    }
    else{
        memberList.forEach((doc) => {
            const docData = doc.data();
            Data.push(docData['member_list']);
        })
        console.log(Data);
        res.status(200);
        res.statusMessage = "Success";
        res.send(Data);
    }
    res.send("About Router");
});

//각 운영진의 역할 및 인원을 담은 List 반환
aboutRouter.post("/getMemberList", (req: Request, res: Response) => {
    
})

export default aboutRouter;
/*
{
  member_list: [
    {
      name: '유용민',
      stu_id: '20192*22',
      img: 'img',
      dept: '소프트웨어학부',
      role: '부장'
    }
  ]
}
*/