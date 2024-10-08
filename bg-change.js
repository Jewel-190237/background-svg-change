import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1320px] mx-auto py-20 grid grid-cols-3 gap-4">
      <div className="py-20 transition duration-300 bg-white hover:bg-[#10B981] flex justify-center items-center border group">
        <Image className="transition duration-300 group-hover:brightness-0 group-hover:invert" src='/office/office.svg' width={80} height={80} alt='Image' />
      </div>
    </div>
  );
}
