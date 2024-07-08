import { Link } from "react-router-dom";

export default function MyCarts() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="justify-center items-start py-6 pr-16 pl-24 w-full text-base font-medium text-center text-slate-800 max-md:pr-5 max-md:pl-8 max-md:max-w-full">
        <span className="text-gray-500">Home / </span>
        <span className="text-slate-800">My Cart </span>{" "}
      </div>
      <div className="self-center mt-1.5 w-full max-w-[1240px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-0 px-6 py-5 bg-white rounded-2xl max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between items-start py-2.5 pr-2 pl-16 w-full bg-gray-100 rounded-xl max-md:pl-5 max-md:mt-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7bcb22f4b946bbe39d5c5bb56608cf4060be20166b07d57fd5b982082c4b930e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bcb22f4b946bbe39d5c5bb56608cf4060be20166b07d57fd5b982082c4b930e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bcb22f4b946bbe39d5c5bb56608cf4060be20166b07d57fd5b982082c4b930e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bcb22f4b946bbe39d5c5bb56608cf4060be20166b07d57fd5b982082c4b930e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bcb22f4b946bbe39d5c5bb56608cf4060be20166b07d57fd5b982082c4b930e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bcb22f4b946bbe39d5c5bb56608cf4060be20166b07d57fd5b982082c4b930e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bcb22f4b946bbe39d5c5bb56608cf4060be20166b07d57fd5b982082c4b930e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bcb22f4b946bbe39d5c5bb56608cf4060be20166b07d57fd5b982082c4b930e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                          className="shrink-0 mt-1.5 max-w-full aspect-[0.91] w-[116px]"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6438d3969c186faa380727b79c107a6eac052fb52e191c32243c4034fe3db9b6?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                          className="shrink-0 w-8 aspect-square fill-white"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                        <div className="flex flex-col">
                          <div className="flex flex-col text-center">
                            <div className="justify-center text-xl font-medium text-slate-800">
                              AirPods Max
                            </div>
                            <div className="justify-center mt-2 text-base text-gray-500">
                              A perfect balance for high-fidelity audio
                            </div>
                          </div>
                          <div className="flex gap-1 mt-3">
                            <div className="flex gap-2 self-start">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/542e34d0e1835fb3b792e78d398c232086ca0b4eee102bd9b089af91fab705b1?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b484f0bcc225fd8c05a4dc0ae02a078d044f5157dc62fc61a83ecdb7fb80b7f8?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c688e8b3cb88d49e1f95d5315fc224c3549c5248b4e21d8a7d0a2c1dde3e2b5b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/228ba6fb830d305963dfe742226f15e8d7adf7ada342e9f8ba52c5cc518d1d3e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/85a023938165f2c5ec3078b4f39e4cb66853044efb6f173a0df3c12ccaa109e2?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                            </div>
                            <div className="text-xs font-medium text-center text-gray-500">
                              (123 reviews)
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-xl font-medium text-slate-800">
                          $545.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pl-1.5 my-auto text-base">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccde125fa6aefb591f18f522c6323d554e83255bd43091b0ec2e42338925a92b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                    className="self-end aspect-[0.79] fill-black w-[19px]"
                  />
                  <div className="flex flex-col mt-7">
                    <div className="flex gap-2 justify-between text-red-600">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe10525427d8d2d2054a362f0e1a88d9cf858a2f23db1ae8c4c4c63077e819b3?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                        className="shrink-0 my-auto w-4 border-2 border-red-600 border-solid aspect-square stroke-[1.5px] stroke-red-600"
                      />
                      <div>6 units left</div>
                    </div>
                    <div className="flex gap-3 self-start mt-3 ml-3.5 font-medium text-center whitespace-nowrap text-neutral-900 max-md:ml-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa0ace768d368ea4d0f09cf02ab641b1b14e0cef93431cce622305d1cafa3ad7?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                        className="shrink-0 w-6 aspect-square fill-zinc-100"
                      />
                      <div className="my-auto">1</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a3e4fc91f1ed0a69900a2235dbc43da48a7b9e38283e0463e5c6c18b8063d2?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                        className="shrink-0 w-6 aspect-square fill-neutral-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-0 px-6 py-5 mt-9 bg-white rounded-2xl max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between items-start py-2.5 pr-2 pl-16 w-full bg-gray-100 rounded-xl max-md:pl-5 max-md:mt-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                          className="shrink-0 mt-1.5 max-w-full aspect-[0.89] w-[114px]"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6438d3969c186faa380727b79c107a6eac052fb52e191c32243c4034fe3db9b6?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                          className="shrink-0 w-8 aspect-square fill-white"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                        <div className="flex flex-col">
                          <div className="flex flex-col text-center">
                            <div className="justify-center text-xl font-medium whitespace-nowrap text-slate-800">
                              Beats
                            </div>
                            <div className="justify-center mt-2 text-base text-gray-500">
                              True Wireless Noise Cancelling Earbuds
                            </div>
                          </div>
                          <div className="flex gap-1 mt-3">
                            <div className="flex gap-2 self-start">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/542e34d0e1835fb3b792e78d398c232086ca0b4eee102bd9b089af91fab705b1?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b484f0bcc225fd8c05a4dc0ae02a078d044f5157dc62fc61a83ecdb7fb80b7f8?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c688e8b3cb88d49e1f95d5315fc224c3549c5248b4e21d8a7d0a2c1dde3e2b5b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/228ba6fb830d305963dfe742226f15e8d7adf7ada342e9f8ba52c5cc518d1d3e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f864929437504a9a3cab38763d01185bf9b6c65483a56744f503a6aabd61e55?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                            </div>
                            <div className="text-xs font-medium text-center text-gray-500">
                              (123 reviews)
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-xl font-medium text-slate-800">
                          $445.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pl-1.5 my-auto text-base">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccde125fa6aefb591f18f522c6323d554e83255bd43091b0ec2e42338925a92b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                    className="self-end aspect-[0.79] fill-black w-[19px]"
                  />
                  <div className="flex flex-col items-start pl-3.5 mt-7">
                    <div className="text-lime-600">In Stock</div>
                    <div className="flex gap-3 mt-3 font-medium text-center whitespace-nowrap text-neutral-900">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa0ace768d368ea4d0f09cf02ab641b1b14e0cef93431cce622305d1cafa3ad7?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                        className="shrink-0 w-6 aspect-square fill-zinc-100"
                      />
                      <div className="my-auto">1</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a3e4fc91f1ed0a69900a2235dbc43da48a7b9e38283e0463e5c6c18b8063d2?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                        className="shrink-0 w-6 aspect-square fill-neutral-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-0 px-6 py-5 mt-9 bg-white rounded-2xl max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between items-start py-2.5 pr-2 pl-20 w-full bg-gray-100 rounded-xl max-md:pl-5 max-md:mt-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                          className="shrink-0 mt-1.5 aspect-[0.76] w-[98px]"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6438d3969c186faa380727b79c107a6eac052fb52e191c32243c4034fe3db9b6?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                          className="shrink-0 w-8 aspect-square fill-white"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                        <div className="flex flex-col">
                          <div className="flex flex-col text-center">
                            <div className="justify-center text-xl font-medium text-slate-800">
                              Anker Life Q20
                            </div>
                            <div className="justify-center mt-2 text-base text-gray-500">
                              Hybrid Active Noise Cancelling
                            </div>
                          </div>
                          <div className="flex gap-1 mt-3">
                            <div className="flex gap-2 self-start">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ed1e7ede5ea1efe4b36882af6e9c654cb76059dab29f604eef2f3eb65624494?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4e032ed3327787392f0e1bb7f6513f25228a1c02ea9c47ea62aa474967370a1?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6483953676841cd915d97891c985652bf35b451f1563babedd2d86c6dc3f9a4?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32bc20e8f639f7d3a9e4c90d61c210b35fec781e708dc37fa3d26eeaf294ee93?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/47284a0ad4022b385750ae1f71b456d9815d516e56b3f4f66bfa998ecf97052e?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                                className="shrink-0 aspect-square w-[13px]"
                              />
                            </div>
                            <div className="text-xs font-medium text-center text-gray-500">
                              (123 reviews)
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-xl font-medium text-slate-800">
                          $105.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pl-1.5 my-auto text-base">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccde125fa6aefb591f18f522c6323d554e83255bd43091b0ec2e42338925a92b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                    className="self-end aspect-[0.79] fill-black w-[19px]"
                  />
                  <div className="flex flex-col items-start pl-3.5 mt-7">
                    <div className="text-lime-600">In Stock</div>
                    <div className="flex gap-3 mt-3 font-medium text-center whitespace-nowrap text-neutral-900">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa0ace768d368ea4d0f09cf02ab641b1b14e0cef93431cce622305d1cafa3ad7?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                        className="shrink-0 w-6 aspect-square fill-zinc-100"
                      />
                      <div className="my-auto">1</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a3e4fc91f1ed0a69900a2235dbc43da48a7b9e38283e0463e5c6c18b8063d2?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                        className="shrink-0 w-6 aspect-square fill-neutral-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center px-6 py-8 mt-2 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="text-3xl font-bold text-slate-800 max-md:max-w-full">
                    Order summary
                  </div>
                  <div className="flex flex-col mt-6 text-xl font-medium text-center max-md:max-w-full">
                    <div className="flex gap-5 justify-between whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                      <div className="text-gray-500">Subtotal</div>
                      <div className="text-slate-800">$1095.00</div>
                    </div>
                    <div className="flex gap-5 justify-between mt-9 max-md:flex-wrap max-md:max-w-full">
                      <div className="text-gray-500">Discount: </div>
                      <div className="text-slate-800">$00.00</div>
                    </div>
                    <div className="flex gap-5 justify-between mt-9 max-md:flex-wrap max-md:max-w-full">
                      <div className="text-gray-500">Delivery Fee</div>
                      <div className="text-slate-800">Free</div>
                    </div>
                    <div className="flex gap-2 self-start mt-9 text-gray-500">
                      <div>Add Coupon </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b4e637d357c9bec64d6d0466e27a5ac0363c03855f78c4fba9b30cd2ae06a?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                        className="shrink-0 w-6 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-14 text-xl font-medium text-center max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="text-gray-500">Total Price:</div>
                  <div className="text-slate-800">$1095.00</div>
                </div>
              </div>
              <Link to="/Checkout">
                <div className="justify-center items-center p-2 mt-12 text-lg text-center text-white rounded-xl bg-slate-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  Proceed to Checkout
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
