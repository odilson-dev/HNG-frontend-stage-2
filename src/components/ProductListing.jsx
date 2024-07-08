import { Link } from "react-router-dom";

export default function ProductListing() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="flex gap-2.5 justify-between px-20 py-6 w-full text-base font-medium text-center max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="my-auto text-gray-500">
          <span className="text-gray-500">
            <Link to="/">Home</Link> / <Link to="product-details">Airpods</Link>{" "}
          </span>
        </div>
        <div className="flex gap-2 text-slate-800">
          <div className="my-auto">Sort by</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20ea8350213e36df484544c960a68da8c914707cb723d6542768c070fc2fc122?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
            className="shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
      <div className="self-center px-5 mt-5 w-full max-w-[1240px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-5 mx-auto w-full bg-white rounded-2xl max-md:mt-6">
              <div className="flex gap-5 justify-between items-start pt-2 pr-2 pb-4 pl-16 mx-5 bg-gray-100 rounded-xl max-md:pl-5 max-md:mx-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61e68ba5eda8d4c62c492ee05e7b005252710d5548c380d7aed8f4a3fa575de5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e68ba5eda8d4c62c492ee05e7b005252710d5548c380d7aed8f4a3fa575de5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e68ba5eda8d4c62c492ee05e7b005252710d5548c380d7aed8f4a3fa575de5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e68ba5eda8d4c62c492ee05e7b005252710d5548c380d7aed8f4a3fa575de5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e68ba5eda8d4c62c492ee05e7b005252710d5548c380d7aed8f4a3fa575de5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e68ba5eda8d4c62c492ee05e7b005252710d5548c380d7aed8f4a3fa575de5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e68ba5eda8d4c62c492ee05e7b005252710d5548c380d7aed8f4a3fa575de5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e68ba5eda8d4c62c492ee05e7b005252710d5548c380d7aed8f4a3fa575de5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 mt-3 max-w-full aspect-[0.91] w-[116px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6438d3969c186faa380727b79c107a6eac052fb52e191c32243c4034fe3db9b6?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 w-8 aspect-square fill-white"
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <div className="flex flex-col text-center">
                  <div className="flex gap-5 justify-between px-5 text-base text-slate-800">
                    <div className="font-medium">AirPods Max</div>
                    <div>$545.00</div>
                  </div>
                  <div className="justify-center px-5 mt-1 text-xs font-medium text-gray-500">
                    A perfect balance for high-fidelity audio
                  </div>
                </div>
                <div className="flex gap-1 px-5 mt-2">
                  <div className="flex gap-1.5 justify-between self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbfe5263ee1fca358ff6dafbae97f277d310d09d82089f84348460885d20dfae?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/87fa9d6141a2abfb58a521e44475005148a0b2e5a5ae03d9b8e0a3d235ac8488?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d4ebade019a4d92cda916bab36b43c606cbb716f1fc5b4d68cd748fde09cbf?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c4b4751908451dd22eded17df3548bf4c55b7c4d07ed96a11776e5b4d7a9450?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b895674ff910390b43feb58043dd9970a94653cd341dd6a37117fbacc7b6089?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                  </div>
                  <div className="text-xs font-medium text-center text-gray-500">
                    (123 reviews)
                  </div>
                </div>
              </div>
              <Link to="/product-details">
                <div className="justify-center items-center p-2 mx-5 mt-2.5 text-lg text-center text-white rounded-xl bg-slate-800 max-md:px-5 max-md:mx-2.5">
                  Add to cart
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-5 mx-auto w-full bg-white rounded-2xl max-md:mt-6">
              <div className="flex gap-5 justify-between items-start pt-2 pr-2 pb-4 pl-16 mx-5 bg-gray-100 rounded-xl max-md:pl-5 max-md:mx-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b026f8305d698f8dd117dbc97cd1aad5e305fe7e1160e608fcfd730a0f9ee5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 mt-2.5 max-w-full aspect-[0.89] w-[114px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6438d3969c186faa380727b79c107a6eac052fb52e191c32243c4034fe3db9b6?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 w-8 aspect-square fill-white"
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <div className="flex flex-col text-center">
                  <div className="flex gap-5 justify-between px-5 text-base whitespace-nowrap text-slate-800">
                    <div className="font-medium">Beats</div>
                    <div>$445.00</div>
                  </div>
                  <div className="justify-center px-5 mt-1 text-xs font-medium text-gray-500">
                    True Wireless Noise Cancelling Earbuds
                  </div>
                </div>
                <div className="flex gap-1 px-5 mt-2">
                  <div className="flex gap-1.5 justify-between self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbfe5263ee1fca358ff6dafbae97f277d310d09d82089f84348460885d20dfae?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/87fa9d6141a2abfb58a521e44475005148a0b2e5a5ae03d9b8e0a3d235ac8488?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d4ebade019a4d92cda916bab36b43c606cbb716f1fc5b4d68cd748fde09cbf?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c4b4751908451dd22eded17df3548bf4c55b7c4d07ed96a11776e5b4d7a9450?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e784a3fa2d79de9e329de7909d3978ed81a2af54e2c9d90e60db314b037777b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                  </div>
                  <div className="text-xs font-medium text-center text-gray-500">
                    (234 reviews)
                  </div>
                </div>
              </div>
              <div className="justify-center items-center p-2 mx-5 mt-2.5 text-lg text-center text-white rounded-xl bg-slate-800 max-md:px-5 max-md:mx-2.5">
                Add to cart
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-5 mx-auto w-full bg-white rounded-2xl max-md:mt-6">
              <div className="flex gap-5 justify-between items-start pt-2 pr-2 pb-4 pl-20 mx-5 bg-gray-100 rounded-xl max-md:pl-5 max-md:mx-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f395fd1bd91dc9094b67ae3c11e119a324cbd2013941cae7c13f27b6a3059d91?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f395fd1bd91dc9094b67ae3c11e119a324cbd2013941cae7c13f27b6a3059d91?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f395fd1bd91dc9094b67ae3c11e119a324cbd2013941cae7c13f27b6a3059d91?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f395fd1bd91dc9094b67ae3c11e119a324cbd2013941cae7c13f27b6a3059d91?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f395fd1bd91dc9094b67ae3c11e119a324cbd2013941cae7c13f27b6a3059d91?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f395fd1bd91dc9094b67ae3c11e119a324cbd2013941cae7c13f27b6a3059d91?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f395fd1bd91dc9094b67ae3c11e119a324cbd2013941cae7c13f27b6a3059d91?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f395fd1bd91dc9094b67ae3c11e119a324cbd2013941cae7c13f27b6a3059d91?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 mt-2.5 aspect-[0.71] w-[91px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6438d3969c186faa380727b79c107a6eac052fb52e191c32243c4034fe3db9b6?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 w-8 aspect-square fill-white"
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <div className="flex flex-col text-center">
                  <div className="flex gap-5 justify-between px-5 text-base text-slate-800">
                    <div className="font-medium">Soundcore Anker P20i </div>
                    <div>$376.00</div>
                  </div>
                  <div className="justify-center px-5 mt-1 text-xs font-medium text-gray-500">
                    True Wireless Earbuds with Big Bass
                  </div>
                </div>
                <div className="flex gap-1 px-5 mt-2">
                  <div className="flex gap-1.5 justify-between self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbfe5263ee1fca358ff6dafbae97f277d310d09d82089f84348460885d20dfae?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/87fa9d6141a2abfb58a521e44475005148a0b2e5a5ae03d9b8e0a3d235ac8488?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d4ebade019a4d92cda916bab36b43c606cbb716f1fc5b4d68cd748fde09cbf?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c4b4751908451dd22eded17df3548bf4c55b7c4d07ed96a11776e5b4d7a9450?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e784a3fa2d79de9e329de7909d3978ed81a2af54e2c9d90e60db314b037777b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                  </div>
                  <div className="text-xs font-medium text-center text-gray-500">
                    (123 reviews)
                  </div>
                </div>
              </div>
              <div className="justify-center items-center p-2 mx-5 mt-2.5 text-lg text-center text-white rounded-xl bg-slate-800 max-md:px-5 max-md:mx-2.5">
                Add to cart
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-5 w-full bg-white rounded-2xl max-md:mt-6">
              <div className="flex justify-center items-center px-16 py-5 mx-5 bg-gray-100 rounded-xl max-md:px-5 max-md:mx-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9629ce0a52f41ebb161d414a334075a14acdf1b202e1ccd1d337fbeb2644f809?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9629ce0a52f41ebb161d414a334075a14acdf1b202e1ccd1d337fbeb2644f809?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9629ce0a52f41ebb161d414a334075a14acdf1b202e1ccd1d337fbeb2644f809?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9629ce0a52f41ebb161d414a334075a14acdf1b202e1ccd1d337fbeb2644f809?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9629ce0a52f41ebb161d414a334075a14acdf1b202e1ccd1d337fbeb2644f809?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9629ce0a52f41ebb161d414a334075a14acdf1b202e1ccd1d337fbeb2644f809?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9629ce0a52f41ebb161d414a334075a14acdf1b202e1ccd1d337fbeb2644f809?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9629ce0a52f41ebb161d414a334075a14acdf1b202e1ccd1d337fbeb2644f809?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="max-w-full aspect-[0.81] w-[104px]"
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <div className="flex flex-col text-center">
                  <div className="flex gap-5 justify-between px-5 text-base text-slate-800">
                    <div className="font-medium">Apple AirPods 2</div>
                    <div>$450.00</div>
                  </div>
                  <div className="justify-center px-5 mt-1 text-xs font-medium text-gray-500">
                    (2nd Gen) With Charging Case (USB‑C)
                  </div>
                </div>
                <div className="flex gap-1 px-5 mt-2">
                  <div className="flex gap-1.5 justify-between self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbfe5263ee1fca358ff6dafbae97f277d310d09d82089f84348460885d20dfae?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/87fa9d6141a2abfb58a521e44475005148a0b2e5a5ae03d9b8e0a3d235ac8488?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d4ebade019a4d92cda916bab36b43c606cbb716f1fc5b4d68cd748fde09cbf?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c4b4751908451dd22eded17df3548bf4c55b7c4d07ed96a11776e5b4d7a9450?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b895674ff910390b43feb58043dd9970a94653cd341dd6a37117fbacc7b6089?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                  </div>
                  <div className="text-xs font-medium text-center text-gray-500">
                    (123 reviews)
                  </div>
                </div>
              </div>
              <div className="justify-center items-center p-2 mx-5 mt-2.5 text-lg text-center text-white rounded-xl bg-slate-800 max-md:px-5 max-md:mx-2.5">
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center px-5 mt-16 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-5 mx-auto w-full bg-white rounded-2xl max-md:mt-6">
              <div className="flex gap-2 items-start pt-2 pr-2 pb-4 pl-12 mx-5 bg-gray-100 rounded-xl max-md:pl-5 max-md:mx-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b6863907a757414f908faf87ba79f145afddf70ececb9066d41019f793dd6974?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6863907a757414f908faf87ba79f145afddf70ececb9066d41019f793dd6974?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6863907a757414f908faf87ba79f145afddf70ececb9066d41019f793dd6974?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6863907a757414f908faf87ba79f145afddf70ececb9066d41019f793dd6974?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6863907a757414f908faf87ba79f145afddf70ececb9066d41019f793dd6974?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6863907a757414f908faf87ba79f145afddf70ececb9066d41019f793dd6974?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6863907a757414f908faf87ba79f145afddf70ececb9066d41019f793dd6974?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6863907a757414f908faf87ba79f145afddf70ececb9066d41019f793dd6974?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 mt-2.5 max-w-full aspect-[1.23] w-[158px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6438d3969c186faa380727b79c107a6eac052fb52e191c32243c4034fe3db9b6?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 w-8 aspect-square fill-white"
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <div className="flex flex-col text-center">
                  <div className="flex gap-5 justify-between px-5 text-base text-slate-800">
                    <div className="font-medium">JBL Vibe 200TWS</div>
                    <div>$47.00</div>
                  </div>
                  <div className="justify-center px-5 mt-1 text-xs font-medium text-gray-500">
                    True Wireless Earbuds
                  </div>
                </div>
                <div className="flex gap-1 px-5 mt-2">
                  <div className="flex gap-1.5 justify-between self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a93b137ff1e5a7c015a2f448d541862f3351dd865902a69e4b06d88bbdae0949?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0598dd08e6972325ba7e7c813240f67c03c92216bcea0ec5c6c53fa836a592?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/76411733946f124eefddde75186235561bf09ec86989865feadba8e8b287173d?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6246039efbb5273dca5550d3a671e65e91e66eb179c21a571c5b0eb3bfff685b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/06179e9694f9d8398cb53bb81375702af3b18cdec58ada2e90118ad9d4a32ae5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                  </div>
                  <div className="text-xs font-medium text-center text-gray-500">
                    (123 reviews)
                  </div>
                </div>
              </div>
              <div className="justify-center items-center p-2 mx-5 mt-2.5 text-lg text-center text-white rounded-xl bg-slate-800 max-md:px-5 max-md:mx-2.5">
                Add to cart
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-5 mx-auto w-full bg-white rounded-2xl max-md:mt-6">
              <div className="flex gap-5 justify-between items-start pt-2 pr-2 pb-4 pl-20 mx-5 bg-gray-100 rounded-xl max-md:pl-5 max-md:mx-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/245f4e19e41b7b06538f16e10ca8e8ec6b56d5512ffcfaac0ebc831f62e53278?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/245f4e19e41b7b06538f16e10ca8e8ec6b56d5512ffcfaac0ebc831f62e53278?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/245f4e19e41b7b06538f16e10ca8e8ec6b56d5512ffcfaac0ebc831f62e53278?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/245f4e19e41b7b06538f16e10ca8e8ec6b56d5512ffcfaac0ebc831f62e53278?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/245f4e19e41b7b06538f16e10ca8e8ec6b56d5512ffcfaac0ebc831f62e53278?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/245f4e19e41b7b06538f16e10ca8e8ec6b56d5512ffcfaac0ebc831f62e53278?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/245f4e19e41b7b06538f16e10ca8e8ec6b56d5512ffcfaac0ebc831f62e53278?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/245f4e19e41b7b06538f16e10ca8e8ec6b56d5512ffcfaac0ebc831f62e53278?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 mt-2.5 aspect-[0.72] w-[93px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6438d3969c186faa380727b79c107a6eac052fb52e191c32243c4034fe3db9b6?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 w-8 aspect-square fill-white"
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <div className="flex flex-col text-center">
                  <div className="flex gap-5 justify-between px-5 text-base text-slate-800">
                    <div className="font-medium">SAMSUNG Galaxy Buds</div>
                    <div>$75.00</div>
                  </div>
                  <div className="justify-center px-5 mt-1 text-xs font-medium text-gray-500">
                    A perfect balance for high-fidelity audio
                  </div>
                </div>
                <div className="flex gap-1 px-5 mt-2">
                  <div className="flex gap-1.5 justify-between self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a93b137ff1e5a7c015a2f448d541862f3351dd865902a69e4b06d88bbdae0949?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0598dd08e6972325ba7e7c813240f67c03c92216bcea0ec5c6c53fa836a592?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/76411733946f124eefddde75186235561bf09ec86989865feadba8e8b287173d?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6246039efbb5273dca5550d3a671e65e91e66eb179c21a571c5b0eb3bfff685b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/06179e9694f9d8398cb53bb81375702af3b18cdec58ada2e90118ad9d4a32ae5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                  </div>
                  <div className="text-xs font-medium text-center text-gray-500">
                    (123 reviews)
                  </div>
                </div>
              </div>
              <div className="justify-center items-center p-2 mx-5 mt-2.5 text-lg text-center text-white rounded-xl bg-slate-800 max-md:px-5 max-md:mx-2.5">
                Add to cart
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-5 mx-auto w-full bg-white rounded-2xl max-md:mt-6">
              <div className="flex gap-5 justify-between items-start pt-2 pb-4 pl-20 mx-5 bg-gray-100 rounded-xl max-md:pl-5 max-md:mx-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a041275e757d955e8146600a68ade2a46275a83264f2d31d6e35454f8b81d33c?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a041275e757d955e8146600a68ade2a46275a83264f2d31d6e35454f8b81d33c?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a041275e757d955e8146600a68ade2a46275a83264f2d31d6e35454f8b81d33c?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a041275e757d955e8146600a68ade2a46275a83264f2d31d6e35454f8b81d33c?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a041275e757d955e8146600a68ade2a46275a83264f2d31d6e35454f8b81d33c?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a041275e757d955e8146600a68ade2a46275a83264f2d31d6e35454f8b81d33c?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a041275e757d955e8146600a68ade2a46275a83264f2d31d6e35454f8b81d33c?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a041275e757d955e8146600a68ade2a46275a83264f2d31d6e35454f8b81d33c?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 mt-2.5 aspect-[0.67] w-[86px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6438d3969c186faa380727b79c107a6eac052fb52e191c32243c4034fe3db9b6?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 w-8 aspect-square fill-white"
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <div className="flex flex-col text-center">
                  <div className="flex gap-5 justify-between px-5 text-base text-slate-800">
                    <div className="font-medium">Soundcore Life P3i</div>
                    <div>$35.00</div>
                  </div>
                  <div className="justify-center px-5 mt-1 text-xs font-medium text-gray-500">
                    Hybrid Active Noise Cancelling
                  </div>
                </div>
                <div className="flex gap-1 px-5 mt-2">
                  <div className="flex gap-1.5 justify-between self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a93b137ff1e5a7c015a2f448d541862f3351dd865902a69e4b06d88bbdae0949?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0598dd08e6972325ba7e7c813240f67c03c92216bcea0ec5c6c53fa836a592?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/76411733946f124eefddde75186235561bf09ec86989865feadba8e8b287173d?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6246039efbb5273dca5550d3a671e65e91e66eb179c21a571c5b0eb3bfff685b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/06179e9694f9d8398cb53bb81375702af3b18cdec58ada2e90118ad9d4a32ae5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                  </div>
                  <div className="text-xs font-medium text-center text-gray-500">
                    (123 reviews)
                  </div>
                </div>
              </div>
              <div className="justify-center items-center p-2 mx-5 mt-2.5 text-lg text-center text-white rounded-xl bg-slate-800 max-md:px-5 max-md:mx-2.5">
                Add to cart
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-5 mx-auto w-full bg-white rounded-2xl max-md:mt-6">
              <div className="flex gap-5 justify-between items-start pt-2 pr-2 pb-4 pl-20 mx-5 bg-gray-100 rounded-xl max-md:pl-5 max-md:mx-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e63f9eaa3a128a81af90b91b5051eccd3afdc773c1392bc846952ac2536e2c0f?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 mt-2.5 aspect-[0.76] w-[98px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6438d3969c186faa380727b79c107a6eac052fb52e191c32243c4034fe3db9b6?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                  className="shrink-0 w-8 aspect-square fill-white"
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <div className="flex flex-col text-center">
                  <div className="flex gap-5 justify-between px-5 text-base text-slate-800">
                    <div className="font-medium">Anker Life Q20</div>
                    <div>$105.00</div>
                  </div>
                  <div className="justify-center px-5 mt-1 text-xs font-medium text-gray-500">
                    Hybrid Active Noise Cancelling
                  </div>
                </div>
                <div className="flex gap-1 px-5 mt-2">
                  <div className="flex gap-1.5 justify-between self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a93b137ff1e5a7c015a2f448d541862f3351dd865902a69e4b06d88bbdae0949?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0598dd08e6972325ba7e7c813240f67c03c92216bcea0ec5c6c53fa836a592?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/76411733946f124eefddde75186235561bf09ec86989865feadba8e8b287173d?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6246039efbb5273dca5550d3a671e65e91e66eb179c21a571c5b0eb3bfff685b?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/06179e9694f9d8398cb53bb81375702af3b18cdec58ada2e90118ad9d4a32ae5?apiKey=fbc24afb6ee6470b9b535d59cd9882f6&"
                      className="shrink-0 aspect-[1.09] w-[13px]"
                    />
                  </div>
                  <div className="text-xs font-medium text-center text-gray-500">
                    (123 reviews)
                  </div>
                </div>
              </div>
              <div className="justify-center items-center p-2 mx-5 mt-2.5 text-lg text-center text-white rounded-xl bg-slate-800 max-md:px-5 max-md:mx-2.5">
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
