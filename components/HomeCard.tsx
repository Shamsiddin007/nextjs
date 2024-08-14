import { cn } from "@/lib/utils"
interface HomeCardProps{
    className: string,
    img:string, 
    title: string,
    description: string
    handleClick: ()=> void;
}

function HomeCard({className, img, title, description, handleClick}: HomeCardProps) {
  return (
    <div
      className={cn("bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer", className)}
      onClick={() => {}}
      
    >
      <div className="flex items-center justify-center glassmorphism size-12 rounded-[10px]">
        {img}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
}

export default HomeCard;
