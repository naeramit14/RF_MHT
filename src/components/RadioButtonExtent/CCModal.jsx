/* eslint-disable react/prop-types */
import { Modal, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import OptionInput from "./OptionInput";
import {
  CCEdited,
  CCOther,
  CCOtherFreeText,
  CCCancel,
} from "../../slide/medicalTaking-slice";

function CCModal({ isModalOpen, setIsModalOpen, ccId }) {
  const selectedCC = useSelector((state) => {
    const cc = state.medicalTaking.recorded.chief_complaint;
    return cc.find((obj) => obj.id == ccId);
  });

  const dispatch = useDispatch();
  const { TextArea } = Input;

  const handleOk = () => {
    setIsModalOpen(false);
    if (ccId != "0") {
      dispatch(CCEdited({ ccId }));
    } else {
      dispatch(CCOther());
    }
  };
  const handleCancel = () => {
    dispatch(CCCancel({ ccId }));
    setIsModalOpen(false);
  };
  const handleOnChange = (e) => {
    dispatch(CCOtherFreeText({ newFreeText: e.target.value }));
  };

  const detailQuestion = selectedCC.detail.map((detail, detailIdx) => {
    return (
      <div key={detailIdx}>
        <p>{detail.question}</p>
        <OptionInput ccId={ccId} detail={detail} detailIdx={detailIdx} />
      </div>
    );
  });

  return (
    <Modal
      title="รายละเอียดเพิ่มเติม"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      className="overflow-y-auto"
      style={{
        top: "30%",
      }}
    >
      {ccId != "0" ? (
        detailQuestion
      ) : (
        <TextArea
          rows={2}
          maxLength={50}
          className="mx-2"
          onChange={handleOnChange}
          value={selectedCC.freeText}
        />
      )}
    </Modal>
  );
}

export default CCModal;
