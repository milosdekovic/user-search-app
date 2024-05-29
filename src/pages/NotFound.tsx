import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-2xl text-orange-500 flex justify-center">
        Whoops! User doesn't exist. Please try again!
      </h1>
      <div className="text-xl flex justify-center mt-5 gap-2 items-center">
        <Link
          to={"/"}
          className="text-[#69aefc] flex items-center gap-1 hover:underline"
        >
          <div>
            <IconArrowLeft />
          </div>
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
