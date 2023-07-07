//per innestare dei figli di un componente di app in un altro componente possiamo usare "props.children"

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="container-title">
          {this.props.title}
          {/* in questo caso se in App abbiamo renderizzato il contrainer con una props title qui avremo quel title */}
        </div>
        <div>
          {this.props.children}
          {/* qui avremo gli altri componenti che abbiamo wrappato dentro container all'intenro di app */}
        </div>
      </div>
    );
  }
}
