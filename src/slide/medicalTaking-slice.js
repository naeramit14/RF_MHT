import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as medicalTakingService from "../api/medicalTaking-api";

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
        id: 3,
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
            value: 0,
          },
        ],
        value: 0,
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
            value: 0,
          },
        ],
        value: 0,
      },
      {
        id: 1,
        name: "sore_throat",
        t_name: "เจ็บคอ",
        detail: [
          {
            name: "duration",
            question: "ผู้ป่วยมีอาการเจ็บคอมากี่วัน ?",
            options: [
              {
                id: 1,
                name: "acute",
                t_name: "<= 14 วัน",
              },
              {
                id: 2,
                name: "chronic",
                t_name: "> 14 วัน",
              },
            ],
            value: 0,
          },
          {
            name: "severity",
            question: "อาการเจ็บคอมากเท่าไร ?",
            options: [
              {
                id: 1,
                name: "mild",
                t_name: "เล็กน้อย",
              },
              {
                id: 2,
                name: "mod",
                t_name: "ปานกลาง",
              },
              {
                id: 3,
                name: "severe",
                t_name: "รุนแรง",
              },
            ],
            value: 0,
          },
          {
            name: "progression",
            question: "ตอนนี้อาการเจ็บคอเป็นอย่างไร ?",
            options: [
              {
                id: 1,
                name: "improving",
                t_name: "อาการเจ็บทุเลา",
              },
              {
                id: 2,
                name: "transient",
                t_name: "อาการเจ็บเป็นๆ หายๆ ",
              },
              {
                id: 3,
                name: "non-progress",
                t_name: "อาการเจ็บเท่าเดิม",
              },
              {
                id: 4,
                name: "progressive",
                t_name: "อาการเจ็บมากขึ้น",
              },
            ],
            value: 0,
          },
        ],
        value: 0,
      },
      {
        id: 5,
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
            value: 0,
          },
        ],
        value: 0,
      },
      {
        id: 10,
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
            value: 0,
          },
          {
            name: "severity",
            question: "อาการปวดท้องรุนแรงเท่าไร ?",
            options: [
              { id: 1, name: "mild", t_name: "เล็กน้อย" },
              { id: 2, name: "mod", t_name: "ปานกลาง" },
              { id: 3, name: "severe", t_name: "มาก" },
            ],
            value: 0,
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
            value: 0,
          },
        ],
        value: 0,
      },
      {
        id: 8,
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
            value: 0,
          },
          {
            name: "frequency",
            question: "จำนวนการถ่ายใน 1 วัน เป็นเท่าไร ?",
            options: [
              { id: 1, name: "mild", t_name: "< 5 ครั้ง" },
              { id: 2, name: "mod", t_name: "5 - 10 ครั้ง" },
              { id: 3, name: "severe", t_name: "> 10  ครั้ง" },
            ],
            value: 0,
          },
          {
            name: "with_mucus",
            question: "มีถ่ายปนมูกหรือไม่ ?",
            options: [
              { id: 1, name: "absent", t_name: "ไม่มี" },
              { id: 2, name: "present", t_name: "มี" },
            ],
            value: 0,
          },
          {
            name: "with_blood",
            question: "มีถ่ายปนเลือดหรือไม่ ?",
            options: [
              { id: 1, name: "absent", t_name: "ไม่มี" },
              { id: 2, name: "present", t_name: "มี" },
            ],
            value: 0,
          },
        ],
        value: 0,
      },
      {
        id: 0,
        name: "other",
        t_name: "อื่น ๆ",
        detail: [],
        value: 0,
        freeText: "",
      },
    ],
    patient_illness: [],
  },
  probable_disease: [],
};

