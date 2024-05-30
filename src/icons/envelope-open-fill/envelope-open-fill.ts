import {html} from "lit";
import {TapIcon} from "../../icon";

export class EnvelopeOpenFillIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_24_863)">
          <path d="M12 1L21.05 6.4C21.35 6.58333 21.5833 6.83333 21.75 7.15C21.9167 7.46667 22 7.8 22 8.15V19C22 19.55 21.8042 20.0208 21.4125 20.4125C21.0208 20.8042 20.55 21 20 21H4C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V8.15C2 7.8 2.08333 7.46667 2.25 7.15C2.41667 6.83333 2.65 6.58333 2.95 6.4L12 1ZM12 12.65L19.8 8L12 3.35L4.2 8L12 12.65Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_24_863">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `);
  }
}
