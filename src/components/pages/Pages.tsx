import { useEffect } from "react";
import { Colors } from "../../common/Colors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAccounts } from "../../store/slices/accountsSlice";
import styles from "./Pages.module.css";

interface PagesProps {
  display: number;
  handleDisplay: (v: number) => void;
  page: number;
  handlePage: (p: number) => void;
}

const Pages = ({ display, handleDisplay, page, handlePage }: PagesProps) => {
  const { accounts } = useAppSelector((store) => store.accounts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAccounts());
  }, []);
  return (
    <div className={styles.outerConatiner}>
      <div className="flex items-center">
        <p
          className="font-medium text-xs mr-[23px]"
          style={{ color: Colors.primary }}
        >
          Show:
        </p>
        <div className="flex w-[90px] h-[37px] rounded-[39px] border-[1px] border-[#CFC0FF] items-center justify-around">
          <p className="text-[10px] font-[400] text-center">{`${display} rows`}</p>
          <div className="flex flex-col">
            <img
              src="/pages/up.png"
              alt="increase"
              className="w-[7px] mb-1 cursor-pointer"
              onClick={() => handleDisplay(1)}
            />
            <img
              src="/pages/down.png"
              alt="decrease"
              className="w-[7px] mt-1 cursor-pointer"
              onClick={() => handleDisplay(-1)}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src="/pages/left.png"
          alt="previous"
          className="w-[6-px] mr-[12px] cursor-pointer"
          onClick={() => handlePage(-1)}
        />
        <div className="flex items-center bg-white text-center h-[25px] w-[21px] border-[1px] border-[#EAEAEA] rounded-[4px] text-[10px] font-[400] mr-[9px]">
          <p className="flex items-center w-full justify-center h-full">
            {page}
          </p>
        </div>
        <p className="text-[#C9C9C9] font-[400] text-[10px] mr-[12px]">of</p>
        <p
          className="mr-[12px] font-[400] text-[10px]"
          style={{ color: Colors.primary }}
        >
          {Math.ceil(accounts.length / display)}
        </p>
        <img
          src="/pages/right.png"
          alt="next"
          className="w-[6-px] mr-[10px] cursor-pointer"
          onClick={() => handlePage(1)}
        />
      </div>
    </div>
  );
};

export default Pages;
