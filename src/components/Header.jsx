import SubHeader from "./SubHeader";

export default function Header() {
  return (
    <>
      <div className="flex gap-0   items-center px-20 py-6 w-full border-b border-gray-500 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-center items-start self-stretch my-auto text-base md:text-3xl font-bold text-black whitespace-nowrap">
          <div className="flex gap-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a14039f8c1bcad16b506141ba6c944fd9e665b8e349be125600911f16cee47e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
              className="shrink-0 my-auto w-7 aspect-square"
            />
            <div>ShopNow</div>
          </div>
        </div>
        <div className="md:flex flex-1 gap-2 self-stretch p-3 text-lg font-medium text-gray-500 bg-white rounded-xl hidden">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8492cfded6401becf2806eff0681b0569808959177355b26466c11aef2f8ac30?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="my-auto">Search </div>
        </div>
        <div className="md:flex hidden flex-1 gap-5 self-stretch pl-20 my-auto">
          <div className="flex gap-1 self-start text-lg font-medium whitespace-nowrap text-slate-800">
            <div>EN</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcc4b1a0b0423d4c0bb57ab2fe749ec3ae923c43c00f76ea41120bdc39b12dcf?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/96b0d0b2cb4dfbabc7ea17d69b44f3e6c80f9bf25e1a1c3acdcdd6809c40dc45?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7263c13cd8feb4426db5129835e39662bfac95a3835c94754dfc8463574723c?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
              className="shrink-0 self-stretch aspect-[1.04] w-[26px]"
            />
          </div>
        </div>
        <div className="flex md:hidden gap-5 justify-between self-stretch text-xl font-bold text-black whitespace-nowrap max-w-[328px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e51487fafa692eb21dc95b366b1d8cbcba796b03fe9453fe43384d5a4dc3a420?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
            className="shrink-0 w-6 aspect-square"
          />
        </div>
      </div>

      <SubHeader />
    </>
  );
}
