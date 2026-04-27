const imgHeroActions = "https://www.figma.com/api/mcp/asset/b57a2ee9-c36c-4350-8db4-b4ba18b9e7c3";

export function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[var(--sds-size-space-800,32px)] items-center px-[var(--sds-size-space-600,24px)] py-[var(--sds-size-space-4000,160px)] relative shrink-0 w-full">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={imgHeroActions}
      />
      <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-[#f3f3f3] text-center">
        <p className="font-['Inter',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[72px] tracking-[-2.16px] w-full">
          Dev Recipes
        </p>
        <p className="font-['Inter',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[32px] w-full">
          Sustaining developers through the longest of hackathons
        </p>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[240px]">
        <button className="bg-[#e3e3e3] border border-[#767676] flex flex-[1_0_0] items-center justify-center overflow-clip p-[12px] rounded-[8px]">
          <p className="font-['Inter',sans-serif] font-normal leading-none text-[#1e1e1e] text-[16px] whitespace-nowrap">
            Explore
          </p>
        </button>
        <button className="bg-[#2c2c2c] border border-[#2c2c2c] flex flex-[1_0_0] items-center justify-center overflow-clip p-[12px] rounded-[8px]">
          <p className="font-['Inter',sans-serif] font-normal leading-none text-[#f5f5f5] text-[16px] whitespace-nowrap">
            Log in
          </p>
        </button>
      </div>
    </div>
  );
}