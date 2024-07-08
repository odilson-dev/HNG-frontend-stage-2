export default function PaymentSuccessful() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="flex flex-col justify-center pb-12 w-full bg-black bg-opacity-50 max-md:max-w-full">
        <div className="flex gap-0 justify-between items-center px-20 py-6 w-full border-b border-gray-500 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col flex-1 justify-center items-start self-stretch my-auto text-3xl font-bold text-black whitespace-nowrap">
            <div className="flex gap-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ce6e8a1230908947637cfaf5c2cb113f553131325c9946cb75065d0490aaef8?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
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
        <div className="justify-center items-start py-6 pr-16 pl-24 w-full text-base font-medium text-center text-slate-800 max-md:px-5 max-md:max-w-full">
          <span className="text-gray-500">Home / My Cart / </span>{" "}
          <span className="text-gray-500">Checkout /</span>{" "}
          <span className="text-gray-500">Payment Method /</span>
          <span className="text-slate-800"> Card Payment </span>{" "}
        </div>
        <div className="flex flex-col self-center pt-20 pb-7 max-w-full bg-white rounded-2xl w-[471px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ec100cfb-a11f-4f35-8306-53c01ecd02d5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec100cfb-a11f-4f35-8306-53c01ecd02d5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec100cfb-a11f-4f35-8306-53c01ecd02d5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec100cfb-a11f-4f35-8306-53c01ecd02d5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec100cfb-a11f-4f35-8306-53c01ecd02d5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec100cfb-a11f-4f35-8306-53c01ecd02d5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec100cfb-a11f-4f35-8306-53c01ecd02d5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec100cfb-a11f-4f35-8306-53c01ecd02d5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
            className="mt-5 w-full aspect-[1.28] max-md:max-w-full"
          />
          <div className="flex flex-col self-center px-4 mt-5 max-w-full w-[230px]">
            <div className="flex gap-1 justify-center px-3 py-1 text-sm tracking-tighter leading-4 text-center text-black rounded-lg border border-solid bg-zinc-100 border-gray-500 border-opacity-70">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb405ac4d410f68d008f30473e791a717bf1896e5b3da00fc309d5535dd37fd?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                className="shrink-0 aspect-square w-[23px]"
              />
              <div className="my-auto">Change Payment Method</div>
            </div>
            <div className="flex gap-1 justify-center self-center px-3 py-1 mt-3 rounded-lg border border-solid bg-zinc-100 border-gray-500 border-opacity-70">
              <div className="flex justify-center items-center p-1 my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cab6c06c401c80dffe4f425810f100d01a61c39fde2269b1b50ec206d8541839?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="w-1.5 border border-solid aspect-square border-gray-500 border-opacity-70 stroke-[1px] stroke-gray-500 stroke-opacity-70"
                />
              </div>
              <div className="text-sm tracking-tighter leading-4 text-center text-black">
                Cancel Payment
              </div>
            </div>
          </div>
          <div className="flex gap-1 self-center px-5 mt-20 text-xs tracking-tight leading-3 text-center text-neutral-900 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c180b1456248b324f5b176959095f1eec4050f79233419b27dbd50ec61fe9d?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
              className="shrink-0 self-start w-3 aspect-square"
            />
            <div>
              Secured by <span className="font-bold">Flutterwave</span>
            </div>
          </div>
          <div className="justify-center items-center p-2 mx-6 mt-5 text-lg text-center text-white rounded-xl bg-slate-800 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
            Make Payment
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-20 pb-6 w-full bg-black max-md:max-w-full">
        <div className="flex gap-5 justify-center items-start self-center px-5 w-full max-w-[1134px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col text-neutral-50">
            <div className="flex flex-col">
              <div className="flex gap-1 text-3xl font-bold text-white whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc2e67c54914b89d1943c324d5e8c54ef0492a0f5f828fee94b8c89b449dd0e4?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
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
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f8086ca6595511b019eec8e295aefc5745b02d452f33f1870425e89046b45b7f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8086ca6595511b019eec8e295aefc5745b02d452f33f1870425e89046b45b7f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8086ca6595511b019eec8e295aefc5745b02d452f33f1870425e89046b45b7f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8086ca6595511b019eec8e295aefc5745b02d452f33f1870425e89046b45b7f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8086ca6595511b019eec8e295aefc5745b02d452f33f1870425e89046b45b7f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8086ca6595511b019eec8e295aefc5745b02d452f33f1870425e89046b45b7f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8086ca6595511b019eec8e295aefc5745b02d452f33f1870425e89046b45b7f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8086ca6595511b019eec8e295aefc5745b02d452f33f1870425e89046b45b7f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1144cc4da56057369ce97a9ef04989c076129b40722e37f01f2965e5d8ddcb2c?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
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
