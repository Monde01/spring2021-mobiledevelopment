// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  constructor (title, author, content) {
    // Send what it gets to its parent object
    super(title, author, content);
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return `
      <Article>
      //made sure to use correct syntax to return html with title
        ${this.props.title.render()}
        <span>${this.props.author}</apan>
        <div>${this.props.text}</div>
      </Article>`;

  }

}

export default Article;
