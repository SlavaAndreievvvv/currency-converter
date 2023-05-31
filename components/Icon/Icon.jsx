import PropTypes from "prop-types";

export const ICON_TYPES = ["logo", "refresh", "swap", "BTC", "UAH"];

export const Icon = ({ name, size, color, className }) => {
  const props = {
    className,
  };
  if (size) {
    props.width = size;
    props.height = size;
  }
  if (color) {
    props.fill = color;
  }
  switch (name) {
    default:
      return null;
    case "logo":
      return (
        <svg
          // className={className}
          {...props}
          width="95"
          height="20"
          viewBox="0 0 95 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M94.4828 10.0723C94.4828 8.90439 94.2402 7.8581 93.755 6.98214C93.2697 6.08185 92.5904 5.40054 91.6927 4.9139C90.795 4.42725 89.8245 4.18393 88.7084 4.18393C87.5924 4.18393 86.5734 4.42725 85.6757 4.93823C84.778 5.44921 84.0744 6.13051 83.5649 7.03081C83.0554 7.9311 82.8128 8.92873 82.8128 10.048C82.8128 11.1673 83.0796 12.1893 83.5891 13.0896C84.0986 13.9898 84.8508 14.6711 85.797 15.1821C86.7432 15.6931 87.8593 15.9364 89.0966 15.9364C90.0914 15.9364 90.9648 15.7904 91.7412 15.4741C92.4448 15.1821 93.0271 14.7928 93.5124 14.2818C93.6094 14.1845 93.6094 14.0142 93.5124 13.8925L92.4205 12.6516C92.3235 12.5299 92.1537 12.5299 92.0324 12.6272C91.256 13.3329 90.2855 13.6735 89.1452 13.6735C88.1504 13.6735 87.3498 13.4302 86.6704 12.9436C86.0154 12.4569 85.6029 11.7756 85.4331 10.9483H94.3858C94.4586 10.5103 94.4828 10.2427 94.4828 10.0723ZM85.4573 9.07472C85.5786 8.22309 85.9426 7.56612 86.5249 7.05514C87.1072 6.54416 87.835 6.30084 88.6842 6.30084C89.5576 6.30084 90.2855 6.56849 90.8678 7.07947C91.4501 7.59045 91.7897 8.27175 91.9111 9.09905H85.4573V9.07472Z"
            fill="white"
          />
          <path
            d="M38.2189 4.13527C37.3212 4.13527 36.4963 4.3056 35.7685 4.64625C35.0163 4.9869 34.434 5.44921 33.9488 6.05752C33.5606 5.42488 33.0511 4.96257 32.3718 4.62192C31.7167 4.3056 30.9403 4.13527 30.0911 4.13527C29.3147 4.13527 28.5869 4.28126 27.9561 4.54892C27.3252 4.81658 26.7915 5.20589 26.3548 5.71687V4.25693H24.0984C23.9528 4.25693 23.8315 4.37859 23.8315 4.52459V15.4011C23.8315 15.5471 23.9528 15.6688 24.0984 15.6688H26.2092C26.3548 15.6688 26.4761 15.5471 26.4761 15.4011V9.90202C26.4761 8.78274 26.743 7.93111 27.2767 7.34713C27.8105 6.76316 28.5383 6.47117 29.436 6.47117C30.261 6.47117 30.8918 6.71449 31.3285 7.22547C31.7652 7.73645 31.9836 8.49075 31.9836 9.48838V15.4255C31.9836 15.5714 32.1049 15.6931 32.2505 15.6931H34.3613C34.5068 15.6931 34.6281 15.5714 34.6281 15.4255V9.90202C34.6281 8.80707 34.895 7.95544 35.4288 7.37147C35.9626 6.78749 36.6904 6.47117 37.5881 6.47117C38.413 6.47117 39.0439 6.71449 39.4806 7.22547C39.9173 7.73645 40.1356 8.49075 40.1356 9.48838V15.4255C40.1356 15.5714 40.257 15.6931 40.4025 15.6931H42.5133C42.6589 15.6931 42.7802 15.5714 42.7802 15.4255V9.17206C42.7802 7.49313 42.3678 6.25218 41.5186 5.40055C40.815 4.57325 39.6747 4.13527 38.2189 4.13527Z"
            fill="white"
          />
          <path
            d="M54.3775 4.88957C53.5041 4.40292 52.5093 4.1596 51.3933 4.1596C50.2772 4.1596 49.2582 4.40292 48.3605 4.9139C47.4628 5.42488 46.7592 6.10618 46.2497 7.00648C45.7402 7.90677 45.4976 8.9044 45.4976 10.0237C45.4976 11.143 45.7645 12.1649 46.274 13.0652C46.7835 13.9655 47.5356 14.6468 48.4818 15.1578C49.428 15.6688 50.5441 15.9121 51.7815 15.9121C52.7762 15.9121 53.6497 15.7661 54.426 15.4498C55.1296 15.1578 55.7119 14.7685 56.1972 14.2575C56.2942 14.1602 56.2942 13.9898 56.1972 13.8682L55.1054 12.6272C55.0083 12.5056 54.8385 12.5056 54.7172 12.6029C53.9408 13.3085 52.9703 13.6492 51.83 13.6492C50.8353 13.6492 50.0346 13.4059 49.3553 12.9192C48.6759 12.4326 48.2877 11.7513 48.1179 10.924H57.0706C57.0949 10.5833 57.1191 10.3157 57.1191 10.121C57.1191 8.95306 56.8765 7.90677 56.3913 7.03081C55.9303 6.08185 55.251 5.37621 54.3775 4.88957ZM48.1422 9.07472C48.2635 8.22309 48.6274 7.56612 49.2097 7.05514C49.792 6.54416 50.5198 6.30084 51.369 6.30084C52.2425 6.30084 52.9703 6.5685 53.5526 7.07947C54.1349 7.59045 54.4746 8.27176 54.5959 9.09906H48.1422V9.07472Z"
            fill="white"
          />
          <path
            d="M66.363 4.15961C64.5919 4.20828 63.3303 4.81658 62.6024 5.9602V4.57326C62.6024 4.42727 62.4811 4.30561 62.3355 4.30561H60.346C60.2004 4.30561 60.0791 4.42727 60.0791 4.57326V15.4498C60.0791 15.5958 60.2004 15.7175 60.346 15.7175H62.4568C62.6024 15.7175 62.7237 15.5958 62.7237 15.4498V10.1697C62.7237 9.02607 63.0149 8.15011 63.5971 7.5418C64.1794 6.93349 65.0043 6.64151 66.0234 6.64151C66.2175 6.64151 66.4116 6.66584 66.6542 6.7145V4.4516C66.6784 4.28127 66.5329 4.13528 66.363 4.15961Z"
            fill="white"
          />
          <path
            d="M80.1197 4.28126H78.1302C77.9846 4.28126 77.8633 4.40293 77.8633 4.54892V5.78987C77.4023 5.23022 76.8443 4.81658 76.1649 4.54892C75.4856 4.28126 74.7335 4.13527 73.9086 4.13527C72.8168 4.13527 71.8463 4.35426 70.9728 4.81658C70.0994 5.27889 69.3958 5.91153 68.9106 6.76316C68.4011 7.59046 68.1584 8.56375 68.1584 9.63437C68.1584 10.7293 68.4011 11.6783 68.9106 12.5299C69.4201 13.3815 70.0994 14.0385 70.9728 14.5008C71.8463 14.9631 72.8168 15.2065 73.9086 15.2065C74.6849 15.2065 75.4128 15.0848 76.0679 14.8172C76.723 14.5495 77.281 14.1845 77.742 13.6735V14.2818C77.742 15.4498 77.4508 16.3258 76.8685 16.8854C76.2862 17.445 75.3643 17.737 74.1027 17.737C73.3263 17.737 72.5499 17.6154 71.7735 17.372C71.1184 17.1531 70.5846 16.8854 70.1237 16.5691C70.0024 16.4717 69.8083 16.4961 69.7355 16.6421L68.8135 18.175C68.7407 18.2967 68.765 18.467 68.8863 18.54C69.4929 19.0023 70.245 19.343 71.1184 19.5863C72.1132 19.8539 73.1322 19.9999 74.2482 19.9999C78.3485 19.9999 80.4108 17.9804 80.4108 13.9655V4.54892C80.4108 4.40293 80.2895 4.28126 80.1197 4.28126ZM76.7957 12.0189C76.1407 12.6272 75.3158 12.9192 74.2968 12.9192C73.2777 12.9192 72.4286 12.6272 71.7978 12.0189C71.1427 11.4106 70.8273 10.632 70.8273 9.6587C70.8273 8.70974 71.1427 7.93111 71.7978 7.3228C72.4528 6.7145 73.2777 6.42251 74.2968 6.42251C75.3158 6.42251 76.1407 6.7145 76.7957 7.3228C77.4508 7.93111 77.7662 8.70974 77.7662 9.6587C77.7662 10.632 77.4508 11.4106 76.7957 12.0189Z"
            fill="white"
          />
          <path
            d="M7.867 1.62902C7.867 1.53169 7.76995 1.43436 7.6729 1.43436H5.41652C5.31947 1.43436 5.22243 1.53169 5.22243 1.62902V12.7975L0.0545898 17.9803C-0.0181966 18.0533 -0.0181966 18.175 0.0545898 18.248L1.65589 19.8539C1.72868 19.9269 1.84999 19.9269 1.94704 19.8539L7.81847 13.9412C7.867 13.8925 7.867 13.8438 7.867 13.7952V1.62902Z"
            fill="white"
          />
          <path
            d="M11.1666 19.8539L8.5706 17.226C8.49781 17.153 8.49781 17.0314 8.5706 16.9584L10.1719 15.3524C10.2447 15.2794 10.366 15.2794 10.4388 15.3524L13.0348 17.9803C13.1076 18.0533 13.1076 18.175 13.0348 18.248L11.4578 19.8539C11.3607 19.9512 11.2394 19.9512 11.1666 19.8539Z"
            fill="white"
          />
          <path
            d="M11.0453 8.36907L6.67815 3.96493C6.60537 3.89193 6.48406 3.89193 6.38701 3.96493L2.04409 8.36907C1.9713 8.44207 1.84999 8.44207 1.75294 8.36907L0.175901 6.76314C0.103114 6.69014 0.103114 6.56848 0.175901 6.49549L6.41127 0.19342C6.48406 0.120423 6.60537 0.120423 6.70242 0.19342L12.9378 6.49549C13.0106 6.56848 13.0106 6.69014 12.9378 6.76314L11.3365 8.36907C11.2394 8.4664 11.1181 8.4664 11.0453 8.36907Z"
            fill="white"
          />
        </svg>
      );
    case "refresh":
      return (
        <svg
          // className={className}
          {...props}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.6498 2.35C12.1998 0.9 10.2098 0 7.99977 0C3.57977 0 0.00976562 3.58 0.00976562 8C0.00976562 12.42 3.57977 16 7.99977 16C11.7298 16 14.8398 13.45 15.7298 10H13.6498C12.8298 12.33 10.6098 14 7.99977 14C4.68977 14 1.99977 11.31 1.99977 8C1.99977 4.69 4.68977 2 7.99977 2C9.65977 2 11.1398 2.69 12.2198 3.78L8.99977 7H15.9998V0L13.6498 2.35Z" />
        </svg>
      );
    case "swap":
      return (
        <svg
          // className={className}
          {...props}
          viewBox="0 0 16 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.00015 8.41424L5.00015 5.41424L5.00015 18H7.00015L7.00015 0.585815L0.585938 7.00003L2.00015 8.41424ZM9.00015 6.00003L9.00015 23.4142L15.4144 17L14.0002 15.5858L11.0002 18.5858L11.0002 6.00003H9.00015Z"
          />
        </svg>
      );
    case "BTC":
      return (
        <svg
          // className={className}
          {...props}
          viewBox="0 -0.5 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.2538 16.1292C33.2538 25.0371 26.0329 32.2584 17.1255 32.2584C8.21799 32.2584 0.99707 25.0371 0.99707 16.1292C0.99707 7.22128 8.21799 0 17.1255 0C26.0329 0 33.2538 7.22128 33.2538 16.1292ZM21.0002 10.1366C23.2438 10.9071 24.8849 12.0607 24.5629 14.2077C24.3291 15.7799 23.4543 16.5403 22.2921 16.8065C23.8866 17.6335 24.4301 19.2029 23.9251 21.1005C22.9664 23.8314 20.6874 24.0613 17.6562 23.4905L16.9202 26.4261L15.1434 25.9844L15.8693 23.0882C15.4087 22.9742 14.9379 22.8522 14.4529 22.7221L13.724 25.6325L11.9492 25.1908L12.6842 22.2491L9.10534 21.3496L9.98817 19.3226C9.98817 19.3226 11.2982 19.6685 11.28 19.6433C11.7832 19.7673 12.0069 19.4406 12.095 19.2238L14.0895 11.256C14.1117 10.8798 13.9811 10.4059 13.2613 10.2264C13.2886 10.2072 11.9705 9.90669 11.9705 9.90669L12.4433 8.01585L16.0272 8.90026L16.7562 5.99188L18.532 6.43358L17.8182 9.28448C18.2961 9.39238 18.776 9.5023 19.2427 9.61828L19.9514 6.78553L21.7282 7.22724L21.0002 10.1366ZM16.7488 14.9882C17.9591 15.3091 20.5928 16.0074 21.0519 14.1765C21.5202 12.3033 18.9615 11.7376 17.7087 11.4606L17.7086 11.4606L17.7085 11.4606C17.5666 11.4292 17.4414 11.4015 17.3393 11.3761L16.4545 14.9117C16.5388 14.9325 16.6378 14.9588 16.7488 14.9882ZM15.3775 20.6807C16.8271 21.0626 19.9976 21.8977 20.5021 19.8803C21.0185 17.8175 17.9445 17.1305 16.4446 16.7952L16.4441 16.7951C16.2767 16.7577 16.129 16.7247 16.008 16.6946L15.032 20.5913C15.1311 20.6158 15.2472 20.6464 15.3771 20.6806L15.3775 20.6807Z"
            fill="#F7931A"
          />
        </svg>
      );
    case "UAH":
      return (
        <svg
          // className={className}
          {...props}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#2A5ADA" />
          <path
            d="M0 12C-1.37766e-07 13.5759 0.310389 15.1363 0.913445 16.5922C1.5165 18.0481 2.40042 19.371 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C13.5759 24 15.1363 23.6896 16.5922 23.0866C18.0481 22.4835 19.371 21.5996 20.4853 20.4853C21.5996 19.371 22.4835 18.0481 23.0866 16.5922C23.6896 15.1363 24 13.5759 24 12H12L0 12Z"
            fill="#DAC82A"
          />
        </svg>
      );
  }
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(ICON_TYPES).isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
};