/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { CCDetailEdited } from "../../slide/medicalTaking-slice";

function OptionInput({ ccId, detail, detailIdx }) {
  const nonActiveStyle =
    "rounded-xl min-w-[90px] bg-slate-400 px-4 m-2 cursor-pointer text-nowrap text-center";
  const activeStle =
    "rounded-xl min-w-[90px]  bg-green-400 px-4 m-2 cursor-pointer shadow-sm text-nowrap text-center ";
  const dispatch = useDispatch();

  const options = detail.options.map((option, optionIdx) => {
    return (
      <div
        key={optionIdx}
        id={option.id}
        className={detail.value == option.id ? activeStle : nonActiveStyle}
        onClick={(e) => {
          dispatch(CCDetailEdited({ ccId, detailIdx, value: e.target.id }));
        }}
      >
        {option.t_name}
      </div>
    );
  });
  return <div className=" flex  flex-wrap ">{options}</div>;
}

export default OptionInput;
