import Image from "next/image";

export function SkeletonCard() {
  return (
    <div className="relative flex h-[108px] w-[104px] flex-col rounded-lg bg-grayscale-white shadow-drop2dp">
      <div className="ml-auto mr-2 mt-1 h-3 w-[22px] animate-pulse rounded bg-[rgba(0,_0,_0,_0.6)]"></div>
      <div className="relative z-10 mx-auto h-[72px] w-[72px] animate-pulse">
        <Image
          src="/assets/notfound.svg"
          width={72}
          height={72}
          alt="Pokemon Not Found"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 flex h-[44px] w-full -translate-x-1/2 items-end justify-center rounded-lg bg-grayscale-background">
        <div className="mx-2 mb-1 h-3 w-full animate-pulse rounded bg-[rgba(0,_0,_0,_0.6)]"></div>
      </div>
    </div>
  );
}
