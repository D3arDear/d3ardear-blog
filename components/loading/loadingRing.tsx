import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import TextRing from "../icons/textRing";

const ringVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: { delay: 2 },
    },
  },
};

export const LoadingRing = () => {
  return (
    <RingContainer
      initial="hidden"
      animate="visible"
      height="30%"
      width="30%"
      viewBox="0 0 128 128"
      variants={ringVariant}>
      <g clipPath="url(#a)" fill="currentColor">
        <path d="m120.85 67.044-.188 2.712-5.908-.411.344-4.941 8.931.621-.344 4.941-1.169-.081.257-3.694-6.64-.462-.174 2.51 3.678.255.106-1.527 1.107.077ZM121.911 74.436l.231-1.117 1.117.23-.686 3.32-1.117-.23.215-1.04-6.519-1.347-.231 1.117-1.132-.234.683-3.305 1.132.234-.212 1.025 6.519 1.347ZM112.233 80.622l.388-1.123 7.384 2.552.632-1.832 1.079.373-1.623 4.696-1.078-.372.602-1.743-7.384-2.551ZM114.217 90.833l1.166-2.23 2.686 1.406.55-1.053-7.933-4.15-.55 1.053 4.25 2.223-1.166 2.23-4.25-2.224-.58 1.108 7.934 4.15.579-1.108-2.686-1.405ZM111.433 100.718l-7.241-5.267 2.914-4.005 7.24 5.267-.698.96-6.331-4.605-1.479 2.034 6.33 4.605-.735 1.011ZM107.323 103.872l-1.825-1.799-1.327 1.346 1.825 1.799 1.327-1.346Zm-4.753-6.352 6.377 6.285-3.027 3.071-2.616-2.577-.449.456-3.762-3.707 3.477-3.528Zm.023 1.69-1.765 1.792 2.103 2.073 1.766-1.792-2.104-2.073ZM98.126 104.467l-1.209-1.495-.923.747 1.208 1.494.924-.746ZM94.914 114.029l2.135-1.359-3.581-5.629-3.019 1.921-.604-.949 4.074-2.592 4.806 7.553-4.18 2.659-1.366-2.148.988-.629.747 1.173ZM86.912 110.976l-2.299 1.023 2.688 6.038 2.298-1.023-2.687-6.038Zm.589-1.596 3.64 8.179-4.524 2.014-3.641-8.179 4.525-2.014ZM76.14 113.549l1.246-.297 1.82 7.629 2.417-.576-1.82-7.63 1.155-.275 2.078 8.708-8.405 2.006-2.078-8.709 1.216-.29 1.82 7.63 2.371-.566-1.82-7.63ZM69.234 125.328l1.555-12.86-1.175-.163-1.555 12.861 1.175.162ZM64.36 116.248l-2.047-.056-.322.367-.156 5.763.3.477 2.046.055.178-6.606Zm1.22-1.187-.242 8.95-3.515-.095-1.38-2.116.133-4.951 1.645-1.878 3.358.09ZM53.663 117.082l.333-1.861 2.476.443-.16.892 1.17.209.365-2.046-4.89-.874-.705 3.937 1.784.319-2.072 1.471-.215 1.199 4.858.885.206-1.153-3.03-.542 2.099-1.53.165-.923-2.384-.426ZM47.057 120.403l.869-2.576-2.384-.804-.869 2.577 2.384.803Zm-1.063-8.636 1.185.4-1.278 3.79 2.384.804 1.278-3.791 1.125.38-2.86 8.484-4.693-1.582 2.86-8.485ZM38.756 108.382l1.39.714.118 4.558.445.228 1.814-3.565 1.07.55-4.09 7.964-4.129-2.121 2.264-4.405 1.223.628-.105-4.551Zm-.52 5.494-1.243 2.419 1.96 1.006 1.242-2.418-1.96-1.007ZM35.258 107.651l-1.664-1.192-.473.123-3.357 4.687-.019.563 1.664 1.192 3.849-5.373Zm1.675-.3-5.214 7.279-2.858-2.047.042-2.527 2.884-4.027 2.415-.634 2.73 1.956ZM26.453 100.336l.846-.877 3.566 3.438-6.215 6.445-3.576-3.427.78-.81 2.711 2.614 1.345-1.395-2.71-2.614.78-.81 2.711 2.614 2.473-2.564-2.71-2.614ZM18.59 101.475l2.151-1.663-1.538-1.99-2.151 1.663 1.538 1.99Zm3.903-7.777.764.99-3.164 2.446 1.538 1.99 3.165-2.446.726.94-7.083 5.475-3.03-3.919 7.084-5.476ZM18.32 86.816l.759 1.365-2.432 3.857.243.437 3.488-1.959.585 1.051-7.823 4.354-2.257-4.055 4.328-2.409.669 1.202 2.44-3.843Zm-3.484 4.28-2.376 1.322 1.072 1.926 2.375-1.322-1.07-1.925ZM10.46 82.648c-.377.117-.67.108-.88-.027a1.04 1.04 0 0 1-.434-.586 1.063 1.063 0 0 1 .02-.743c.092-.241.326-.42.703-.538.367-.115.662-.1.885.042.22.133.371.331.454.596a1 1 0 0 1-.04.733c-.105.234-.341.408-.708.523ZM13.435 71l.114 1.182-8.912.862-.492-4.929 1.12-.108.362 3.748 1.929-.186-.363-3.748 1.12-.109.363 3.748 4.759-.46ZM13.176 59.187l-.078 1.56-4.105 1.984-.025.5 3.996.184-.06 1.202-8.943-.449.233-4.635 4.947.249-.069 1.373 4.104-1.968Zm-5.221 1.787-2.716-.136-.11 2.2 2.715.136.11-2.2ZM12.417 55.566l.5-2.466-6.478-1.313-.5 2.466 6.478 1.313Zm.959 1.405L4.6 55.193l.983-4.854 8.775 1.778-.983 4.854ZM6.882 45.553l-.374 1.078 8.418 3.05.404-1.116-5.259-1.906 6.223-.753.32-.881-8.418-3.051-.426 1.175 4.657 1.688-5.545.716ZM19.06 39.862l-.566 1.044-6.868-3.722-.924 1.703-1.002-.544 2.367-4.368 1.003.544-.879 1.62 6.869 3.723ZM20.655 31.43l-.9-.648-2.524 3.496.9.65 2.524-3.497ZM27.113 27.003l.887.837-3.4 3.602-6.512-6.144 3.388-3.613.819.772-2.585 2.739 1.41 1.33 2.584-2.74.818.772-2.584 2.74 2.591 2.444 2.584-2.739ZM25.35 18.097l-.887.717 5.527 7.043.934-.733-3.453-4.4 5.678 2.654.738-.579-5.528-7.043-.983.772 3.058 3.896-5.084-2.327ZM36.322 19.66l1.778-1.015.085-.48-2.859-5.007-.504-.252-1.777 1.014 3.277 5.74Zm-.427 1.647-4.44-7.775 3.053-1.743 2.28 1.092 2.456 4.301-.431 2.46-2.918 1.665ZM47.183 14.502l1.963-.58.194-.449-1.635-5.529-.432-.36-1.963.58 1.873 6.338Zm-.793 1.505-2.538-8.586 3.372-.996L49.19 8.01l1.404 4.75-.984 2.295-3.221.952ZM58.401 12.049l.169 1.207-4.906.685-1.238-8.868 4.904-.7.155 1.114-3.729.521.268 1.919 3.73-.52.155 1.114-3.73.52.493 3.528 3.73-.52ZM66.18 4.046 64.572 13H62.01l-1.594-8.954h1.5l1.125 7.672h.453l1.11-7.672h1.578ZM72.827 12.5l-.168 1.206-4.906-.684 1.238-8.868 4.908.67-.156 1.114-3.73-.52-.267 1.918 3.73.52-.156 1.115-3.73-.52-.492 3.528 3.73.52ZM76.727 13.293l3.611 1.067-.345 1.169-4.75-1.404L77.78 5.54l1.144.322-2.197 7.432ZM84.184 15.777l2.28 1.065 2.799-5.987-2.279-1.066-2.8 5.988Zm-1.591.6 3.792-8.11 4.487 2.098-3.793 8.11-4.486-2.098ZM95.45 18.852l-2.88-1.907-2.195 3.344-1.003-.665 4.944-7.464 3.869 2.563-2.736 4.13Zm-.421-1.628 1.5-2.267-1.836-1.216-1.501 2.266 1.837 1.217ZM100.048 26.185l-.813.908-3.688-3.307 5.976-6.666 3.699 3.295-.751.837-2.804-2.513-1.294 1.442 2.804 2.514-.751.838-2.803-2.514-2.379 2.653 2.804 2.513ZM104.738 33.233l-.996-1.205 1.689-4.234-.318-.386-3.073 2.561-.767-.927 6.9-5.705 2.957 3.576-3.817 3.157-.876-1.06-1.699 4.223Zm2.646-4.844 2.095-1.732-1.404-1.698-2.095 1.733 1.404 1.697Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h128v128H0z" />
        </clipPath>
      </defs>
    </RingContainer>
  );
};
const scale = keyframes`
  0% {
    transform: scale(0);
  }

  80% {
    transform: scale(110%);
  }

  100% {
    transform: scale(100%);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const RingContainer = styled(motion.svg)`
  color: rgba(212, 212, 212, 1);
  transform-origin: center center;
  animation: ${rotate} 4s linear 2.5s infinite, ${scale} 0.5s ease 2s 1;
`;
