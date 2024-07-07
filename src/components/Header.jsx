function Header() {
  return (
    <div className="flex gap-0 justify-between items-center px-20 py-6 border-b border-gray-500 border-solid max-md:flex-wrap max-md:px-5">
      <div className="flex flex-col flex-1 justify-center items-start self-stretch my-auto text-3xl font-bold text-black whitespace-nowrap">
        <div className="flex gap-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5ad1532e24788f4d21eb5fe20e61df21deb284fc39ef4797348b8479ecd81e9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
            className="shrink-0 my-auto w-7 aspect-square"
          />
          <div>ShopNow</div>
        </div>
      </div>
      <div className="flex gap-2 self-stretch p-3 text-lg font-medium text-gray-500 bg-white rounded-xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2afba2984802c8fd24e38e60d13322cad6cb83dc8761a445fe97b92b60cc7b52?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Search </div>
      </div>
      <div className="flex flex-1 gap-5 self-stretch pl-20 my-auto">
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/966c2ba25475408bc2f167665e1958974ca33097d9ebf0b78e6d764fdeffc09a?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
            className="shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef0ca288f049e6f031825d5ad47db0d9abd3dcb916c271beeaea67bf6340ba39?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
            className="shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6ac39dca12b8523a6d925f40141ba80a80b9ef9cd7f68dfa0f20d1ca379b9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
            className="shrink-0 self-stretch aspect-[1.04] w-[26px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
