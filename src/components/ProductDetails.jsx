import { Link } from "react-router-dom";

export default function ProductDetails() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="justify-center items-start py-6 pr-16 pl-24 w-full text-base font-medium text-left text-slate-800 max-md:pr-5 max-md:pl-8 max-md:max-w-full">
        <span className="text-gray-500">
          <Link to="/">Home</Link> / Airpods /{" "}
        </span>
        <span className="text-slate-800">Airpods Max </span>{" "}
      </div>
      <div className="self-center mt-24 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pt-8 pr-8 pb-20 pl-20 bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c480b56f13792dccc5e5d06b447281d7da5fe8eacac4d48d0a21b06f083f273f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="self-end aspect-square fill-white w-[72px]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/750ea0a8baa74844486edf179ec332aa2b99e43ff1239d787df9c482e5b15c64?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/750ea0a8baa74844486edf179ec332aa2b99e43ff1239d787df9c482e5b15c64?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/750ea0a8baa74844486edf179ec332aa2b99e43ff1239d787df9c482e5b15c64?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/750ea0a8baa74844486edf179ec332aa2b99e43ff1239d787df9c482e5b15c64?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/750ea0a8baa74844486edf179ec332aa2b99e43ff1239d787df9c482e5b15c64?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/750ea0a8baa74844486edf179ec332aa2b99e43ff1239d787df9c482e5b15c64?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/750ea0a8baa74844486edf179ec332aa2b99e43ff1239d787df9c482e5b15c64?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/750ea0a8baa74844486edf179ec332aa2b99e43ff1239d787df9c482e5b15c64?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="self-center max-w-full aspect-[0.9] w-[270px]"
                />
              </div>
              <div className="flex gap-5 justify-between self-center p-3.5 mt-12 bg-white rounded-xl max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d9b09515ad3588d180a3cb5343fd4b810fc9fe7f21f82cd00de454baeb9261e9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9b09515ad3588d180a3cb5343fd4b810fc9fe7f21f82cd00de454baeb9261e9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9b09515ad3588d180a3cb5343fd4b810fc9fe7f21f82cd00de454baeb9261e9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9b09515ad3588d180a3cb5343fd4b810fc9fe7f21f82cd00de454baeb9261e9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9b09515ad3588d180a3cb5343fd4b810fc9fe7f21f82cd00de454baeb9261e9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9b09515ad3588d180a3cb5343fd4b810fc9fe7f21f82cd00de454baeb9261e9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9b09515ad3588d180a3cb5343fd4b810fc9fe7f21f82cd00de454baeb9261e9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9b09515ad3588d180a3cb5343fd4b810fc9fe7f21f82cd00de454baeb9261e9?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 border border-solid aspect-square border-slate-800 w-[62px]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/070e18d7e18db2db3afc2c0f509ff9fe6929d04ad74839317df57023bdc17a01?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/070e18d7e18db2db3afc2c0f509ff9fe6929d04ad74839317df57023bdc17a01?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/070e18d7e18db2db3afc2c0f509ff9fe6929d04ad74839317df57023bdc17a01?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/070e18d7e18db2db3afc2c0f509ff9fe6929d04ad74839317df57023bdc17a01?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/070e18d7e18db2db3afc2c0f509ff9fe6929d04ad74839317df57023bdc17a01?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/070e18d7e18db2db3afc2c0f509ff9fe6929d04ad74839317df57023bdc17a01?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/070e18d7e18db2db3afc2c0f509ff9fe6929d04ad74839317df57023bdc17a01?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/070e18d7e18db2db3afc2c0f509ff9fe6929d04ad74839317df57023bdc17a01?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 aspect-[1.02] w-[63px]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/488840403d5b01d9fc88ffb8b76f38fb53813eabbbdc8f06a076ddfa71e2bd07?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/488840403d5b01d9fc88ffb8b76f38fb53813eabbbdc8f06a076ddfa71e2bd07?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/488840403d5b01d9fc88ffb8b76f38fb53813eabbbdc8f06a076ddfa71e2bd07?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/488840403d5b01d9fc88ffb8b76f38fb53813eabbbdc8f06a076ddfa71e2bd07?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/488840403d5b01d9fc88ffb8b76f38fb53813eabbbdc8f06a076ddfa71e2bd07?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/488840403d5b01d9fc88ffb8b76f38fb53813eabbbdc8f06a076ddfa71e2bd07?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/488840403d5b01d9fc88ffb8b76f38fb53813eabbbdc8f06a076ddfa71e2bd07?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/488840403d5b01d9fc88ffb8b76f38fb53813eabbbdc8f06a076ddfa71e2bd07?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 aspect-[1.02] w-[63px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="flex flex-col px-5 max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="text-4xl font-bold text-slate-800 max-md:max-w-full">
                      AirPods Max
                    </div>
                    <div className="flex gap-5 justify-between mt-2 w-full max-md:flex-wrap max-md:max-w-full">
                      <div className="text-3xl font-medium text-center text-slate-800">
                        $545.00
                      </div>
                      <div className="flex gap-1 my-auto">
                        <div className="flex gap-1.5 justify-between">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f190e0bb93ed4b0bd915e0c33a21a71db7b7432b84d6538248c9934cc458066?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f157ec925256b3bf14aad766f7d1d5c64124f425e57fefd90e50889e2101d35a?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c02dc05acc9a25c9c4b8f67ceb5b10064f7dfd19ec98d9f45e8b3dff8e4eecb8?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb4c63b8741152963cd0a54ce6351c21355fa3781c71d57df24bf3abe98dde3e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f51375112b5aece0cf94846f61be1afc1da89b1b8aba5e42c0240be6bb34f494?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                            className="shrink-0 w-6 aspect-square"
                          />
                        </div>
                        <div className="my-auto text-base text-center text-gray-500">
                          (123 reviews)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 text-lg text-gray-500 max-md:max-w-full">
                    the ultimate in luxury audio. These over-ear headphones
                    boast an Apple-designed dynamic driver for high-fidelity
                    sound, Active Noise Cancellation, and a comfortable knit
                    mesh canopy with memory foam ear cushions. With seamless
                    Apple device integration via the H1 chip, up to 20 hours of
                    battery life, and features like Transparency mode and
                    spatial audio, the AirPods Max delivers an exceptional
                    listening experience in style.
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start py-2.5 mt-12 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col max-w-full w-[188px]">
                    <div className="text-base text-center text-gray-500">
                      <span className="text-slate-800">Selected Colour:</span>{" "}
                      <span className="text-gray-500">Black</span>
                    </div>
                    <div className="flex gap-3 mt-2">
                      <div className="shrink-0 w-7 h-7 border border-solid border-slate-800 rounded-[50px]" />
                      <div className="shrink-0 w-7 h-7 rounded-[50px]" />
                      <div className="shrink-0 w-7 h-7 rounded-[50px]" />
                      <div className="shrink-0 w-7 h-7 rounded-[50px]" />
                      <div className="shrink-0 w-7 h-7 rounded-[50px]" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-12 w-full font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between px-5 text-3xl text-center whitespace-nowrap text-slate-800">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9083b650afe78d39c980ab24a2ad6973e2160f808b5d3eb0d21993c04775e021?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 w-12 aspect-square fill-gray-500 fill-opacity-50"
                    />
                    <div className="my-auto">1</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9101444518acc8e6e619b955f1b8e6af1acb1f84bc8f0597278af348749710d?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 w-12 aspect-square fill-slate-800"
                    />
                  </div>
                  <div className="flex flex-col justify-center my-auto text-lg text-red-600">
                    <div className="flex gap-1 px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3057870c56ff9f10fbe9a90fbdd4be5fa94b9278da73cb8eba927be72fe1ebe?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                        className="shrink-0 my-auto w-4 border-2 border-red-600 border-solid aspect-square stroke-[1.5px] stroke-red-600"
                      />
                      <div>6 units left</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-12 text-lg text-center max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="justify-center items-center px-3 py-4 text-white rounded-xl bg-slate-800 max-md:px-5">
                    Buy Now
                  </div>
                  <div className="justify-center items-center px-3 py-4 rounded-xl border border-solid border-slate-800 text-slate-800 max-md:px-5">
                    Add to Cart
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between px-5 mt-12 text-base text-center text-gray-500 max-md:flex-wrap max-md:mt-10">
                <div>Free 3 - 5 day shipping </div>
                <div>|</div>
                <div>3 Months warranty</div>
                <div>|</div>
                <div>Free Apple Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
