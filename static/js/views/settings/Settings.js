import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Settings');
  }

  async getHtml() {
    try {
      const response = await fetch('/static/js/views/settings/settings.html'); // Adjust the path as needed
      const html = await response.text(); // Get HTML content as a string
      return html;
    } catch (error) {
      return `
        <h1>Error</h1>
        <p>Sorry, we couldn't load the settings page.</p>
      `;
    }
  }
}