import {html} from "lit";
import {TapIcon} from "../../icon";

export class Default7Icon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.29 16.8478C13.2993 16.1151 13.4013 15.2988 13.5961 14.3991C13.7909 13.4994 14.0761 12.5232 14.4518 11.4704C14.6141 11.0159 14.7799 10.573 14.9491 10.1417C15.1184 9.71042 15.2865 9.30231 15.4535 8.91738C15.6204 8.53245 15.7862 8.17419 15.9509 7.8426C16.1155 7.511 16.2767 7.21767 16.4344 6.9626L14.9735 6.02347C14.7833 6.32028 14.5793 6.71448 14.3613 7.20608C14.1433 7.69767 13.9242 8.24376 13.7039 8.84434C13.4836 9.44492 13.2703 10.078 13.0639 10.7435C12.8575 11.409 12.6709 12.064 12.5039 12.7087C12.3694 12.1383 12.2175 11.5794 12.0483 11.0322C11.879 10.4849 11.6842 9.93999 11.4639 9.39738C11.2436 8.85477 10.9944 8.30869 10.7161 7.75912C10.4378 7.20956 10.1248 6.64724 9.77697 6.07216L8.30914 7.01129C8.71262 7.66057 9.10798 8.33767 9.49523 9.0426C9.88248 9.74753 10.228 10.4988 10.5318 11.2965C10.8355 12.0942 11.079 12.951 11.2622 13.8669C11.4454 14.7829 11.537 15.7765 11.537 16.8478H13.29Z" fill="currentColor"/>
      </svg>
      `);
  }
}
