import {html} from "lit";
import {TapIcon} from "../../icon";

export class PlaneIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_24_1616)">
          <path d="M21.75 12C21.7495 11.8153 21.6978 11.6344 21.6007 11.4773C21.5036 11.3202 21.365 11.1931 21.2 11.11L15.08 8.04997V4.04997C15.08 3.2331 14.7555 2.44969 14.1779 1.87208C13.6003 1.29447 12.8169 0.969971 12 0.969971C11.1832 0.969971 10.3998 1.29447 9.82215 1.87208C9.24453 2.44969 8.92003 3.2331 8.92003 4.04997V8.04997L2.80003 11.11C2.63512 11.1931 2.49644 11.3202 2.39936 11.4773C2.30228 11.6344 2.25059 11.8153 2.25003 12V15.33C2.24868 15.4929 2.28714 15.6537 2.36208 15.7983C2.43702 15.943 2.54617 16.0671 2.68003 16.16C2.81313 16.2512 2.96632 16.3088 3.12653 16.328C3.28673 16.3471 3.44919 16.3272 3.60003 16.27L8.92003 14.27V18L7.10003 18.6C6.90141 18.6671 6.7289 18.7949 6.60688 18.9653C6.48485 19.1358 6.41949 19.3403 6.42003 19.55V22C6.42058 22.1323 6.44738 22.2632 6.49888 22.385C6.55038 22.5069 6.62555 22.6174 6.72003 22.71C6.9063 22.8947 7.15769 22.9989 7.42003 23H16.59C16.8553 23 17.1096 22.8946 17.2971 22.7071C17.4847 22.5195 17.59 22.2652 17.59 22V19.5C17.5906 19.2903 17.5252 19.0858 17.4032 18.9153C17.2812 18.7449 17.1087 18.6171 16.91 18.55L15.08 18V14.28L20.4 16.28C20.5509 16.3372 20.7133 16.3571 20.8735 16.338C21.0337 16.3188 21.1869 16.2612 21.32 16.17C21.4539 16.0771 21.563 15.953 21.638 15.8083C21.7129 15.6637 21.7514 15.5029 21.75 15.34V12ZM14.44 11.9C14.2878 11.841 14.1235 11.8202 13.9614 11.8394C13.7993 11.8586 13.6443 11.9171 13.51 12.01C13.3776 12.1019 13.2693 12.2244 13.1944 12.3672C13.1195 12.51 13.0803 12.6688 13.08 12.83V18.67C13.0802 18.8808 13.147 19.0863 13.2709 19.2569C13.3949 19.4275 13.5695 19.5546 13.77 19.62L15.58 20.22V21H8.41003V20.22L10.22 19.62C10.4205 19.5546 10.5952 19.4275 10.7191 19.2569C10.8431 19.0863 10.9099 18.8808 10.91 18.67V12.83C10.9098 12.6688 10.8705 12.51 10.7957 12.3672C10.7208 12.2244 10.6125 12.1019 10.48 12.01C10.3458 11.9171 10.1908 11.8586 10.0287 11.8394C9.8666 11.8202 9.70226 11.841 9.55003 11.9L4.24003 13.9V12.62L10.35 9.55997C10.5168 9.47826 10.6575 9.35171 10.7565 9.19452C10.8554 9.03732 10.9085 8.85569 10.91 8.66997V4.07997C10.91 3.79354 11.0238 3.51883 11.2264 3.3163C11.4289 3.11376 11.7036 2.99997 11.99 2.99997C12.2765 2.99997 12.5512 3.11376 12.7537 3.3163C12.9562 3.51883 13.07 3.79354 13.07 4.07997V8.66997C13.0715 8.85569 13.1247 9.03732 13.2236 9.19452C13.3225 9.35171 13.4633 9.47826 13.63 9.55997L19.74 12.62V13.89L14.44 11.9Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_24_1616">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `);
  }
}
