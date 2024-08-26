import React from "react";

const ImageButton = () => {
  return (
    <>
      <div>
        <div
          className="w-auto h-[21px] p-[3px_12px] gap-[4px] rounded-[30px] text-[12px] font-light leading-[15.12px] tracking-[0.01em] flex justify-center items-center"
          style={{
            backgroundColor: "rgba(161, 12, 12, 0.05)",
            color: "rgba(161, 12, 12, 1)",
          }}
        >
          <div className="font-bold text-[25px] -mt-[10px] ">.</div>
          nicht lieferbar
        </div>
      </div>
      {/*  */}
      {/* <div>
        <div
          className="w-[50px] h-[21px] p-[3px_12px] gap-[4px] rounded-[30px] text-[12px] font-light leading-[15.12px] tracking-[0.01em] "
          style={{
            backgroundColor: "rgba(98, 195, 198, 0.1)",
            color: "rgba(17, 106, 108, 1)",
          }}
        >
          Neu
        </div>
      </div> */}
    </>
  );
};

export default ImageButton;
