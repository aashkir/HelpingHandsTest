class HelloWorld extends React.Component {
  render() {

    return (
      <div>
        <p>Hello World</p>
        <MaterialUi.RaisedButton label="HelloWorld" primary="Colors.red" onClick={() => {alert('Congratulations, we made it');}}/>
      </div>
    )
  }
}
