import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  recorded: {
    age: {
      options: [
        { id: 1, t_name: "< 2 ปี" },
        { id: 2, t_name: "2 - 15 ปี" },
        { id: 3, t_name: "16 - 65 ปี" },
        { id: 4, t_name: "> 65 ปี" },
      ],
      value: "0",
    },
    gender: {
      options: [
        { id: 1, t_name: "ชาย" },
        { id: 2, t_name: "หญิง" },
      ],
      value: "0",
    },
    underlying: {
      options: [
        { id: 7, t_name: "เบาหวาน" },
        { id: 8, t_name: "ความดันโลหิตสูง" },
        { id: 9, t_name: "โรคไตวายเรื้อรัง" },
        { id: 10, t_name: "โรคเส้นเลือดหัวใจตีบ" },
        { id: 11, t_name: "โรคเส้นเลือดสมอง" },
      ],
      value: [],
      freeText: "",
    },
    allergy: {
      freeText: "",
    },
    chief_complaint: [
      {
        id: "3",
        name: "fever",
        t_name: "ไข้",
        detail: [
          {
            name: "duration",
            question: "ผู้ป่วยมีอาการไข้มากี่วัน ?",
            options: [
              { id: 1, name: "acute", t_name: "<= 7 วัน" },
              { id: 2, name: "subacute", t_name: " 8 - 14 วัน" },
              { id: 3, name: "chronic", t_name: "> 14 วัน" },
            ],
            value: "1",
          },
        ],
        value: "0",
      },
      {
        id: "4",
        name: "cough",
        t_name: "ไอ",
        detail: [
          {
            name: "duration",
            question: "ผู้ป่วยมีอาการไอมากี่วัน ?",
            options: [
              { id: 1, name: "acute", t_name: "<= 14 วัน" },
              { id: 2, name: "chronic", t_name: "> 14 วัน" },
            ],
            value: "0",
          },
        ],
        value: "0",
      },
      {
        id: "1",
        name: "sore_throat",
        t_name: "เจ็บคอ",
        detail: [
          {
            name: "duration",
            question: "ผู้ป่วยมีอาการเจ็บมากี่วัน ?",
            options: [
              { id: 1, name: "acute", t_name: "<= 14 วัน" },
              { id: 2, name: "chronic", t_name: "> 14 วัน" },
            ],
            value: "0",
          },
        ],
        value: "0",
      },
      {
        id: "5",
        name: "dyspnea",
        t_name: "หายใจเหนื่อย",
        detail: [
          {
            name: "duration",
            question: "ผู้ป่วยมีอาการหายใจเหนื่อยมากี่วัน ?",
            options: [
              { id: 1, name: "acute", t_name: "<= 7 วัน" },
              { id: 2, name: "chronic", t_name: "> 7 วัน" },
            ],
            value: "0",
          },
        ],
        value: "0",
      },
      {
        id: "10",
        name: "abdominal_pain",
        t_name: "ปวดท้อง",
        detail: [
          {
            name: "duration",
            question: "ผู้ป่วยมีอาการปวดท้องมากี่วัน ?",
            options: [
              { id: 1, name: "acute", t_name: "<= 7 วัน" },
              { id: 2, name: "chronic", t_name: "> 7 วัน" },
            ],
            value: "0",
          },
          {
            name: "severity",
            question: "อาการปวดท้องรุนแรงเท่าไร ?",
            options: [
              { id: 1, name: "mild", t_name: "เล็กน้อย" },
              { id: 2, name: "mod", t_name: "ปานกลาง" },
              { id: 3, name: "severe", t_name: "มาก" },
            ],
            value: "0",
          },
          {
            name: "progression",
            question: "ตอนนี้อาการปวดเป็นอย่างไร ?",
            options: [
              { id: 1, name: "improving", t_name: "อาการปวดทุเลา" },
              { id: 2, name: "transient", t_name: "อาการปวดเป็นๆ หายๆ " },
              { id: 3, name: "non-progress", t_name: "อาการปวดเท่าเดิม" },
              { id: 4, name: "progressive", t_name: "อาการปวดมากขึ้น" },
            ],
            value: "0",
          },
        ],
        value: "0",
      },
      {
        id: "8",
        name: "diarrhea",
        t_name: "ท้องเสีย",
        detail: [
          {
            name: "duration",
            question: "ผู้ป่วยมีอาการท้องเสียมากี่วัน ?",
            options: [
              { id: 1, name: "acute", t_name: "<= 7 วัน" },
              { id: 2, name: "chronic", t_name: "> 7 วัน" },
            ],
            value: "0",
          },
          {
            name: "frequency",
            question: "จำนวนการถ่ายใน 1 วัน เป็นเท่าไร ?",
            options: [
              { id: 1, name: "mild", t_name: "< 5 ครั้ง" },
              { id: 2, name: "mod", t_name: "5 - 10 ครั้ง" },
              { id: 3, name: "severe", t_name: "> 10  ครั้ง" },
            ],
            value: "0",
          },
          {
            name: "with_mucus",
            question: "มีถ่ายปนมูกหรือไม่ไร ?",
            options: [
              { id: 1, name: "present", t_name: "ไม่มี" },
              { id: 2, name: "non-present", t_name: "มี" },
            ],
            value: "0",
          },
          {
            name: "with_blood",
            question: "มีถ่ายปนเลือดหรือไม่ ?",
            options: [
              { id: 1, name: "present", t_name: "ไม่มี" },
              { id: 2, name: "non-present", t_name: "มี" },
            ],
            value: "0",
          },
        ],
        value: "0",
      },
      {
        id: "0",
        name: "other",
        t_name: "อื่น ๆ",
        detail: [],
        value: "0",
        freeText: "",
      },
    ],
  },
};

