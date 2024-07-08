export default function PaymentMethodt() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="flex gap-0 justify-between items-center px-20 py-6 w-full border-b border-gray-500 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
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
        <div className="flex flex-1 gap-2 self-stretch p-3 text-lg font-medium text-gray-500 bg-white rounded-xl">
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
      </div>
      <div className="flex gap-5 justify-between px-20 py-6 text-lg font-medium text-center text-gray-500 border-b border-gray-500 border-solid max-md:flex-wrap max-md:px-5">
        <div className="text-slate-800">Airpods</div>
        <div>Powerbanks</div>
        <div>Phonecase</div>
        <div>Chargers</div>
        <div className="max-md:max-w-full">Protective screens</div>
      </div>
      <div className="justify-center items-start py-6 pr-16 pl-24 w-full text-base font-medium text-center text-slate-800 max-md:pr-5 max-md:pl-8 max-md:max-w-full">
        <span className="text-gray-500">Home / My Cart / </span>{" "}
        <span className="text-gray-500">Checkout /</span>
        <span className="text-slate-800"> Payment Method </span>{" "}
      </div>
      <div className="flex flex-col self-center pt-11 pb-7 max-w-full bg-white rounded-2xl w-[471px]">
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex gap-5 justify-between px-5 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2">
                <div className="flex justify-center items-center p-2 w-9 h-9 bg-zinc-100 rounded-[200px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b30e032ff963469f5caa3fc6fee2c117ffa2cc14de35162b9685a092be91d8f0?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                    className="aspect-square w-[18px]"
                  />
                </div>
                <div className="my-auto text-base text-neutral-900">
                  Bank Transfer
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/868ca52b23fee1cc53feb57b15f8e799db590b51855f9bc9e2d6accc376e6307?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 my-auto aspect-square w-[18px]"
              />
            </div>
            <div className="flex gap-5 justify-between px-5 mt-6 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2">
                <div className="flex justify-center items-center p-2 w-9 h-9 bg-zinc-100 rounded-[200px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/60414d1d075bca4568c72e794c99b0fee9b1ed8c85aff5e93711e0b7a5a0eee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                    className="aspect-[1.28] w-[18px]"
                  />
                </div>
                <div className="my-auto text-base text-neutral-900">
                  Card Payment
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/517945967cbc2b6ce49f28206e32bfd11afab035eb2192c6d2fd1da7f26aac0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 my-auto aspect-square w-[18px]"
              />
            </div>
            <div className="flex gap-5 justify-between px-5 mt-6 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2">
                <div className="flex justify-center items-center p-2 w-9 h-9 bg-zinc-100 rounded-[200px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/408a923c6873815f1c891c11bcb56c2799a1bd0a27b355c0275f86857a6855cf?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                    className="aspect-[0.83] w-[15px]"
                  />
                </div>
                <div className="my-auto text-base text-neutral-900">
                  Pay with Crypto{" "}
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aade68eef54b27af321264e76e90747171a41740a95cb9bbdfa45dcd2923ae52?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 my-auto aspect-square w-[18px]"
              />
            </div>
          </div>
          <div className="justify-center items-start px-4 py-2.5 mt-6 text-sm bg-gray-100 text-neutral-900 max-md:pr-5 max-md:max-w-full">
            More payment options
          </div>
          <div className="flex flex-col mt-6 max-md:max-w-full">
            <div className="flex gap-5 justify-between px-5 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2">
                <div className="flex justify-center items-center p-2 w-9 h-9 bg-zinc-100 rounded-[200px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d8f352d8efd6c1f2d211aac22fe087a700b8012237f54c2ec2f434060028ac6?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                    className="aspect-square w-[18px]"
                  />
                </div>
                <div className="my-auto text-base text-neutral-900">
                  Pay with Amazon
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f333a5e62222480b3d1748dda35d7cb0f30c3680c96d1470fcfdfb0cd5d4b0b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 my-auto aspect-square w-[18px]"
              />
            </div>
            <div className="flex gap-5 justify-between px-5 mt-6 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2">
                <div className="flex justify-center items-center p-2 w-9 h-9 bg-zinc-100 rounded-[200px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fd018b826befefbe1bcc2733dbc33701357f3651551c676dbd50963613652d4?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                    className="aspect-square w-[18px]"
                  />
                </div>
                <div className="my-auto text-base text-neutral-900">
                  Pay with Paypal
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37a00dabf916df16a29ad3fd895b7aae26cca2de14c8263b58252bdc02b031fb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 my-auto aspect-square w-[18px]"
              />
            </div>
            <div className="flex gap-5 justify-between px-5 mt-6 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2">
                <div className="flex justify-center items-center p-2 w-9 h-9 bg-zinc-100 rounded-[200px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d227680530360336548f7978171f7706f8f36310b13579f03f37f4947d312c6?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                    className="aspect-square w-[18px]"
                  />
                </div>
                <div className="my-auto text-base text-neutral-900">
                  Pay with Google
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/de3463e74a5cb4134c7bc46fd6ce6185631ab995dd976ae2414101353338559e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 my-auto aspect-square w-[18px]"
              />
            </div>
          </div>
        </div>
        <div className="justify-center items-center self-center p-2 mt-60 max-w-full text-lg text-center text-white rounded-xl bg-slate-800 w-[423px] max-md:px-5 max-md:mt-10">
          Make Payment
        </div>
      </div>
      <div className="flex flex-col pt-20 pb-6 mt-12 w-full bg-black max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-center items-start self-center px-5 w-full max-w-[1134px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col text-neutral-50">
            <div className="flex flex-col">
              <div className="flex gap-1 text-3xl font-bold text-white whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d87978c4216ca23e32c4bd17da3f1fdc37222aff960c338a338f3ce50acfcb3?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 my-auto w-7 aspect-square"
                />
                <div>ShopNow</div>
              </div>
              <div className="justify-center mt-6 text-lg font-medium whitespace-nowrap">
                Subscribe
              </div>
              <div className="mt-6 text-base">Get 10% off your first order</div>
            </div>
            <div className="flex gap-5 justify-between py-3 pr-10 pl-4 mt-4 text-base rounded border-2 border-solid border-neutral-50 max-md:pr-5">
              <div className="my-auto">Enter your email</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bac8a3a4556d00df359345f40c4304fa01a92d9d278e1cc8be218cdcd6e20d8?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
          </div>
          <div className="flex flex-col text-neutral-50">
            <div className="text-lg font-medium">Support</div>
            <div className="flex flex-col mt-6 text-base">
              <div>12, Alhaja Adenike Street, iju road, Lagos </div>
              <div className="mt-4">ihamroland@gmail.com</div>
              <div className="mt-4">+234 807 4238929</div>
            </div>
          </div>
          <div className="flex flex-col text-neutral-50">
            <div className="text-lg font-medium">Account</div>
            <div className="flex flex-col mt-6 text-base">
              <div>My Account</div>
              <div className="mt-4">Login / Register</div>
              <div className="mt-4">Cart</div>
              <div className="mt-4">Shop</div>
            </div>
          </div>
          <div className="flex flex-col text-neutral-50">
            <div className="text-lg font-medium">Quick Link</div>
            <div className="flex flex-col mt-6 text-base">
              <div>Privacy Policy</div>
              <div className="mt-4">Terms Of Use</div>
              <div className="mt-4">FAQ</div>
              <div className="mt-4">Contact</div>
            </div>
          </div>
          <div className="flex flex-col self-stretch">
            <div className="flex flex-col">
              <div className="text-lg font-medium text-neutral-50">
                Download App
              </div>
              <div className="flex flex-col mt-6">
                <div className="text-xs font-medium leading-5 text-neutral-50">
                  Save $3 with App New User Only
                </div>
                <div className="flex gap-2 mt-2">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5440fda2301de4db42cb3b78ea9e454c8a6e45def7b4a78502c73f2e432adfbb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440fda2301de4db42cb3b78ea9e454c8a6e45def7b4a78502c73f2e432adfbb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440fda2301de4db42cb3b78ea9e454c8a6e45def7b4a78502c73f2e432adfbb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440fda2301de4db42cb3b78ea9e454c8a6e45def7b4a78502c73f2e432adfbb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440fda2301de4db42cb3b78ea9e454c8a6e45def7b4a78502c73f2e432adfbb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440fda2301de4db42cb3b78ea9e454c8a6e45def7b4a78502c73f2e432adfbb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440fda2301de4db42cb3b78ea9e454c8a6e45def7b4a78502c73f2e432adfbb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440fda2301de4db42cb3b78ea9e454c8a6e45def7b4a78502c73f2e432adfbb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                    className="shrink-0 my-auto w-20 aspect-square"
                  />
                  <div className="flex flex-col items-center">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/df59572eb8c812f019934d33ba52be08e637c623b1c2c4343e086e5a6869b3c4?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df59572eb8c812f019934d33ba52be08e637c623b1c2c4343e086e5a6869b3c4?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df59572eb8c812f019934d33ba52be08e637c623b1c2c4343e086e5a6869b3c4?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df59572eb8c812f019934d33ba52be08e637c623b1c2c4343e086e5a6869b3c4?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df59572eb8c812f019934d33ba52be08e637c623b1c2c4343e086e5a6869b3c4?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df59572eb8c812f019934d33ba52be08e637c623b1c2c4343e086e5a6869b3c4?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df59572eb8c812f019934d33ba52be08e637c623b1c2c4343e086e5a6869b3c4?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df59572eb8c812f019934d33ba52be08e637c623b1c2c4343e086e5a6869b3c4?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="aspect-[2.78] w-[110px]"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5c8569b4d912f2f0d95c365e51f1f979a971234e5fa2a900f3797efb56a7b34?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5c8569b4d912f2f0d95c365e51f1f979a971234e5fa2a900f3797efb56a7b34?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5c8569b4d912f2f0d95c365e51f1f979a971234e5fa2a900f3797efb56a7b34?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5c8569b4d912f2f0d95c365e51f1f979a971234e5fa2a900f3797efb56a7b34?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5c8569b4d912f2f0d95c365e51f1f979a971234e5fa2a900f3797efb56a7b34?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5c8569b4d912f2f0d95c365e51f1f979a971234e5fa2a900f3797efb56a7b34?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5c8569b4d912f2f0d95c365e51f1f979a971234e5fa2a900f3797efb56a7b34?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5c8569b4d912f2f0d95c365e51f1f979a971234e5fa2a900f3797efb56a7b34?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="mt-1 aspect-[2.78] w-[110px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between pr-8 mt-6 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ef1881c8ba382ad841b10dec22c4728e1ac56594cd8fd1b8fc54e4c0c91052?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccec46a2296b38fdf38e700e89318a0e25001db632676fb706c2e301acb1457e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b67f52bb53b8c3b436cfc50867157e647c1cc5fa6f7cc373ba309b35f3d286?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/017f03fd6271e23e94e189db8506f53ec67e53623ecac07e20b0cc0e64aa481c?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-16 pt-4 mt-24 w-full text-base leading-6 text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center max-w-full w-[337px]">
            <div className="flex gap-1.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ec9569466e034c374fe774f4027efc34c40210ae00b79cd471c903edbe68455?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
              <div>Copyright Rimel 2022. All right reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
