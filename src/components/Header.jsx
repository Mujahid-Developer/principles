const Header = () => {
  return (
    <div>
      {/* Header Banner */}
      <div className="w-full my-2 px-3 lg:px-0">
        <div className="bg-white text-black min-h-[16rem] rounded-lg p-6  flex flex-col items-center justify-center">
          <h1 className="text-center font-bold text-2xl leading-tight">
            Take bold risks, don't care.
          </h1>
          <p className="font-bold text-lg mt-3">-Elon Musk</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
