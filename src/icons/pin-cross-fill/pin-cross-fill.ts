import {html} from "lit";
import {TapIcon} from "../../icon";

export class PinCrossFillIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 23V21H11V23H13ZM20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 11.8805 5.58274 14.4145 8.11799 15.9782L8.63641 16.2879C8.80615 16.3933 8.96643 16.5006 9.11754 16.6097C9.92232 17.1908 10.4294 17.7872 10.7265 18.3808L10.7893 18.5269L10.8242 18.6197L11.0538 19.2693L11.0873 19.3569L11.15 19.5038C11.1697 19.5451 11.1881 19.5778 11.2048 19.5991L11.2936 19.7016L11.3473 19.7552C11.4184 19.8186 11.4941 19.8534 11.6551 19.899L12 19.9877L12.2506 19.9244L12.4245 19.8748L12.5041 19.846C12.5749 19.8169 12.6218 19.7855 12.6692 19.7401L12.7491 19.6535L12.7962 19.5978C12.8212 19.5658 12.8501 19.5082 12.8814 19.4345L12.9467 19.2685L13.1747 18.6211L13.2417 18.4487L13.2714 18.3836C13.5653 17.7933 14.0665 17.2005 14.8618 16.623C15.0147 16.512 15.1772 16.4028 15.3494 16.2956L15.8722 15.983C18.4102 14.4172 20 11.8805 20 9ZM13.414 9.01598L15.536 6.89598L14.121 5.48098L12 7.60298L9.87999 5.47998L8.46399 6.89598L10.586 9.01698L8.46399 11.138L9.87899 12.552L12 10.431L14.121 12.552L15.536 11.138L13.414 9.01598Z" fill="currentColor"/>
      </svg>
      `);
  }
}
