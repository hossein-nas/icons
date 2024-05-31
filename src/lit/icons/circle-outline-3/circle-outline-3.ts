import {html} from "lit";
import {TapIcon} from "../../icon";

export class CircleOutline3Icon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C7.02975 21 3 16.9703 3 12C3 7.02975 7.02975 3 12 3C16.9703 3 21 7.02975 21 12C21 16.9703 16.9703 21 12 21ZM12 1C5.9346 1 1 5.9346 1 12C1 18.0654 5.9346 23 12 23C18.0654 23 23 18.0654 23 12C23 5.9346 18.0654 1 12 1Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1144 16.6417C11.1144 16.2577 11.1113 15.8392 11.1051 15.3864C11.0988 14.9335 11.0863 14.4723 11.0675 14.0027C11.0487 13.5331 11.0237 13.0698 10.9924 12.6128C10.9611 12.1558 10.9204 11.7311 10.8703 11.3387V11.3011C11.0331 11.3429 11.2251 11.3638 11.4463 11.3638C11.6132 11.3638 11.7656 11.3471 11.9033 11.3137C12.0411 11.2803 12.1694 11.2312 12.2884 11.1665C12.4073 11.1018 12.519 11.0225 12.6233 10.9286C12.7277 10.8347 12.832 10.7293 12.9364 10.6125C13.0491 10.7377 13.1701 10.842 13.2995 10.9255C13.4289 11.009 13.5593 11.0747 13.6908 11.1227C13.8223 11.1707 13.9506 11.2041 14.0758 11.2229C14.2011 11.2417 14.3158 11.2511 14.4202 11.2511C14.7124 11.2511 14.9638 11.1937 15.1746 11.0789C15.3854 10.9641 15.5784 10.8065 15.7538 10.6062C15.9332 10.3808 16.0731 10.122 16.1732 9.82984C16.2734 9.53767 16.3235 9.17871 16.3235 8.75297C16.3235 8.63193 16.3193 8.51819 16.311 8.41176C16.3026 8.30532 16.2911 8.19889 16.2765 8.09245C16.2619 7.98602 16.2442 7.87332 16.2233 7.75436C16.2024 7.63541 16.1795 7.50289 16.1544 7.3568L16.0918 7.01245L14.5329 7.30045C14.5621 7.40897 14.5944 7.53315 14.6299 7.67297C14.6654 7.8128 14.6978 7.9568 14.727 8.10497C14.7562 8.25315 14.7802 8.40132 14.799 8.54949C14.8178 8.69767 14.8271 8.83436 14.8271 8.95958C14.8271 9.15993 14.7979 9.32793 14.7395 9.46358C14.6811 9.59923 14.5746 9.66706 14.4202 9.66706C14.4035 9.66706 14.3711 9.66393 14.3231 9.65767C14.2751 9.65141 14.2219 9.63263 14.1635 9.60132C14.1051 9.57002 14.0456 9.51889 13.9851 9.44793C13.9245 9.37697 13.8734 9.2768 13.8317 9.14741C13.7899 8.98462 13.7513 8.83749 13.7158 8.70602C13.6804 8.57454 13.6491 8.44097 13.6219 8.30532C13.5948 8.16967 13.5729 8.02671 13.5562 7.87645C13.5395 7.72619 13.5291 7.55297 13.5249 7.3568L12.0223 7.55089C12.0264 7.58845 12.0317 7.64584 12.0379 7.72306C12.0442 7.80028 12.0494 7.88271 12.0536 7.97036C12.0578 8.05802 12.0609 8.14149 12.063 8.2208C12.0651 8.3001 12.0661 8.35854 12.0661 8.3961C12.0578 8.56723 12.0473 8.73628 12.0348 8.90323C12.0223 9.07019 11.9962 9.21941 11.9565 9.35089C11.9169 9.48236 11.8574 9.58776 11.7781 9.66706C11.6988 9.74636 11.5882 9.78602 11.4463 9.78602C11.3294 9.78602 11.2261 9.76515 11.1364 9.72341C11.0466 9.68167 10.9611 9.61384 10.8797 9.51993C10.7983 9.42602 10.7179 9.30602 10.6386 9.15993C10.5593 9.01384 10.4717 8.83645 10.3757 8.62776C10.3423 8.54428 10.3078 8.45976 10.2724 8.37419C10.2369 8.28863 10.2004 8.2041 10.1628 8.12063C10.1002 7.97454 10.0271 7.81906 9.94366 7.65419C9.86019 7.48932 9.77462 7.33384 9.68697 7.18776L8.25949 8.02045C8.45567 8.35436 8.62366 8.71749 8.76349 9.10984C8.90332 9.50219 9.02123 9.91019 9.11723 10.3338C9.21323 10.7575 9.2894 11.1905 9.34575 11.633C9.4021 12.0754 9.44593 12.5147 9.47723 12.9509C9.50853 13.3871 9.52836 13.8118 9.53671 14.225C9.54506 14.6382 9.54923 15.0285 9.54923 15.3958V15.6838C9.54923 15.7923 9.54819 15.9039 9.5461 16.0187C9.54401 16.1335 9.54088 16.2451 9.53671 16.3537C9.53253 16.4622 9.52836 16.5582 9.52419 16.6417H11.1144Z" fill="currentColor"/></svg>`);
  }
}
