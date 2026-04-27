const imgFigma = "https://www.figma.com/api/mcp/asset/6d246fbf-421b-4ebc-a9b3-a23c8061dfd1";

export function Navbar() {
  return (
    <div className="bg-[var(--sds-color-background-default-default,white)] border-[var(--sds-color-border-default-default,#d9d9d9)] border-b-[length:var(--sds-size-stroke-border,1px)] border-solid content-center flex flex-wrap gap-[var(--sds-size-space-600,0px_24px)] items-center overflow-clip p-[var(--sds-size-space-800,32px)] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <div className="h-[35px] relative shrink-0 w-[40px]">
          <div className="absolute inset-[-5%_0]">
            <img alt="Figma logo" className="block max-w-none size-full" src={imgFigma} />
          </div>
        </div>
      </div>
      <div className="content-center flex flex-[1_0_0] flex-wrap gap-[var(--sds-size-space-200,8px)] items-center justify-end min-w-px relative">
        {["Recipes", "Ingredients", "Discover"].map((item) => (
          <div key={item} className="content-stretch flex gap-[var(--sds-size-space-200,0px)] items-center justify-center p-[var(--sds-size-space-200,8px)] relative rounded-[var(--sds-size-radius-200,8px)] shrink-0">
            <p className="font-['Inter',sans-serif] font-normal leading-none relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="content-stretch flex gap-[var(--sds-size-space-300,12px)] items-center relative shrink-0 w-[178px]">
        <button className="bg-[#e3e3e3] border border-[#767676] flex flex-[1_0_0] items-center justify-center overflow-clip p-[8px] rounded-[8px]">
          <p className="font-['Inter',sans-serif] font-normal leading-none text-[#1e1e1e] text-[16px] whitespace-nowrap">Log in</p>
        </button>
        <button className="bg-[#2c2c2c] border border-[#2c2c2c] flex flex-[1_0_0] items-center justify-center overflow-clip p-[8px] rounded-[8px]">
          <p className="font-['Inter',sans-serif] font-normal leading-none text-[#f5f5f5] text-[16px] whitespace-nowrap">Register</p>
        </button>
      </div>
    </div>
  );
}