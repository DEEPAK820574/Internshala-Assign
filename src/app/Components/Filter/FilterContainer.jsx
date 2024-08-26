import React from "react";
import FilterRange from "../Ui/FilterRange";
import FilterHellesterCard from "../Ui/cards/FilterHellesterCard";
const FilterContainer = () => {
  return (
    <div class="w-[250px] h-[1322px]  absolute top-[404px] left-[310px] flex flex-col gap-[20px] ">
      <div
        class="w-[250px] h-[34px] pt-[2px] pr-[10px] pb-[2px] pl-[10px] gap-[10px] rounded-[4px]  "
        style={{
          backgroundColor: "rgba(98, 195, 198, 0.1)",
        }}
      >
        <p className="text-[24px] font-semibold leading-[30.24px] tracking-[0.01em] text-[#045A5C] text-center">
          Filter
        </p>
      </div>

      {/*  */}
      <div class="w-[250px] h-[1268px] pt-[24px] pr-[0px] pb-[24px] pl-[0px]  flex flex-col gap-[40px] ">
        <FilterRange initialMin="5" initialMax="10" title="Preis" symbol=" €" />
        <FilterHellesterCard />
        <FilterRange
          initialMin="11"
          initialMax="18"
          title="THC Gehalt"
          symbol="%"
        />
        <FilterRange
          initialMin="1"
          initialMax="5"
          title="CBD Gehalt"
          symbol="%"
        />
        {/*  */}
        <div>
          <div
            className="w-[250px] h-[101px] flex flex-col gap-[20px] px-0 pb-[30px] pt-0  border-b-[1px]"
            style={{
              borderColor: "rgba(98, 195, 198, 0.3)",
            }}
          >
            <div className="text-[18px] font-semibold leading-[22.68px] text-[#365758] text-center">
              <h3>CBD Gehalt</h3>
            </div>
            <div className="w-[250px] h-[28px] gap-[4px] flex">
              <button className="w-[80.67px] h-[28px] p-[4px_10px] gap-[10px] rounded-[4px] bg-[#62C3C6] text-[16px] font-normal leading-[20.16px] text-[#FCFCFA]">
                Indica
              </button>
              <button
                className="w-[80.67px] h-[28px] p-[4px_10px] gap-[10px] rounded-[4px] text-[16px] font-normal leading-[20.16px] text-[#045A5C]"
                style={{
                  backgroundColor: "rgba(98, 195, 198, 0.3)",
                }}
              >
                Sativa
              </button>
              <button
                className="w-[80.67px] h-[28px] p-[4px_10px] gap-[10px] rounded-[4px]  text-[16px] font-normal leading-[20.16px] text-[#045A5C]"
                style={{
                  backgroundColor: "rgba(98, 195, 198, 0.3)",
                }}
              >
                Hybrid
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div
            className="w-[250px] h-[101px] pb-[30px] gap-[20px] border-b-[1px] flex flex-col"
            style={{ borderColor: "rgba(98, 195, 198, 0.3)" }}
          >
            <div className="w-[250px] h-[23px] gap-[20px]">
              <h3 className="text-[18px] font-semibold leading-[22.68px] text-center text-[#365758]">
                Bestrahltung
              </h3>
            </div>
            <div className="flex gap-[4x] justify-between">
              <button className="w-[106px] h-[28px] p-[4px_10px] gap-[10px]  rounded-[4px] text-[16px] font-normal leading-[20.16px] bg-[#62C3C6] text-[#FCFCFA]">
                bestrahlt
              </button>
              <button
                className="w-[140px] h-[28px] p-[4px_10px] gap-[10px]  rounded-[4px] text-[16px] font-normal leading-[20.16px] text-[#045A5C]"
                style={{ backgroundColor: "rgba(98, 195, 198, 0.3)" }}
              >
                nicht bestrahlt
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div
            className="w-[250px] h-[53px] pb-[30px] flex border-b-[1px]"
            style={{
              borderColor: "rgba(98, 195, 198, 0.3)",
            }}
          >
            <div className="w-[234px] h-[23px] flex justify-center text-[#365758]  ">
              <h3 className="font-semibold text-[18px] leading-[22.68px] flex items-center">
                Terpene
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
                  d="M15.7443 4.56461L15.2202 4.03687C15.0552 3.87205 14.8358 3.78125 14.6012 3.78125C14.3668 3.78125 14.1471 3.87205 13.9822 4.03687L8.00358 10.0157L2.0181 4.03023C1.85341 3.86542 1.6337 3.77475 1.3993 3.77475C1.16489 3.77475 0.945048 3.86542 0.780234 4.03023L0.256002 4.55472C-0.085334 4.8958 -0.085334 5.45138 0.256002 5.79246L7.38243 12.9445C7.54712 13.1092 7.76657 13.2252 8.00306 13.2252H8.00579C8.24033 13.2252 8.45978 13.1091 8.62446 12.9445L15.7443 5.81184C15.9092 5.64716 15.9997 5.42107 16 5.18666C16 4.95213 15.9092 4.72916 15.7443 4.56461Z"
                  fill="#62C3C6"
                />
              </svg>
            </span>
          </div>
        </div>
        {/*  */}
        <div className="w-[250px] h-[20px] flex items-center justify-center gap-[4px]">
            <span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.59415 9.14712C1.24653 9.49474 1.24653 10.0583 1.59415 10.406C1.94177 10.7536 2.50537 10.7536 2.85299 10.406L6.00013 7.25883L9.14726 10.406C9.49488 10.7536 10.0585 10.7536 10.4061 10.406C10.7537 10.0583 10.7537 9.49474 10.4061 9.14712L7.25897 5.99998L10.4061 2.8529C10.7537 2.50528 10.7537 1.94168 10.4061 1.59406C10.0584 1.24644 9.49483 1.24644 9.14721 1.59406L6.00013 4.74114L2.85305 1.59406C2.50543 1.24644 1.94182 1.24644 1.5942 1.59406C1.24658 1.94168 1.24658 2.50528 1.5942 2.8529L4.74129 5.99998L1.59415 9.14712Z" fill="#28E3E9"/>
</svg>
</span>
             <p className="font-normal text-[16px] leading-[20.16px] text-[#0D0D0D]">alle Filter zurücksetzen</p>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
