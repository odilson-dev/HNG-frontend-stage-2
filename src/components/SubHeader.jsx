export default function SubHeader() {
  return (
    <>
      <div className=" hidden md:flex gap-5 justify-between px-20 py-6 text-lg font-medium text-center text-gray-500 border-b border-gray-500 border-solid max-md:flex-wrap max-md:px-5">
        <div className="text-slate-800">Airpods</div>
        <div>Powerbanks</div>
        <div>Phonecase</div>
        <div>Chargers</div>
        <div className="max-md:max-w-full">Protective screens</div>
      </div>
      <div className="md:hidden flex flex-col font-medium text-center max-w-[121px] text-slate-800">
        <div className="flex gap-1 px-5 text-lg whitespace-nowrap">
          <div>Airpods</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9a0343d53318ab6d0cf976032d9b895d0ea253f9e91f7ebe2434a137e2765db?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
        </div>
      </div>
    </>
  );
}
