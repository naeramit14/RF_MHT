import { Steps } from "antd";

Step.propTypes = {
  current: () => {},
};

function Step({ current }) {
  return (
    <>
      <Steps
        size="small"
        responsive={false}
        current={current}
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
      <hr />
    </>
  );
}

export default Step;
