import {html} from "lit";
import {TapIcon} from "../../icon";

export class TimerFillIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_24_1557)">
          <path d="M9 3V1H15V3H9ZM11 14H13V8H11V14ZM12 22C10.7667 22 9.60417 21.7625 8.5125 21.2875C7.42083 20.8125 6.46667 20.1667 5.65 19.35C4.83333 18.5333 4.1875 17.5792 3.7125 16.4875C3.2375 15.3958 3 14.2333 3 13C3 11.7667 3.2375 10.6042 3.7125 9.5125C4.1875 8.42083 4.83333 7.46667 5.65 6.65C6.46667 5.83333 7.42083 5.1875 8.5125 4.7125C9.60417 4.2375 10.7667 4 12 4C13.0333 4 14.025 4.16667 14.975 4.5C15.925 4.83333 16.8167 5.31667 17.65 5.95L19.05 4.55L20.45 5.95L19.05 7.35C19.6833 8.18333 20.1667 9.075 20.5 10.025C20.8333 10.975 21 11.9667 21 13C21 14.2333 20.7625 15.3958 20.2875 16.4875C19.8125 17.5792 19.1667 18.5333 18.35 19.35C17.5333 20.1667 16.5792 20.8125 15.4875 21.2875C14.3958 21.7625 13.2333 22 12 22Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_24_1557">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `);
  }
}