export const login = createAsyncThunk("auth/login", async (input, thunkApi) => {
  try {
    const a = [];
    return a;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

const medicalTakingSlice = createSlice({
  name: "medicalTakingSlice",
  initialState,
  reducers: {
    ageEdited(state, action) {
      const { newValue } = action.payload;
      state.recorded.age.value = newValue;
    },
    genderEdited(state, action) {
      const { newValue } = action.payload;
      state.recorded.gender.value = newValue;
    },
    underlyingAdded(state, action) {
      const { newObj } = action.payload;
      const isExist = state.recorded.underlying.value.findIndex(
        (e) => e.id == newObj.id
      );
      if (isExist == -1) {
        state.recorded.underlying.value.push(newObj);
      } else {
        state.recorded.underlying.value.splice(isExist, 1);
      }
    },
    underlyingEdited(state, action) {
      const { newText } = action.payload;
      state.recorded.underlying.freeText = newText;
    },
    allergyEdited(state, action) {
      const { newText } = action.payload;
      state.recorded.allergy.freeText = newText;
    },
    CCDetailEdited(state, action) {
      const { ccId, detailIdx, value } = action.payload;
      const ccIndex = state.recorded.chief_complaint.findIndex(
        (obj) => obj.id == ccId
      );
      state.recorded.chief_complaint[ccIndex].detail[detailIdx].value = value;
    },
    CCEdited(state, action) {
      const { ccId } = action.payload;
      const arrayCC = state.recorded.chief_complaint;
      for (let i = 0; i < arrayCC.length; i++) {
        if (arrayCC[i].id == ccId) {
          arrayCC[i].value = "1";
        } else {
          arrayCC[i].value = "0";
          const arrayCCDetail = arrayCC[i].detail;
          for (let i = 0; i < arrayCCDetail.length; i++) {
            arrayCCDetail[i].value = 0;
          }
        }
        if (arrayCC[i].id == "0") {
          arrayCC[i].freeText = "";
        }
      }
    },
    CCOther(state) {
      const arrayCC = state.recorded.chief_complaint;
      for (let i = 0; i < arrayCC.length; i++) {
        if (arrayCC[i].id == "0") {
          arrayCC[i].value = "1";
        } else {
          arrayCC[i].value = "0";
          const arrayCCDetail = arrayCC[i].detail;
          for (let i = 0; i < arrayCCDetail.length; i++) {
            arrayCCDetail[i].value = 0;
          }
        }
      }
    },
    CCOtherFreeText(state, action) {
      const { newFreeText } = action.payload;
      const index = state.recorded.chief_complaint.findIndex(
        (obj) => obj.id == "0"
      );
      state.recorded.chief_complaint[index].freeText = newFreeText;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    }),
});

export const {
  ageEdited,
  genderEdited,
  underlyingAdded,
  underlyingEdited,
  allergyEdited,
  CCDetailEdited,
  CCEdited,
  CCOther,
  CCOtherFreeText,
} = medicalTakingSlice.actions;
export default medicalTakingSlice.reducer;
