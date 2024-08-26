import React from "react";


const checkdata=[
    {text:"ADREXpharma"},
    {text:"Aurora"},
    {text:"Avaay"},
    {text:"Bedrocan"},
    {text:"Cannamedical"}
]

const FilterHellesterCard = () => {
  return (
    <div
      className="w-[250px] h-[290px] pb-[30px] flex flex-col gap-[20px] border-b-[1px]"
      style={{
        borderColor: "rgba(98, 195, 198, 0.3)",
      }}
    >
      <div className="flex items-center">
        <div className="w-[234px] h-[23px] flex justify-center text-[#365758]  ">
          <h3 className="font-semibold text-[18px] leading-[22.68px] flex items-center">
            Hersteller
          </h3>
        </div>
        <span>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.255743 12.4354L0.779844 12.9631C0.944789 13.1279 1.16424 13.2187 1.39878 13.2187C1.63318 13.2187 1.85289 13.1279 2.01784 12.9631L7.99642 6.98426L13.9819 12.9697C14.1466 13.1346 14.3663 13.2252 14.6007 13.2252C14.8351 13.2252 15.055 13.1346 15.2198 12.9697L15.744 12.4452C16.0853 12.1042 16.0853 11.5486 15.744 11.2075L8.61757 4.05545C8.45288 3.89077 8.23343 3.77474 7.99694 3.77474H7.99421C7.75967 3.77474 7.54022 3.8909 7.37554 4.05545L0.255743 11.1881C0.0907984 11.3528 0.000260353 11.5789 0 11.8133C0 12.0478 0.0907984 12.2708 0.255743 12.4354Z"
              fill="#62C3C6"
            />
          </svg>
        </span>
      </div>

      <div className="w-[250px] h-[164px] flex flex-col gap-[16px]" >
        {
            checkdata.map((item, index) => (
              <div
                key={index}
                className="w-[250px] h-[20px] flex gap-[10px]"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border border-[#62C3C6] "
                 
                />
                <div
                  className="h-[20px] font-normal text-[16px] leading-[20.16px] text-[#365758]"
                >
                  <p>{item.text}</p>
                </div>
              </div>
            ))
        }
      </div>

      <div>
        <button className="w-[250px] h-[33px] px-5 py-[7px] flex items-center justify-center gap-[10px] rounded-[24px_0px_24px_0px] border-2  border-[#ECFEAA] text-[14px] font-normal leading-[17.64px] tracking-[0.01em]">
            <p>mehr anzeigen</p>
        </button>
      </div>
    </div>
  );
};

export default FilterHellesterCard;
