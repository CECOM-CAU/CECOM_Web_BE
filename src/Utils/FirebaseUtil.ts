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

export const getActivityData = async (activityID: string) => {
    return await getFirebaseDB("Activitys", activityID);
};

export const getActivityList = async () => {
    return await getFirebaseDBList("Activitys");
};

const getFirebaseDB = async (collectionID: string, documentID: string) => {
    const RESULT_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }
    const isMemberList = (collectionID == "Members");
    const fbDocument = await getDoc(doc(firebaseDB, collectionID, documentID));
    if(!fbDocument.exists()){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        if (isMemberList)
            RESULT_DATA.RESULT_DATA = fbDocument.data()["member_list"];
        else
            RESULT_DATA.RESULT_DATA = fbDocument.data();
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

        let listMember: any = {};
        let listProject: any = {};

        fbDocument.forEach((curDoc) => {
            if(isMemberList) listMember[curDoc.id] = curDoc.data()["member_list"]
            else listProject[curDoc.id] = curDoc.data();
        });

        if(isMemberList){
            RESULT_DATA_LIST = listMember
        }else{
            RESULT_DATA_LIST = listProject
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