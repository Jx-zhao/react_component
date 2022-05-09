import axios from "axios";
import qs from 'qs';
import React from "react";
class Post extends React.Component{
  state = {
    data:null,
    component:this.props.loading || ''
  }
  async componentDidMount(){
    const {url,delay,error, data,children} = this.props
    console.log(qs.parse(data));
    try{
      const result = await axios.post(url,qs.stringify(data))
      this.setState({
        data:result.data
      },()=>{
        setTimeout(()=>{
          this.setState({
            component:children(this.state.data)
          })
        },delay)
      })
      console.log(result);
    }catch(e){
      this.setState({
        component: error|| 'Error'
      })
      throw e;
    }
  }
  render(){
    return this.state.component;
  }
}
export default Post;