import { Link } from "react-router-dom";

export default function PaymentMethod() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="justify-center items-start py-6 pr-16 pl-24 w-full text-base font-medium text-left text-slate-800 max-md:pr-5 max-md:pl-8 max-md:max-w-full">
        <span className="text-gray-500">
          <Link to="/">Home</Link> /<Link to="my-cart">My Cart</Link> /{" "}
        </span>{" "}
        <span className="text-gray-500">
          <Link to="/checkout">Checkout</Link> /
        </span>
        <span className="text-slate-800">
          {" "}
          <Link to="/payment-method">Payment Method </Link>
        </span>{" "}
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
        <Link
          className="justify-center items-center self-center p-2 mt-60 max-w-full text-lg text-center text-white rounded-xl bg-slate-800 w-[423px] max-md:px-5 max-md:mt-10"
          to="/card-payment"
        >
          <div>Make Payment</div>
        </Link>
      </div>
    </div>
  );
}
