/* eslint-disable react/prop-types */
import { Modal, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  PIPresent,
  PICancel,
  getNewQuestion,
} from "../../../slide/medicalTaking-slice";
import OptionInput from "./OptionInput";

function PIModal({ isModalOpen, setIsModalOpen, piId }) {
  const selectedPI = useSelector((state) => {
    const pi = state.medicalTaking.recorded.patient_illness;
    return pi.find((obj) => obj.id == piId);
  });
  const recorded = useSelector((state) => state.medicalTaking.recorded);

  const dispatch = useDispatch();

  const handleOkDown = () => {
    dispatch(PIPresent({ piId: piId }));
  };

  const handleOkUp = () => {
    dispatch(getNewQuestion(recorded));
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    dispatch(PICancel({ piId: piId }));
    setIsModalOpen(false);
  };

  const detailQuestion = selectedPI.detail.map((detail, detailIdx) => {
    return (
      <div key={detailIdx}>
        <p>{detail.question}</p>
        <OptionInput piId={piId} detail={detail} detailIdx={detailIdx} />
      </div>
    );
  });

  return (
    <Modal
      title="รายละเอียดเพิ่มเติม"
      open={isModalOpen}
      onCancel={handleCancel}
      className="overflow-y-auto"
      style={{
        top: "30%",
      }}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancle
        </Button>,
        <Button
          key="ok"
          type="primary"
          onMouseDown={handleOkDown}
          onMouseUp={handleOkUp}
        >
          OK
        </Button>,
      ]}
    >
      {detailQuestion}
    </Modal>
  );
}

export default PIModal;
