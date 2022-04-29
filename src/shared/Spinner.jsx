import Loader from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="flex justify-center w-full my-20">
      <img className="w-12" src={Loader} alt="Loading..." />
    </div>
  );
};

export default Spinner;
