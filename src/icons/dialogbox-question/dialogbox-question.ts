import {html} from "lit";
import {TapIcon} from "../../icon";

export class DialogboxQuestionIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_24_1389)">
          <path d="M11 22L11.25 19H11.5C13.8667 19 15.875 18.175 17.525 16.525C19.175 14.875 20 12.8667 20 10.5C20 8.13333 19.175 6.125 17.525 4.475C15.875 2.825 13.8667 2 11.5 2C10.3167 2 9.2125 2.22083 8.1875 2.6625C7.1625 3.10417 6.2625 3.7125 5.4875 4.4875C4.7125 5.2625 4.10417 6.1625 3.6625 7.1875C3.22083 8.2125 3 9.31667 3 10.5C3 13.0333 3.75833 15.3042 5.275 17.3125C6.79167 19.3208 8.7 20.8833 11 22ZM11.525 15.975C11.2417 15.975 11 15.875 10.8 15.675C10.6 15.475 10.5 15.2333 10.5 14.95C10.5 14.6667 10.6 14.425 10.8 14.225C11 14.025 11.2417 13.925 11.525 13.925C11.8083 13.925 12.05 14.025 12.25 14.225C12.45 14.425 12.55 14.6667 12.55 14.95C12.55 15.2333 12.45 15.475 12.25 15.675C12.05 15.875 11.8083 15.975 11.525 15.975ZM11.5 12.8C11.3167 12.8 11.15 12.7333 11 12.6C10.85 12.4667 10.75 12.2833 10.7 12.05C10.6667 11.8333 10.575 11.6375 10.425 11.4625C10.275 11.2875 10.0167 11.0167 9.65 10.65C9.35 10.35 9.1 10.025 8.9 9.675C8.7 9.325 8.6 8.95 8.6 8.55C8.6 7.7 8.8875 7.0625 9.4625 6.6375C10.0375 6.2125 10.7167 6 11.5 6C12.0833 6 12.5875 6.13333 13.0125 6.4C13.4375 6.66667 13.7833 7 14.05 7.4C14.1667 7.58333 14.1875 7.775 14.1125 7.975C14.0375 8.175 13.8833 8.31667 13.65 8.4C13.4833 8.46667 13.3167 8.46667 13.15 8.4C12.9833 8.33333 12.8333 8.20833 12.7 8.025C12.5667 7.84167 12.4042 7.69167 12.2125 7.575C12.0208 7.45833 11.7833 7.4 11.5 7.4C11.05 7.4 10.7125 7.525 10.4875 7.775C10.2625 8.025 10.15 8.3 10.15 8.6C10.15 8.88333 10.2333 9.1375 10.4 9.3625C10.5667 9.5875 10.7667 9.81667 11 10.05C11.4667 10.45 11.7792 10.775 11.9375 11.025C12.0958 11.275 12.1917 11.6167 12.225 12.05C12.2417 12.25 12.1792 12.425 12.0375 12.575C11.8958 12.725 11.7167 12.8 11.5 12.8ZM9 17V18.35C7.81667 17.35 6.85417 16.1792 6.1125 14.8375C5.37083 13.4958 5 12.05 5 10.5C5 8.68333 5.62917 7.14583 6.8875 5.8875C8.14583 4.62917 9.68333 4 11.5 4C13.3167 4 14.8542 4.62917 16.1125 5.8875C17.3708 7.14583 18 8.68333 18 10.5C18 12.3167 17.3708 13.8542 16.1125 15.1125C14.8542 16.3708 13.3167 17 11.5 17H9Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_24_1389">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `);
  }
}
