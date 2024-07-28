
Header.propTypes = {
  handleClick: () => {},
};

function Header({ handleClick }) {
  return (
    <div className="w-full h-8 bg-lime-500 rounded-t-md flex  justify-between p-1 px-3">
      <span className="font-bold">การซักประวัติเพื่อนัดหมายตรวจรักษา</span>
      <div
        className="text-red-700 bg-inherit cursor-pointer"
        onClick={handleClick}
      >
        x
      </div>
    </div>
  );
}

export default Header;
