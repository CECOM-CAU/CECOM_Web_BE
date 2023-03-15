# getData

## Description

요청에 따라서 받아오는 데이터가 다름  
```/project/getProjectData``` 에서는 특정 프로젝트의 데이터 받아오기 (상세 내용)  
```/activity/getActivityData``` 에서는 특정 친목 활동 데이터 받아오기 (상세 내용)

---

## Request body

None

---

## Response body

Data description

**/project/getProjectData**

** 입력 데이터 **
```json
{
  "PROJECT_ID": 특정 Project의 ID 값
}

| 변수이름 | 자료형          | 설명                                                   | 예시                                                            |
| -------- | --------------- | ------------------------------------------------------ | --------------------------------------------------------------- |
| title    | string          | 프로젝트의 제목                                        | 'CECOM 홈페이지'                                                |
| content  | string          | 해당 프로젝트의 내용                                   | 'CECOM 홈페이지 개발 프로젝트입니다.'                           |
| date     | string          | 해당 프로젝트가 실행된 날짜, format은 YYYY/MM/DD       | '2023/02/01';                                                   |
| members  | string[]        | 해당 프로젝트에 참여한 사람들 이름                     | [유용민, 박지우, 이상윤, 이주형]                                |
| imgs     | BASE64_STRING[] | 해당 프로젝트 사진을 BASE64로 인코딩한 문자열들의 배열 | ['data:image/png;base64,iVBORw0KGgoA...', 'abdsa..', 'asvddas'] |
| tags     | string[]        | 해당 프로젝트에 사용된 기술스택 이름들                 | ["Node.js", "Next.js", "React.js", "Firebase"]                  |

```json
{
  RES_STATUS: 200,
  RES_MSG: "Success",
  RES_DATA: {
      title: "CECOM 홈페이지",
      content: "CECOM 홈페이지 개발 프로젝트입니다.",
      date: "2023/02/01",
      members: ["유용민", "박지우", "이상윤", "이주형",...],
      imgs: [BASE64_STRING1, BASE64_STRING1, BASE64_STRING1,..]
      tags: ["Node.js", "Next.js", "React.js", "Firebase"]
    }
}
```

**/activity/getActivityData**

** 입력 데이터 **
```json
{
  "ACTIVITY_ID": 특정 Project의 ID 값
}

| 변수이름 | 자료형          | 설명                                               | 예시                                                            |
| -------- | --------------- | -------------------------------------------------- | --------------------------------------------------------------- |
| title    | string          | 활동의 제목                                        | "CECOM 신입생 환영회"                                           |
| content  | string          | 해당 활동의 내용                                   | "CECOM 신입생 환영회 입니다."                                   |
| date     | string          | 해당 활동을 진행한 날짜, format은 YYYY/MM/DD       | "2023/02/01";                                                   |
| members  | string[]        | 해당 활동에 참여한 사람들 이름                     | ["유용민", "박지우", "이상윤", 이주형"]                         |
| imgs     | BASE64_STRING[] | 해당 활동 사진을 BASE64로 인코딩한 문자열들의 배열 | ['data:image/png;base64,iVBORw0KGgoA...', 'abdsa..', 'asvddas'] |
| tags     | string[]        | 해당 활동에 담고싶은 헤시태그들 이름들             | ["#CECOM", "#23학번", "#신입생 환영회", "#만나서 잘부탁해요~"]  |

```json
{
  RES_STATUS: 200,
  RES_MSG: "Success",
  RES_DATA: {
      title: "CECOM 신입생 환영회",
      content: "CECOM 신입생 환영회 입니다.",
      date: "2023/02/01",
      members: ["유용민", "박지우", "이상윤", "이주형",...],
      imgs: [BASE64_STRING1, BASE64_STRING1, BASE64_STRING1,..]
      tags: ["#CECOM", "#23학번", "#신입생 환영회", "#만나서 잘부탁해요~"]
    }
}
```
