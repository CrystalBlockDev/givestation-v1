import React from "react";
import LikeCampImg from "./assets/likeCampImg.svg";
import Kemono from "./assets/Kemono.svg";
import { useParams } from "react-router";
import UserFooter from "../../components/user/UserFooter";

export default function Donations() {
  const {id} = useParams();
  return (
    <div className="py-20 px-10 wholeWrapper">
      <div className="flex items-center pageHead">
        <h1 className="text-slate-900 dark:text-white font-bold overview">Donations</h1>
          <div className="accountNo ml-7" style={{textAlign:"center"}}>
            {id && <h2>{id.toString().substring(0, 6)+"..."+id.toString().substring(38, 42)}</h2>}
        </div>
      </div>

      <div className="mt-14 flex justify-center items-center flex-col">
        <div className="flex likeCard">
          <div className="flex w-3/4 likeDesc">
            <img src={LikeCampImg} alt="" />

            <div className="likeCardDetail w-1/2">
              <h6 className="flex">
                SpinSamurai{" "}
                <img src={Kemono} alt="" style={{ marginLeft: 5 }} />
              </h6>
              <p>
                225% up to AU$ 5,000 jhgfjjhghjkkkhgj jhjkkkkhhkjhjkljhjklk
                hjkljhjlljkhklljklljklljk
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-1/4 likeBtns">
            <div className="donationPrice">$1125</div>
            <a href="#">
              <h4>view campaign</h4>
            </a>
          </div>
        </div>
      </div>
      <UserFooter/>
    </div>
  );
}
