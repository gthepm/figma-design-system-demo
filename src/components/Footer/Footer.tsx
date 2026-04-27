const imgFigma1 = "https://www.figma.com/api/mcp/asset/b9111cce-f576-4af3-b47e-1067ed4b281c";
const imgXLogo = "https://www.figma.com/api/mcp/asset/e84f996b-0284-4bed-8d8a-9124d000d467";
const imgLogoInstagram = "https://www.figma.com/api/mcp/asset/69e3addd-9171-4b78-8503-683bf8e178cb";
const imgLogoYouTube = "https://www.figma.com/api/mcp/asset/da1b7044-e66b-4b62-b634-4ed984e391ad";
const imgLinkedIn = "https://www.figma.com/api/mcp/asset/4599a7cb-c891-4e65-a7d7-c0e8a5037481";

const recipeLinks = ["Breakfast", "Brunch", "Lunch", "Dinner", "Soups", "Sandwiches", "All recipes"];
const ingredientLinks = ["Chicken", "Beef", "Pork", "Seafood", "Pasta", "Vegetables", "All ingredients"];
const devRecipesLinks = ["About", "Best practices", "Methods"];

export function Footer() {
  return (
    <div className="bg-white border-t border-[#d9d9d9] content-start flex flex-wrap gap-[16px] items-start overflow-clip pb-[160px] pt-[32px] px-[32px] relative shrink-0 w-full">
      
      {/* Logo + Social */}
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[262px]">
        <div className="h-[35px] relative shrink-0 w-[24px]">
          <img alt="Figma logo" className="absolute block inset-0 max-w-none size-full" src={imgFigma1} />
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          {[imgXLogo, imgLogoInstagram, imgLogoYouTube, imgLinkedIn].map((src, i) => (
            <div key={i} className="relative shrink-0 size-[24px]">
              <img alt="social icon" className="absolute block inset-0 max-w-none size-full" src={src} />
            </div>
          ))}
        </div>
      </div>

      {/* Recipes Links */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[262px]">
        <p className="font-['Inter',sans-serif] font-semibold leading-[1.4] text-[#1e1e1e] text-[16px]">Recipes</p>
        {recipeLinks.map((link) => (
          <p key={link} className="font-['Inter',sans-serif] font-normal leading-[1.4] text-[#1e1e1e] text-[16px]">{link}</p>
        ))}
      </div>

      {/* Ingredients Links */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[262px]">
        <p className="font-['Inter',sans-serif] font-semibold leading-[1.4] text-[#1e1e1e] text-[16px]">Ingredients</p>
        {ingredientLinks.map((link) => (
          <p key={link} className="font-['Inter',sans-serif] font-normal leading-[1.4] text-[#1e1e1e] text-[16px]">{link}</p>
        ))}
      </div>

      {/* Dev Recipes Links */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[262px]">
        <p className="font-['Inter',sans-serif] font-semibold leading-[1.4] text-[#1e1e1e] text-[16px]">Dev Recipes</p>
        {devRecipesLinks.map((link) => (
          <p key={link} className="font-['Inter',sans-serif] font-normal leading-[1.4] text-[#1e1e1e] text-[16px]">{link}</p>
        ))}
      </div>

    </div>
  );
}