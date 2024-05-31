import {html} from "lit";
import {TapIcon} from "../../icon";

export class SquareOutline8Icon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2504 15.8296C9.96518 16.3374 9.6533 16.8672 9.31475 17.4191L7.84692 16.487C8.2504 15.8377 8.64461 15.1583 9.02953 14.4487C9.41446 13.7391 9.75881 12.9809 10.0626 12.1739C10.3663 11.367 10.6098 10.502 10.793 9.57913C10.9762 8.65623 11.0678 7.65681 11.0678 6.58087L12.96 6.61565C12.9739 7.11189 13.0319 7.65218 13.1339 8.23652C13.2359 8.82087 13.3692 9.42145 13.5339 10.0383C13.6985 10.6551 13.8863 11.273 14.0974 11.8922C14.3084 12.5113 14.5298 13.1026 14.7617 13.6661C14.9936 14.2296 15.229 14.7513 15.4678 15.2313C15.7066 15.7113 15.935 16.1183 16.153 16.4522L14.6921 17.3843C14.5066 17.0875 14.3014 16.7212 14.0765 16.2852C13.8516 15.8493 13.6255 15.3658 13.3982 14.8348C13.171 14.3038 12.9507 13.7368 12.7374 13.1339C12.524 12.531 12.3339 11.9165 12.1669 11.2904C12.0185 11.8238 11.8504 12.3386 11.6626 12.8348C11.4747 13.331 11.2637 13.8272 11.0295 14.3235C10.7953 14.8197 10.5356 15.3217 10.2504 15.8296Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" fill="currentColor"/></svg>`);
  }
}
