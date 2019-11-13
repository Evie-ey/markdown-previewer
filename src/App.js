import React from 'react';
// import './styles/App.scss';
import marked from 'marked';
let sanitizeHtml = require('sanitize-html');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };

    this.startWriting = this.startWriting.bind(this);
  }
  startWriting(event) {
    this.setState({content:event.target.value});
  }
  markedDown() {
    let markup = marked(sanitizeHtml(this.state.content));
    return { __html: markup };

  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Markdown Previewer</h1>
        </header>
        <main>
          <div className="container">
            <MarkDownEditor 
              content = {this.state.content}
              startWriting ={this.startWriting}
            />
            <MarkDownPreviewer
              markedDown = {this.markedDown()}
            />
          </div>
        </main>
      </div>
    );
  }
}

const MarkDownPreviewer = (props) => (
        <div className="row">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <section className="preview">
              <h2>Preview</h2>
                <div id="preview" dangerouslySetInnerHTML={props.markedDown}/>
            </section>
          </div>
        </div>
  )

const MarkDownEditor = (props) => (
    <div className="row">
      <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <section className="editor">
          <h2>Editor</h2>
          <textarea name="" value= {props.content} id="editor" onChange={props.startWriting}>
            
          </textarea>
        </section>
      </div>
    </div>
)

export default App;
