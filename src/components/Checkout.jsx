import { Link } from "react-router-dom";
export default function Checkout() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="justify-center items-start py-6 pr-16 pl-24 w-full text-base font-medium text-left text-slate-800 max-md:pr-5 max-md:pl-8 max-md:max-w-full">
        <span className="text-gray-500">
          <Link to="/">Home</Link> / <Link to="/my-cart">My Cart</Link> /{" "}
        </span>
        <span className="text-slate-800">
          <Link to="/checkout">Checkout</Link>
        </span>{" "}
      </div>
      <div className="flex flex-col self-center py-7 max-w-full bg-white rounded-2xl w-[471px]">
        <div className="justify-center items-start px-5 text-3xl font-bold text-slate-800 max-md:max-w-full">
          Order List
        </div>
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex flex-col justify-center p-5 bg-white rounded-2xl max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-14 py-3.5 w-full bg-gray-100 rounded-xl max-md:px-5 max-md:mt-3">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a414aeca6688043728afe058342fdd08fedd3ef4198b4341de92e7a3bacff99b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a414aeca6688043728afe058342fdd08fedd3ef4198b4341de92e7a3bacff99b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a414aeca6688043728afe058342fdd08fedd3ef4198b4341de92e7a3bacff99b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a414aeca6688043728afe058342fdd08fedd3ef4198b4341de92e7a3bacff99b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a414aeca6688043728afe058342fdd08fedd3ef4198b4341de92e7a3bacff99b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a414aeca6688043728afe058342fdd08fedd3ef4198b4341de92e7a3bacff99b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a414aeca6688043728afe058342fdd08fedd3ef4198b4341de92e7a3bacff99b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a414aeca6688043728afe058342fdd08fedd3ef4198b4341de92e7a3bacff99b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="w-20 aspect-[0.91]"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch my-auto max-md:mt-4">
                    <div className="flex flex-col">
                      <div className="flex flex-col">
                        <div className="justify-center text-lg font-medium text-center text-slate-800">
                          AirPods Max
                        </div>
                        <div className="justify-center mt-2 text-sm text-gray-500">
                          A perfect balance for high-fidelity audio
                        </div>
                      </div>
                      <div className="flex gap-1 mt-3">
                        <div className="flex gap-1">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1841cbdcc6800bdc758c20cf3b3415f6ed9f400731102d796cd2c6c716c63ddb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-3 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1841cbdcc6800bdc758c20cf3b3415f6ed9f400731102d796cd2c6c716c63ddb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-3 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1841cbdcc6800bdc758c20cf3b3415f6ed9f400731102d796cd2c6c716c63ddb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-3 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1841cbdcc6800bdc758c20cf3b3415f6ed9f400731102d796cd2c6c716c63ddb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-3 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1841cbdcc6800bdc758c20cf3b3415f6ed9f400731102d796cd2c6c716c63ddb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-3 aspect-square"
                          />
                        </div>
                        <div className="text-xs font-medium text-center text-gray-500">
                          (123 reviews)
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-lg font-medium text-slate-800">
                      $545.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-5 bg-white rounded-2xl max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-14 py-3.5 w-full bg-gray-100 rounded-xl max-md:px-5 max-md:mt-3">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/20602775a8bb13ea9fe98200aaec60136354cba36db37b9c4a34f834349962ac?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/20602775a8bb13ea9fe98200aaec60136354cba36db37b9c4a34f834349962ac?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20602775a8bb13ea9fe98200aaec60136354cba36db37b9c4a34f834349962ac?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/20602775a8bb13ea9fe98200aaec60136354cba36db37b9c4a34f834349962ac?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/20602775a8bb13ea9fe98200aaec60136354cba36db37b9c4a34f834349962ac?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20602775a8bb13ea9fe98200aaec60136354cba36db37b9c4a34f834349962ac?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/20602775a8bb13ea9fe98200aaec60136354cba36db37b9c4a34f834349962ac?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/20602775a8bb13ea9fe98200aaec60136354cba36db37b9c4a34f834349962ac?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="aspect-[0.78] w-[68px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch my-auto max-md:mt-4">
                    <div className="flex flex-col">
                      <div className="flex flex-col">
                        <div className="justify-center text-lg font-medium text-center text-slate-800">
                          Anker Life Q20
                        </div>
                        <div className="justify-center mt-2 text-sm text-gray-500">
                          Hybrid Active Noise Cancelling
                        </div>
                      </div>
                      <div className="flex gap-1 mt-3">
                        <div className="flex gap-1">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1841cbdcc6800bdc758c20cf3b3415f6ed9f400731102d796cd2c6c716c63ddb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-3 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1841cbdcc6800bdc758c20cf3b3415f6ed9f400731102d796cd2c6c716c63ddb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-3 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1841cbdcc6800bdc758c20cf3b3415f6ed9f400731102d796cd2c6c716c63ddb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-3 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1841cbdcc6800bdc758c20cf3b3415f6ed9f400731102d796cd2c6c716c63ddb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-3 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1841cbdcc6800bdc758c20cf3b3415f6ed9f400731102d796cd2c6c716c63ddb?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-3 aspect-square"
                          />
                        </div>
                        <div className="text-xs font-medium text-center text-gray-500">
                          (123 reviews)
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-lg font-medium text-slate-800">
                      $105.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center text-lg text-center border-t border-b border-gray-500 border-solid text-slate-800 max-md:max-w-full">
          <div className="justify-center items-center p-2 rounded-xl max-md:px-5 max-md:max-w-full">
            See all
          </div>
        </div>
        <div className="flex flex-col font-medium max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="items-start pt-3 pr-4 pl-5 text-base text-center text-neutral-700 max-md:pr-5 max-md:max-w-full">
              Shipping address
            </div>
            <div className="flex gap-3 justify-between px-5 py-4 mt-3 w-full bg-white max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb64eee6774da3115f057a437fede389981e11b1d88486d66ae4bc28d9eaf482?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 my-auto w-5 aspect-square"
                />
                <div className="flex flex-col justify-center">
                  <div className="text-sm text-neutral-700">Home</div>
                  <div className="mt-1 text-xs text-gray-500">
                    14, Akindele Close, off Idi-osan Bus-stop, Matogun, Ogun
                    state.
                  </div>
                </div>
              </div>
              <div className="my-auto text-sm text-center underline text-neutral-700">
                Edit
              </div>
            </div>
          </div>
          <div className="flex flex-col max-md:max-w-full">
            <div className="items-start pt-3 pr-4 pl-5 text-base text-center text-neutral-700 max-md:pr-5 max-md:max-w-full">
              Choose shipping type
            </div>
            <div className="flex gap-3 justify-between px-5 py-4 mt-3 w-full bg-white max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/676e724e4a1170fc1ceb197d8fffd9cd8e31d859ced700122a887bbd96666e8a?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 my-auto w-5 aspect-square"
                />
                <div className="flex flex-col justify-center">
                  <div className="text-sm text-neutral-700">Economy</div>
                  <div className="mt-1 text-xs text-gray-500">
                    Estimated date: 26 June 2024
                  </div>
                </div>
              </div>
              <div className="my-auto text-sm text-center underline text-neutral-700">
                Edit
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/payment-method"
          className="justify-center items-center self-center p-2 mt-6 max-w-full text-lg text-center text-white whitespace-nowrap rounded-xl bg-slate-800 w-[423px] max-md:px-5"
        >
          <div>Continue</div>
        </Link>
      </div>
    </div>
  );
}
