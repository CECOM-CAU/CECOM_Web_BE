# getStaffList

## Description

각 팀원들의 정보를 전달해주는 함수
/Projects에서는 전체 프로젝트 리스트 받아오기 멘토링/스터디/플젝 여부는 Parameter로 받기
/Activity에서는 동아리 친목 활동 리스트 받아오기 (제목, 일시, 사진 등).

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
  RES_DATA: [
    {
      //memberdata가 여러개 있음
      //memberdata
      stu_id: '20194*94',
      dept: '소프트웨어학과',
      name: '유용민',
      role: '부회장',
      img: BASE64_STRING
    },
    ....
  ]
}
```
