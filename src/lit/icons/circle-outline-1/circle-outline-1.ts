import {html} from "lit";
import {TapIcon} from "../../icon";

export class CircleOutline1Icon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C7.02975 21 3 16.9703 3 12C3 7.02975 7.02975 3 12 3C16.9703 3 21 7.02975 21 12C21 16.9703 16.9703 21 12 21ZM12 1C5.9346 1 1 5.9346 1 12C1 18.0654 5.9346 23 12 23C18.0654 23 23 18.0654 23 12C23 5.9346 18.0654 1 12 1Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.368 16.6417V15.9843C13.368 15.6504 13.3659 15.2915 13.3617 14.9075C13.3576 14.5235 13.3482 14.1343 13.3336 13.7398C13.319 13.3454 13.2991 12.9572 13.2741 12.5753C13.249 12.1934 13.2157 11.8397 13.1739 11.5141C13.1155 11.0842 13.055 10.6616 12.9923 10.2463C12.9297 9.83096 12.8525 9.43235 12.7607 9.05044C12.6689 8.66852 12.5593 8.30539 12.432 7.96104C12.3047 7.6167 12.145 7.29635 11.953 7L10.632 7.81391C10.8157 8.152 10.9711 8.52974 11.0984 8.94713C11.2257 9.36452 11.3322 9.81009 11.4177 10.2838C11.5033 10.7576 11.5701 11.2553 11.6181 11.777C11.6661 12.2988 11.7026 12.8299 11.7277 13.3704C11.7527 13.911 11.7683 14.4577 11.7746 15.0108C11.7809 15.5638 11.784 16.1075 11.784 16.6417H13.368Z" fill="currentColor"/></svg>`);
  }
}
