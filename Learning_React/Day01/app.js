class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello World!</h1>
        <Hello to="rabi"/>
        <Hello to="Rabindra"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById("root"))