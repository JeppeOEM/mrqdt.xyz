import AbstractView from './AbstractView.js';
import { u } from '../lib.js';
import '../components/popup-info-box-web-component/main.js'

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Home');
  }

  async getHtml() {
    return `
        <h1>Home</h1>
        <p>
            Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
        </p>
        <p>
            <a href="${u('/posts')}" data-link>View recent posts</a>.
        </p>

        <br>
        <br>



    <form>
      <div>
        <label for="cvc"
          >Enter your CVC
          <popup-info
            img="img/alt.png"
            data-text="Your card validation code (CVC) is an extra security feature — it is the last 3 or 4 numbers on the back of your card."
          ></popup-info
        ></label>
        <input type="text" id="cvc" />
      </div>
    </form>

        <p>
          GitHub repo: <a href="https://github.com/michaelcurrin/single-page-app-vanilla-js">michaelcurrin/single-page-app-vanilla-js</a>.
        </p>
    `;
  }
}
