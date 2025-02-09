import AbstractView from '../AbstractView.js';
import { u } from '../../lib.js';
// import '../components/popup-info-box-web-component/main.js'

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Home');
  }


  async getHtml() {
    try {
      const response = await fetch('/static/js/views/home/home.html'); // Adjust the path as needed
      const html = await response.text(); // Get HTML content as a string
      return html;
    } catch (error) {
      return `
        <h1>Error</h1>
        <p>Sorry, we couldn't load the home page.</p>
      `;
    }
  }
}
