const arr=['😂','😁','😃'];
function num(){
  let a=Math.floor(Math.random()*3);
  return a;
}
class App extends React.Component{
  render(){
    return(
      <Luck letter={[arr[num()],arr[num()],arr[num()]]}/>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))