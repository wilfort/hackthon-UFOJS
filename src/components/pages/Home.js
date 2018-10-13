import React, { Component } from 'react';
import logo from '../../assets/image/logo.svg';
import '../../assets/css/App.css';
import appl from '../../Base';
import Rebase from 're-base';
var base = Rebase.createClass(appl.database());
class Home extends Component { 
  constructor(props){
    super(props);
    this.state={
      user:[],userA:"",passwordA:""
    }
    this.userInputChange = this.userInputChange.bind(this)
    this.passwordInputChange = this.passwordInputChange.bind(this)
}
  userInputChange(e) {
    let newuser=e.target.value;
    console.log(newuser);
        this.setState(
          {
          userA : newuser
        });
      }
      passwordInputChange(e) {
        this.setState({
          passwordA: e.target.value
        });
      }
    addData=()=>{
      const item= {
        id : this.state.userA,
        key : this.state.user.length,
        psedo        : this.state.userA,
        password : this.state.passwordA,
        conect:false
    };
    this.setState({user:this.state.user.concat(item),userA:"",passwordA:""})
    //   let sampleObject={user:{"{this.state.userA}":{"psedo":this.state.userA,"password":this.state.passwordA}

    //   }}
    //   fs.writeFile("../../assets/donner/donner.json", JSON.stringify(sampleObject, null, 4), (err) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     };
    //     console.log("File has been created");
    // });
    
 
      
    console.log(this.state.user)
        }
        componentDidMount () {
          base.syncState(`/user/`, {
              context: this,
              state: 'user',
              asArray: true
          });
          console.log("componentDidMount")
      }
    render() {

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <div>
            <form action="" name="">
            <label> user : </label>
            <input type="text" value={this.state.userA} name="" id="userA" onChange={this.userInputChange}/>
            <br/>
            <label> password : </label>
            <input type="password" value={this.state.passwordA} name="" id="passwordA" onChange={this.passwordInputChange}/><br/>
            <button onClick={this.addData}>add user</button>
            </form>
          </div>
        </div>
      );
    }
  }
  
  export default Home;
  