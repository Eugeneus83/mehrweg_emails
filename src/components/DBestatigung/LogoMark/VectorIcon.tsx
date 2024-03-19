import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 109 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M89.364 40.2161C87.6408 40.2161 85.9577 40.4585 84.3548 40.8625L75.9393 20.5393H80.628L80.7882 21.5898C80.9886 23.0444 82.311 24.0141 83.7136 23.812C85.1563 23.61 86.118 22.2767 85.9177 20.8625L85.4368 17.5494C85.2364 16.2565 84.1544 15.2868 82.8721 15.2868H72.0121C71.1305 15.2868 70.329 15.7312 69.8482 16.4585C69.3673 17.1858 69.2871 18.1151 69.6077 18.9232L74.8173 31.4888H42.9989L40.0335 25.6302C41.1555 25.0646 42.4379 24.4585 43.1993 24.0141C45.2831 22.8019 52.0555 18.3171 51.9754 11.61C51.9353 5.79184 49.9316 1.95346 49.8114 1.79184C49.2103 0.66053 47.8879 0.135277 46.7257 0.539317C46.0846 0.741338 40.2739 2.72114 37.5489 5.87265C35.9059 7.77164 34.7037 9.58982 33.9423 12.1757C32.0989 9.26659 29.7746 7.12518 25.3665 5.3878C21.3993 3.85245 18.1533 4.17568 14.3864 4.57972C13.2643 4.70093 12.1022 4.82215 10.8599 4.90295C10.0585 4.94336 9.37721 5.3474 8.89632 5.99386C8.45552 6.64033 8.29522 7.44841 8.49559 8.21608C8.89632 9.71103 11.0603 17.3878 13.1441 20.2565C16.1496 24.4989 19.9165 26.0343 23.4831 27.0848C26.9294 28.0949 33.4213 28.2565 35.4651 28.2565L37.7493 32.7817L29.6945 42.7615C26.8493 41.105 23.5232 40.1757 19.9967 40.1757C9.17684 40.1757 0.400735 49.0646 0.400735 59.9333C0.400735 70.8423 9.21691 79.6908 19.9967 79.6908C29.7746 79.6908 37.9096 72.4181 39.3923 62.9636H54.6202C54.6603 62.9636 54.7004 62.9636 54.7004 62.9636C54.7805 62.9636 54.8206 62.9636 54.9007 62.9636C54.9408 62.9636 54.9809 62.9636 55.021 62.9636C55.061 62.9636 55.1412 62.9636 55.1813 62.9232C55.2213 62.9232 55.2614 62.8828 55.3015 62.8828C55.3415 62.8828 55.4217 62.8423 55.4618 62.8423C55.5018 62.8423 55.5419 62.8019 55.582 62.8019C55.6221 62.7615 55.7022 62.7615 55.7423 62.7211C55.7423 62.7211 55.7824 62.7211 55.8224 62.6807L55.8625 62.6403C55.9026 62.6403 55.9427 62.5999 55.9827 62.5595C56.0228 62.5191 56.0629 62.5191 56.1029 62.4787C56.143 62.4383 56.143 62.4383 56.1831 62.3979C56.2232 62.3575 56.2632 62.3171 56.3033 62.2767C56.3434 62.2363 56.3434 62.2363 56.3835 62.1959C56.4235 62.1555 56.4636 62.1151 56.5037 62.0747L56.5438 62.0343L77.8228 38.6807L79.5059 42.7615C73.6552 46.1959 69.7279 52.5797 69.7279 59.8524C69.7279 70.7615 78.5441 79.61 89.3239 79.61C100.144 79.61 108.92 70.7211 108.92 59.8524C108.96 49.105 100.184 40.2161 89.364 40.2161ZM38.0699 20.3777C38.2301 12.9838 39.7129 11.2868 41.436 9.3474C42.3577 8.29689 44.2412 7.24639 46.0044 6.47871C46.3651 7.73124 46.7257 9.50901 46.7257 11.6908C46.7658 15.7312 41.1956 19.1252 40.5544 19.4888C39.9934 19.812 38.9915 20.2969 38.0298 20.7817C38.0699 20.6201 38.0699 20.4989 38.0699 20.3777ZM25.0059 22.0747C21.8 21.1454 19.3956 19.9737 17.432 17.1858C16.5904 15.9737 15.3882 12.7413 14.4665 9.83225C14.6268 9.83225 14.7871 9.79184 14.9474 9.79184C18.3938 9.42821 20.6779 9.18578 23.5232 10.2767C27.5305 11.8524 28.9331 13.5494 30.536 16.8221C31.3776 18.5191 32.4195 20.9434 33.261 22.9636C30.496 22.8828 26.8893 22.6403 25.0059 22.0747ZM40.3941 37.9535L50.4125 57.7918H39.5526C39.0316 53.2262 36.9879 49.105 33.9022 45.9939L40.3941 37.9535ZM30.5761 50.1151C32.4996 52.2161 33.8221 54.8423 34.2629 57.7918H24.4048L30.5761 50.1151ZM20.0368 74.5191C12.1022 74.5191 5.65037 68.0141 5.65037 60.0141C5.65037 52.0141 12.1022 45.509 20.0368 45.509C22.321 45.509 24.4849 46.0343 26.4085 47.004L16.911 58.8019C16.2699 59.5696 16.1496 60.6605 16.5904 61.5898C17.0313 62.5191 17.9529 63.0848 18.9548 63.0848H34.1426C32.7401 69.5898 26.9695 74.5191 20.0368 74.5191ZM55.2614 55.8524L45.6438 36.7817H72.6533L55.2614 55.8524ZM89.364 74.5191C81.4294 74.5191 74.9776 68.0141 74.9776 60.0141C74.9776 54.9232 77.6224 50.3979 81.5897 47.812L87.1599 61.2666C87.5607 62.2767 88.5625 62.8828 89.5643 62.8828C89.8849 62.8828 90.2456 62.8019 90.5662 62.6807C91.8886 62.1151 92.5298 60.5797 91.9688 59.2464L86.3985 45.8322C87.3603 45.6302 88.3621 45.509 89.4041 45.509C97.3386 45.509 103.79 52.0141 103.79 60.0141C103.79 68.0141 97.2985 74.5191 89.364 74.5191Z'
      fill='#00AD4C'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
