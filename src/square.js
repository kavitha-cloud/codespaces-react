import React from 'react';
import ReactDOM from 'react-dom/client';    

class Square extends React.Component {
    render() {
      return (
        <button
          className="square"
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Square />);