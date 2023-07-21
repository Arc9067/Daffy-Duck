import React from "react";
import Logo2 from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="py-14 w-full">
      <div className="container flex flex-col gap-8">
        <img
          src={Logo2}
          alt=""
          className="w-20"
          data-aos="flip-left"
          data-aod-duration="600"
        />
        <div
          data-aos="fade-up"
          className="text-white text-2xl font-normal max-w-xl"
        >
          Step into the devious world of "Daffy Duck" and unleash chaos on the
          city of Ethereum! 🦆
        </div>

        <div className="flex items-center gap-6">
          <a href="" target="_blank" className="">
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1512_231)">
                <path
                  d="M24 0.500122C10.746 0.500122 0 11.2461 0 24.5001C0 37.7541 10.746 48.5001 24 48.5001C37.254 48.5001 48 37.7541 48 24.5001C48 11.2461 37.254 0.500122 24 0.500122ZM35.788 16.9421L31.848 35.5021C31.558 36.8181 30.774 37.1381 29.68 36.5181L23.68 32.0981L20.788 34.8861C20.6463 35.0696 20.4645 35.2181 20.2565 35.3204C20.0485 35.4226 19.8198 35.4759 19.588 35.4761H19.578L20.004 29.3681L31.124 19.3241C31.604 18.8981 31.016 18.6561 30.378 19.0821L16.64 27.7341L10.72 25.8861C9.44 25.4801 9.404 24.6061 10.99 23.9781L34.122 15.0621C35.198 14.6701 36.134 15.3181 35.786 16.9441L35.788 16.9421Z"
                  fill="#F15D56"
                />
              </g>
              <defs>
                <clipPath id="clip0_1512_231">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="" target="_blank" className="">
            <svg
              width="60"
              height="49"
              viewBox="0 0 60 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.0588 6.1844C56.8883 7.14903 54.5506 7.79868 52.0997 8.09397C54.6047 6.59289 56.5192 4.2207 57.4297 1.3908C55.0871 2.77868 52.4934 3.7876 49.7324 4.32898C47.5275 1.97155 44.3728 0.5 40.8933 0.5C33.068 0.5 27.3196 7.79868 29.0864 15.3779C19.0218 14.871 10.0892 10.0478 4.11443 2.71962C0.940019 8.16287 2.47063 15.2893 7.86466 18.8968C5.88127 18.8328 4.016 18.2865 2.38204 17.381C2.24915 22.9915 6.27499 28.2428 12.1021 29.4142C10.3993 29.8768 8.52907 29.9851 6.62935 29.6209C8.1698 34.4342 12.6533 37.9334 17.9489 38.0318C12.8453 42.0281 6.43248 43.8147 0 43.0568C5.3645 46.4969 11.7281 48.5 18.5691 48.5C41.0704 48.5 53.7779 29.4978 53.0102 12.4545C55.3823 10.7516 57.4346 8.61566 59.0588 6.1844Z"
                fill="#F15D56"
              />
            </svg>
          </a>
          <a href="" className="">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1512_234)">
                <path
                  d="M10.0549 23.3266C10.0549 22.2187 10.965 21.3087 12.0709 21.3087H15.4712C16.5791 21.3087 17.5276 22.2187 17.5276 23.3669V36.1906C17.9231 36.0715 18.3973 35.9525 18.9522 35.8335C19.7029 35.6357 20.2578 34.9637 20.2578 34.1707V18.2597C20.2578 17.1519 21.1679 16.2015 22.3141 16.2015H25.7144C26.8223 16.2015 27.7708 17.1115 27.7708 18.2597V33.0245C27.7708 33.0245 28.6021 32.6674 29.4316 32.3122C30.0652 32.0357 30.4607 31.4424 30.4607 30.7282V13.116C30.4607 12.0082 31.3708 11.0578 32.4786 11.0578H35.8789C36.9868 11.0578 37.8968 11.9679 37.8968 13.116V27.6427C40.8229 25.5058 43.8296 22.933 46.2028 19.8456C46.9151 18.9355 47.1128 17.7471 46.7173 16.6392C42.3666 4.13234 28.6847 -2.51854 16.1874 1.83602C3.69011 6.19058 -2.95309 19.884 1.39571 32.3928C1.86995 33.8175 2.50355 35.1634 3.25427 36.469C3.84755 37.4981 4.95539 38.0914 6.14195 37.9723C6.77555 37.932 7.56659 37.8533 8.55347 37.7343C9.42323 37.6555 10.0568 36.9029 10.0568 36.0312L10.0549 23.3266Z"
                  fill="#F15D56"
                />
                <path
                  d="M9.97656 43.909C20.694 51.7061 35.6834 49.3311 43.4729 38.606C46.4393 34.4895 48.0598 29.5416 48.0598 24.4767C48.0598 23.9218 48.0194 23.3688 47.981 22.814C39.2431 35.9141 23.0671 42.0485 9.97656 43.909Z"
                  fill="#F15D56"
                />
              </g>
              <defs>
                <clipPath id="clip0_1512_234">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(0.0625 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="" className="">
            <svg
              width="42"
              height="49"
              viewBox="0 0 42 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1512_240)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5689 3.23949C12.7126 4.72739 10.3758 5.98645 10.3763 6.03766C10.3775 6.16984 17.2315 9.64092 17.4747 9.63246C17.5854 9.62876 18.3882 9.25923 19.2586 8.81139L20.8414 7.99729L22.57 8.88583L24.2985 9.77453L27.1293 8.50253C31.3947 6.58582 31.8378 6.37578 31.7683 6.30522C31.6762 6.21159 30.1462 5.38969 25.9954 3.20443C23.9894 2.14827 22.0424 1.11274 21.6686 0.903204C21.2949 0.693665 20.9381 0.525104 20.8757 0.528367C20.8134 0.53163 18.4253 1.75165 15.5689 3.23949ZM3.04123 9.72675L0.0678643 11.2626V18.0031C0.0678643 21.7105 0.106908 24.7436 0.154799 24.7436C0.202525 24.7436 1.66543 24.1095 3.40562 23.3344L6.56961 21.9252V14.8202L8.11575 15.6626C9.30718 16.3111 10.4993 16.9583 11.6922 17.6042L13.7224 18.7034L14.6258 18.2949C15.1924 18.0383 15.7579 17.7792 16.3222 17.5176C16.7582 17.3145 17.8287 16.8324 18.7008 16.446C19.573 16.0594 20.3804 15.6707 20.4948 15.5821C20.6469 15.4644 18.7925 14.4397 13.636 11.7917C9.74909 9.79571 6.44419 8.16895 6.29178 8.17675C6.13936 8.18454 4.67662 8.88196 3.04123 9.72675ZM32.3042 10.1581C30.2791 11.0723 28.6209 11.8568 28.619 11.9015C28.6172 11.9462 29.7209 12.6025 31.0718 13.3597C32.4226 14.117 33.5279 14.7772 33.5279 14.8269C33.5279 14.8765 32.3326 15.4557 30.8718 16.1142C29.4107 16.7726 25.7179 18.4402 22.6653 19.8202L12.437 24.4436C9.86406 25.6067 7.54486 26.655 7.28323 26.7735C2.02788 29.1526 0.58339 29.8127 0.385021 29.926C0.185547 30.0401 0.140365 30.7029 0.104861 34.0295L0.0625 37.9971L2.72142 39.3519L5.38029 40.7066L9.06722 39.0427C11.0951 38.1276 12.7541 37.3309 12.7541 37.2722C12.7541 37.2137 12.3794 36.9696 11.9216 36.7295C11.4636 36.4893 10.5182 35.9578 9.82043 35.548C9.12274 35.1381 8.42704 34.7621 8.2743 34.7123C8.12161 34.6625 7.99889 34.5755 8.00138 34.5188C8.00393 34.4622 9.62748 33.691 11.6091 32.8049C15.4579 31.0841 18.4034 29.7578 24.7268 26.8982C27.5544 25.6198 30.3824 24.3421 33.2108 23.0652C35.6965 21.9432 38.5866 20.6329 39.6332 20.1533L41.5361 19.2813L41.5784 15.2686L41.621 11.256L38.9242 9.87175C37.4409 9.11052 36.173 8.48953 36.1065 8.4918C36.0401 8.4939 34.3291 9.24363 32.3042 10.1581ZM40.8136 24.6346C40.4162 24.8287 39.6313 25.1921 39.0693 25.4421C38.5073 25.6922 37.4409 26.1733 36.6995 26.5116L35.3516 27.1264L35.3208 30.6493C35.3038 32.5868 35.2325 34.1634 35.1623 34.1532C35.0027 34.1295 32.4764 32.8339 29.9369 31.4731C28.1041 30.4911 27.9889 30.4521 27.5582 30.6654C27.3093 30.7887 25.821 31.4562 24.2511 32.1488C22.6811 32.8414 21.3455 33.4533 21.2827 33.5087C21.22 33.564 24.3797 35.2765 28.3044 37.3145L35.4399 41.0199L38.4881 39.4431C40.1644 38.5759 41.5899 37.7849 41.6555 37.6855C41.8033 37.4618 41.7906 24.2509 41.6427 24.2688C41.5842 24.2758 41.211 24.4405 40.8136 24.6346ZM23.934 40.1408C23.4052 40.3681 22.8766 40.5957 22.3482 40.8237C20.7524 41.5141 21.0651 41.537 19.1666 40.5919C17.9021 39.9624 17.357 39.7682 17.1205 39.8625C16.943 39.9332 15.4157 40.6203 13.7262 41.3894C12.0369 42.1585 10.596 42.7877 10.5244 42.7877C9.81557 42.7877 10.9939 43.4917 15.541 45.7854L20.8737 48.4752L23.1174 47.3675C24.3515 46.7582 26.8405 45.5382 28.6488 44.6563C30.4569 43.7743 31.9139 43.0297 31.8867 43.0016C31.8592 42.9737 30.3441 42.1957 28.5197 41.2728L25.2026 39.595L23.934 40.1408Z"
                  fill="#F15D56"
                />
              </g>
              <defs>
                <clipPath id="clip0_1512_240">
                  <rect
                    width="41.7408"
                    height="48"
                    fill="white"
                    transform="translate(0.0625 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
