class Luck extends React.Component{
  render(){
    const arr=this.props.letter;
    let msg=<div><h1>Sorry!</h1><h2>Better luck next time.</h2></div>;
    if(arr[0]==arr[1]&&arr[1]==arr[2]){
      msg=<div><h1>Wow!</h1><h2>Today is your lucky day.{arr[0]}</h2></div>; 
    }
    return (
      <div>
        <h1>{arr[0]}  {arr[1]}  {arr[2]}</h1>
        <div>{msg}</div>
      </div>
    )
  }
}
