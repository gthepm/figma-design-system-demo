import { RecipeCard } from '../RecipeCard/RecipeCard';

const imgImage = "https://www.figma.com/api/mcp/asset/6d47fb69-a7ff-4501-87ff-77f67b98b328";
const imgImage1 = "https://www.figma.com/api/mcp/asset/25d05250-6c6f-434a-86b2-8799d408a2ba";
const imgImage2 = "https://www.figma.com/api/mcp/asset/0fa1d600-50d7-4cfb-9572-144ff7ee174c";
const imgImage3 = "https://www.figma.com/api/mcp/asset/94d2374d-1f27-43ea-a9c8-8f03b97cad5c";
const imgImage4 = "https://www.figma.com/api/mcp/asset/22de37e6-2262-4e5f-b71e-00cd269bffd9";
const imgImage5 = "https://www.figma.com/api/mcp/asset/bc3e282a-1e21-4395-b8e6-1d7a979cac13";
const imgImage6 = "https://www.figma.com/api/mcp/asset/e751e115-da99-4bf8-bd96-1bc7b98c4269";

const popularRecipes = [
  { title: "Dev Waffles", description: "Perfect to eat while coding on a hot summer day.", image: imgImage },
  { title: "Donuts", description: "C++? More like A++. These donuts will fuel your week.", image: imgImage1 },
  { title: "Tasty Italian pasta", description: "Make to sustain 10x developers through long hackathon nights.", image: imgImage2 },
  { title: "DevBurger", description: "Suitable for solving the hardest bugs, one bite of this you find your solution.", image: imgImage3 },
  { title: "Stacktrace of pancakes", description: "Fill up before that long debugging session.", image: imgImage4 },
  { title: "Cupcakes", description: "You earned yourself one for every bug you fixed this week.", image: imgImage5 },
];

const suggestedRecipes = [
  { title: "Dev Waffles", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.", image: imgImage },
  { title: "Pepperoni Pizza", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.", image: imgImage6 },
  { title: "Tasty Italian pasta", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.", image: imgImage2 },
];

export function RecipeGrid() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-start p-[64px] relative shrink-0 w-full">
      
      {/* Popular Recipes */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        <p className="font-['Inter',sans-serif] font-semibold leading-[1.2] text-[#1e1e1e] text-[24px] tracking-[-0.48px]">
          Popular recipes
        </p>
        <p className="font-['Inter',sans-serif] font-normal leading-[1.2] text-[#757575] text-[20px]">
          Subheading
        </p>
      </div>
      <div className="flex flex-wrap gap-x-[48px] items-center relative shrink-0 w-full">
        {popularRecipes.map((recipe) => (
          <RecipeCard key={recipe.title} {...recipe} />
        ))}
      </div>

      {/* Suggested Recipes */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        <p className="font-['Inter',sans-serif] font-semibold leading-[1.2] text-[#1e1e1e] text-[24px] tracking-[-0.48px]">
          Suggested recipes
        </p>
        <p className="font-['Inter',sans-serif] font-normal leading-[1.2] text-[#757575] text-[20px]">
          Subheading
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        {suggestedRecipes.map((recipe) => (
          <RecipeCard key={recipe.title} {...recipe} showButton horizontal />
        ))}
      </div>

    </div>
  );
}