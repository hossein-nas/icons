import {html} from "lit";
import {TapIcon} from "../../icon";

export class CardTimeFillIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4C21.0544 4 21.9182 4.81588 21.9945 5.85074L22 6V9H2V6C2 4.94564 2.81588 4.08183 3.85074 4.00549L4 4H20Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.75 13.75C16.9544 13.75 16.1913 14.0661 15.6287 14.6287C15.0661 15.1913 14.75 15.9544 14.75 16.75C14.75 17.5456 15.0661 18.3087 15.6287 18.8713C16.1913 19.4339 16.9544 19.75 17.75 19.75C18.5457 19.75 19.3087 19.4339 19.8713 18.8713C20.4339 18.3087 20.75 17.5456 20.75 16.75C20.75 15.9544 20.4339 15.1913 19.8713 14.6287C19.3087 14.0661 18.5457 13.75 17.75 13.75ZM18.062 16.437V14.875H17.125V17.375H19.625V16.437H18.062Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11H22V15.271C21.779 14.636 21.4164 14.0525 20.932 13.568C20.0881 12.7241 18.9435 12.25 17.75 12.25C16.5565 12.25 15.4119 12.7241 14.568 13.568C13.7241 14.4119 13.25 15.5565 13.25 16.75C13.25 17.9435 13.7241 19.0881 14.568 19.932C14.591 19.9549 14.6141 19.9776 14.6375 20H4C2.94564 20 2.08183 19.1841 2.00549 18.1493L2 18V11ZM10.0166 14H5.99512V16H10.0166V14Z" fill="currentColor"/>
      </svg>
      `);
  }
}
