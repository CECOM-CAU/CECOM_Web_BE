# getStaffList

## Description

각 팀원들의 정보를 전달해주는 함수

---

## Request body

None

---

## Response body

Data description

**memberdata**

| 변수이름 | 자료형        | 설명                                         | 예시                                    |
| -------- | ------------- | -------------------------------------------- | --------------------------------------- |
| stu_id   | string        | 학번. 뒤에서 3번째 위치에 \*을 붙인다        | '20194\*94'                             |
| dept     | string        | 소속 학과, 단과대/학부 아님                  | '소프트웨어학과'                        |
| name     | string        | 이름                                         | 유용민                                  |
| role     | string        | 직책                                         | 부회장                                  |
| img      | BASE64_STRING | 각자 잘 나온 사진을 BASE64로 인코딩한 문자열 | 'data:image/png;base64,iVBORw0KGgoA...' |

```json
{
  RES_STATUS: 200,
  RES_MSG: "Success",
  RES_DATA: {
    부서명1: [
      {
      //memberdata가 여러개 있음
      //memberdata
      stu_id: '20194*94',
      dept: '소프트웨어학과',
      name: '유용민',
      role: '부회장',
      img: BASE64_STRING
      }
    ],
    부서명2: [
      {
      //memberdata가 여러개 있음
      //memberdata
      stu_id: '20194*94',
      dept: '소프트웨어학과',
      name: '유용민',
      role: '부회장',
      img: BASE64_STRING
      }
    ]
    ....
  }
}
```
