interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  showButton?: boolean;
  horizontal?: boolean;
}

export function RecipeCard({ title, description, image, showButton = false, horizontal = false }: RecipeCardProps) {
  return (
    <div className={`bg-white border border-[#d9d9d9] flex flex-wrap gap-[24px] items-start p-[24px] rounded-[8px] ${horizontal ? 'w-full' : 'flex-[1_0_0] min-w-[240px]'}`}>
      <div className={`relative rounded-[11px] ${horizontal ? 'shrink-0 size-[160px]' : 'flex-[1_0_0] h-[160px] min-w-[160px]'}`}>
        <img
          alt={title}
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11px] size-full"
          src={image}
        />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[160px] relative">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter',sans-serif] font-semibold leading-[1.2] text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">
            {title}
          </p>
          <p className="font-['Inter',sans-serif] font-normal leading-[1.4] text-[#757575] text-[16px] w-full">
            {description}
          </p>
        </div>
        {showButton && (
          <button className="bg-[#e3e3e3] border border-[#767676] flex items-center justify-center overflow-clip p-[12px] rounded-[8px]">
            <p className="font-['Inter',sans-serif] font-normal leading-none text-[#1e1e1e] text-[16px] whitespace-nowrap">
              Button
            </p>
          </button>
        )}
      </div>
    </div>
  );
}