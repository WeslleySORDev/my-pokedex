import Image from "next/image";

export function SkeletonCard() {
  return (
    <div className="px-6 py-4 bg-[rgba(0,_0,_0,_0.10)] rounded-3xl flex gap-2 w-full max-w-[375px]">
      <div className="relative w-[55px] h-[68px] mr-6 bg-[rgba(0,_0,_0,_0.6)] rounded-md animate-pulse"></div>
      <div className="flex flex-col gap-2 flex-1 items-start w-full">
        <div className="w-16 h-4 rounded-md bg-[rgba(0,_0,_0,_0.6)] animate-pulse"></div>
        <div className="w-9 h-4 rounded-md bg-[rgba(0,_0,_0,_0.6)] animate-pulse"></div>
      </div>
      <div className="flex gap-1 items-center">
        <div className="w-16 h-7 rounded-md bg-[rgba(0,_0,_0,_0.6)] animate-pulse"></div>
        <div className="w-16 h-7 rounded-md bg-[rgba(0,_0,_0,_0.6)] animate-pulse"></div>
      </div>
    </div>
  );
}
