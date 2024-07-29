import { Steps } from "antd";

Step.propTypes = {
  current: () => {},
  handleOnchange: () => {},
};

function Step({ current, handleOnchange }) {
  return (
    <>
      <Steps
        size="small"
        current={current}
        onChange={handleOnchange}
        className="mb-2"
        items={[
          {
            title: "",
          },
          {
            title: "",
          },
          {
            title: "",
          },
          {
            title: "",
          },
        ]}
      />
      <hr/>
    </>
  );
}

export default Step;
