console.log('Testing React...');

const Screen = React.createClass({
  componentDidMount: () => {
    console.log('Screen Component did mount.');
  },

  render: () => {
    return (
      <main>
        <h1>Work in Progress...</h1>
        <img id="idle" src="./dist/assets/images/idle.gif" />
      </main>
    );
  }
});

ReactDOM.render(
  <Screen />,
  document.body
);
