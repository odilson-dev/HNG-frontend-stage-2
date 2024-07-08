export default function CardPaymentt() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="justify-center items-start py-6 pr-16 pl-24 w-full text-base font-medium text-left text-slate-800 max-md:px-5 max-md:max-w-full">
        <span className="text-gray-500">Home / My Cart / </span>{" "}
        <span className="text-gray-500">Checkout /</span>{" "}
        <span className="text-gray-500">Payment Method /</span>
        <span className="text-slate-800"> Card Payment </span>{" "}
      </div>
      <div className="flex flex-col items-center self-center px-5 py-20 max-w-full bg-white rounded-2xl w-[471px]">
        <div className="flex flex-col self-stretch pb-6 mt-5 text-base max-md:max-w-full">
          <div className="flex gap-5 justify-between px-4 max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5e8a4d8972a90a7fdd238ee66574b82991335810c97aa6b4b384873a5e86fdf?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
              className="shrink-0 my-auto w-6 aspect-[1.2]"
            />
            <div className="flex flex-col">
              <div className="text-neutral-900">ihamroland@gmail.com</div>
              <div className="mt-1 text-amber-500">
                Pay{" "}
                <span className="font-medium text-amber-500">USD 1,095.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-lg font-medium text-center text-neutral-900">
          Enter your Card Details
        </div>
        <div className="flex flex-col mt-6 text-center max-md:max-w-full">
          <div className="flex flex-col text-xs tracking-tight leading-3 max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              <div className="flex gap-3 justify-between p-2 rounded-lg border border-gray-500 border-solid max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col">
                  <div className="text-neutral-900">CARD NUMBER</div>
                  <div className="mt-3 text-gray-500">0000 0000 0000 0000</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/636666238dd37598d9c33a8d2ca983b9767ef080e21a65ac509ad9eae4fd2c93?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 my-auto aspect-[1.28] w-[18px]"
                />
              </div>
              <div className="flex gap-4 justify-between mt-4 max-md:flex-wrap">
                <div className="flex flex-col p-2 rounded-lg border border-gray-500 border-solid">
                  <div className="text-neutral-900">CARD EXPIRY</div>
                  <div className="mt-3 text-gray-500">MM/YY</div>
                </div>
                <div className="flex flex-col p-2 rounded-lg border border-gray-500 border-solid">
                  <div className="flex gap-2 justify-between">
                    <div className="text-neutral-900">CVV</div>
                    <div className="text-gray-500">what is this?</div>
                  </div>
                  <div className="mt-3 text-gray-500">***</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3.5 self-start mt-3 text-neutral-900">
              <div className="shrink-0 w-3.5 h-3.5 bg-gray-500 rounded-sm" />
              <div>Remember this card next time</div>
            </div>
          </div>
          <div className="justify-center items-center p-4 mt-6 text-sm font-bold text-white bg-amber-500 rounded-lg max-md:px-5 max-md:max-w-full">
            Pay USD 1,095.00
          </div>
        </div>
        <div className="flex flex-col px-4 mt-9 max-w-full w-[230px]">
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
        <div className="flex gap-1 mt-20 mb-4 text-xs tracking-tight leading-3 text-center text-neutral-900 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c180b1456248b324f5b176959095f1eec4050f79233419b27dbd50ec61fe9d?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
            className="shrink-0 self-start w-3 aspect-square"
          />
          <div>
            Secured by <span className="font-bold">Flutterwave</span>
          </div>
        </div>
      </div>
    </div>
  );
}
