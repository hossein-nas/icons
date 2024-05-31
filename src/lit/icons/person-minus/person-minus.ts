import {html} from "lit";
import {TapIcon} from "../../icon";

export class PersonMinusIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_24_1672)"><path d="M14 8C14 5.79 12.21 4 10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12C12.21 12 14 10.21 14 8ZM12 8C12 9.1 11.1 10 10 10C8.9 10 8 9.1 8 8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8Z" fill="currentColor"/><path d="M2 18V20H18V18C18 15.34 12.67 14 10 14C7.33 14 2 15.34 2 18ZM4 18C4.2 17.29 7.3 16 10 16C12.69 16 15.77 17.28 16 18H4Z" fill="currentColor"/><path d="M23 10H17V12H23V10Z" fill="currentColor"/></g><defs><clipPath id="clip0_24_1672"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`);
  }
}
