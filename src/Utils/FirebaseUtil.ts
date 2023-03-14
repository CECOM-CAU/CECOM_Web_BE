import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { collection, doc, Firestore, getDoc, getDocs, getFirestore } from "firebase/firestore";

import dotenv from "dotenv";

dotenv.config();
const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};

let firebaseApp: FirebaseApp;
let firebaseDB: Firestore;

export const initFirebase = () => {
    firebaseApp =  initializeApp(firebaseConfig);
    firebaseDB = getFirestore();
};


export const getMemberData = async (memberID: string) => {
    return await getFirebaseDB("Members", memberID);
};

export const getMemberList = async () => {
    return await getFirebaseDBList("Members");
};

export const getProjectData = async (projectID: string) => {
    return await getFirebaseDB("Projects", projectID);
};

export const getProjectList = async () => {
    return await getFirebaseDBList("Projects");
};

const getFirebaseDB = async (collectionID: string, documentID: string) => {
    const RESULT_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDoc(doc(firebaseDB, collectionID, documentID));
    if(!fbDocument.exists()){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = fbDocument.data()["member_list"];
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
};

const getFirebaseDBList = async (collectionID: string) => {
    const RESULT_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const isMemberList = (collectionID == "Members");

    const fbDocument = await getDocs(collection(firebaseDB, collectionID));
    if(fbDocument.empty){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        let RESULT_DATA_LIST;

        let cntData = 0;
        let listMember: Array<any> = [];
        let listProject: Array<any> = [];

        fbDocument.forEach((curDoc) => {
            cntData++;
            if(isMemberList){
                listMember.push({
                    id: curDoc.id,
                    data: {
                        blog: curDoc.get("blog"),
                        boj: curDoc.get("boj"),
                        facebook: curDoc.get("facebook"),
                        github: curDoc.get("github"),
                        instagram: curDoc.get("instagram"),
                        twitter: curDoc.get("twitter"),
                        comment: curDoc.get("comment"),
                        company: curDoc.get("company"),
                        companyImage: curDoc.get("company_img"),
                        name: curDoc.get("name"),
                        profileImage: curDoc.get("profile_img"),
                        history: curDoc.get("history")
                    }
                });
            }else{
                listProject.push({
                    id: curDoc.id,
                    data: {
                        title: curDoc.get("title"),
                        category: curDoc.get("category"),
                        content: curDoc.get("content"),
                        date: curDoc.get("date"),
                        description: curDoc.get("description"),
                        image: curDoc.get("image"),
                        tech: curDoc.get("tech"),
                        user: curDoc.get("user")
                    }
                });
            }
        });

        if(isMemberList){
            RESULT_DATA_LIST = {
                count: cntData,
                data: listMember
            }
        }else{
            RESULT_DATA_LIST = {
                count: cntData,
                data: listProject
            }
        }

        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = RESULT_DATA_LIST;
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
};