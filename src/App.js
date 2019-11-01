import React from 'react';
// import './styles/App.scss';
import marked from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };

    this.startWriting = this.startWriting.bind(this);
  }
  startWriting(event) {
    // console.log(marked)
    this.setState({content:event.target.value});
    // let rawMarkup = marked(this.state.marks);
    // return { __html: rawMarkup };
    console.log(this.state.content)
  }
  markedDown() {
    let markup = marked(this.state.content,{sanitize: true});
    return { __html: markup };

  }

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1>Hello world</h1>
        </header>
        <main>
          <div className="container">
            <div className="row">
              <div className="col">
                <section>
                  <h2>Editor</h2>
                  <textarea name="" value= {this.state.marks} id="editor" cols="30" rows="10" onChange={this.startWriting}>
  
                  </textarea>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2>Previewer</h2>
                  <div id="preview">
                    <div dangerouslySetInnerHTML={this.markedDown()}/>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