export const getNewQuestion = createAsyncThunk(
  "medicalTaking/getNewQuestion",
  async (input, thunkApi) => {
    try {
      const payload = {
        ph_ud: [],
        pd: [
          { id: 1, value: 0 },
          { id: 2, value: 0 },
        ],
        cc: [],
        pi_p: [],
        pi_n: [],
      };
      payload.ph_ud = input.underlying.value;
      payload.pd[0].value = input.gender.value;
      payload.pd[1].value = input.age.value;

      const ccIdx = input.chief_complaint.findIndex((cc) => cc.value == 1);
      const Selectedcc = input.chief_complaint[ccIdx];
      const tempCC = { id: Selectedcc.id };
      for (let i = 0; i < Selectedcc.detail.length; i++) {
        tempCC[Selectedcc.detail[i].name] = Selectedcc.detail[i].value;
      }
      payload.cc = [tempCC];

      const PI = input.patient_illness;
      for (let i = 0; i < PI.length; i++) {
        if (PI[i].value == 1) {
          payload.pi_n.push({ id: PI[i].id });
        }
        if (PI[i].value == 2) {
          const tempPI = { id: PI[i].id };
          for (let j = 0; j < PI[i].detail.length; j++) {
            tempPI[PI[i].detail[j].name] = PI[i].detail[j].value;
          }
          payload.pi_p.push(tempPI);
        }
      }

      const res = await medicalTakingService.getNewQuestion(payload);
      const newQuestion = res.data;
      return newQuestion;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getProbableDisease = createAsyncThunk(
  "medicalTaking/getProbableDisease",
  async (input, thunkApi) => {
    try {
      const payload = {
        ph_ud: [],
        pd: [
          { id: 1, value: 0 },
          { id: 2, value: 0 },
        ],
        cc: [],
        pi_p: [],
        pi_n: [],
      };
      payload.ph_ud = input.underlying.value;
      payload.pd[0].value = input.gender.value;
      payload.pd[1].value = input.age.value;

      const ccIdx = input.chief_complaint.findIndex((cc) => cc.value == 1);
      const Selectedcc = input.chief_complaint[ccIdx];
      const tempCC = { id: Selectedcc.id };
      for (let i = 0; i < Selectedcc.detail.length; i++) {
        tempCC[Selectedcc.detail[i].name] = Selectedcc.detail[i].value;
      }
      payload.cc = [tempCC];

      const PI = input.patient_illness;
      for (let i = 0; i < PI.length; i++) {
        if (PI[i].value == 1) {
          payload.pi_n.push({ id: PI[i].id });
        }
        if (PI[i].value == 2) {
          const tempPI = { id: PI[i].id };
          for (let j = 0; j < PI[i].detail.length; j++) {
            tempPI[PI[i].detail[j].name] = PI[i].detail[j].value;
          }
          payload.pi_p.push(tempPI);
        }
      }

      const res = await medicalTakingService.getProbableDisease(payload);
      const probableDisease = res.data;
      return probableDisease;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const medicalTakingSlice = createSlice({
  name: "medicalTakingSlice",
  initialState,
  reducers: {
    ageEdited(state, action) {
      const { newValue } = action.payload;
      state.recorded.age.value = +newValue;
    },
    genderEdited(state, action) {
      const { newValue } = action.payload;
      state.recorded.gender.value = +newValue;
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
      state.recorded.chief_complaint[ccIndex].detail[detailIdx].value = +value;
    },
    CCEdited(state, action) {
      const { ccId } = action.payload;
      const arrayCC = state.recorded.chief_complaint;
      for (let i = 0; i < arrayCC.length; i++) {
        if (arrayCC[i].id == ccId) {
          arrayCC[i].value = 1;
        } else {
          arrayCC[i].value = 0;
          const arrayCCDetail = arrayCC[i].detail;
          for (let i = 0; i < arrayCCDetail.length; i++) {
            arrayCCDetail[i].value = 0;
          }
        }
        if (arrayCC[i].id == 0) {
          arrayCC[i].freeText = "";
        }
      }
    },
    CCOther(state) {
      const arrayCC = state.recorded.chief_complaint;
      for (let i = 0; i < arrayCC.length; i++) {
        if (arrayCC[i].id == 0) {
          arrayCC[i].value = 1;
        } else {
          arrayCC[i].value = 0;
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
        (obj) => obj.id == 0
      );
      state.recorded.chief_complaint[index].freeText = newFreeText;
    },
    CCCancel(state, action) {
      const { ccId } = action.payload;
      const arrayCC = state.recorded.chief_complaint;
      const index = arrayCC.findIndex((obj) => obj.id == ccId);
      const arrayCCDetail = arrayCC[index].detail;
      for (let i = 0; i < arrayCCDetail.length; i++) {
        arrayCCDetail[i].value = 0;
      }
      if (ccId == 0) {
        arrayCC[index].freeText = "";
      }
    },
    PIAbsent(state, action) {
      const { piIdx } = action.payload;
      const arrayPI = state.recorded.patient_illness;
      arrayPI[piIdx].value = 1;
      const arrayPIDetail = arrayPI[piIdx].detail;
      for (let i = 0; i < arrayPIDetail.length; i++) {
        arrayPIDetail[i].value = 0;
      }
    },
    PIPresent(state, action) {
      const { piId } = action.payload;
      const piIdx = state.recorded.patient_illness.findIndex(
        (obj) => obj.id == piId
      );
      const arrayPI = state.recorded.patient_illness;
      arrayPI[piIdx].value = 2;
    },
    PIDetailEdited(state, action) {
      const { piId, detailIdx, value } = action.payload;
      const piIndex = state.recorded.patient_illness.findIndex(
        (obj) => obj.id == piId
      );
      state.recorded.patient_illness[piIndex].detail[detailIdx].value = +value;
    },
    PICancel(state, action) {
      const { piId } = action.payload;
      const piIndex = state.recorded.patient_illness.findIndex(
        (obj) => obj.id == piId
      );
      const arrayPI = state.recorded.patient_illness;
      const arrayPIDetail = arrayPI[piIndex].detail;
      for (let i = 0; i < arrayPIDetail.length; i++) {
        arrayPIDetail[i].value = 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNewQuestion.fulfilled, (state, action) => {
      const index = state.recorded.patient_illness.findIndex(
        (obj) => obj.id == action.payload[0]?.id
      );
      if ((index == -1) & (action.payload.length > 0)) {
        state.recorded.patient_illness.push(action.payload[0]);
      }
      if (action.payload.length == 0) {
        const indexZero = state.recorded.patient_illness.findIndex(
          (obj) => obj.id == 0
        );
        if (indexZero == -1) {
          state.recorded.patient_illness.push({ id: 0 });
        }
      }
    });
    builder.addCase(getProbableDisease.fulfilled, (state, action) => {
      state.probable_disease = action.payload;
    });
  },
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
  CCCancel,
  PIAbsent,
  PIPresent,
  PIDetailEdited,
  PICancel,
} = medicalTakingSlice.actions;
export default medicalTakingSlice.reducer;
