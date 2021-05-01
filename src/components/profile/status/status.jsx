import React from "react";


export class Status extends React.Component{
   state={
       EditMode:false,
       status:this.props.status
}
EditOn=()=>{
       this.setState({
           EditMode:true
       })


}
EditOf=()=>{
       this.setState({
           EditMode:false
       })
    this.props.updateStatus(this.state.status)
}
onStatusChange=(e)=>{
       this.setState(
    {
        status:e.currentTarget.value
    })
}
componentDidUpdate(prevProps,prevState){
       if(prevProps.status!==prevState.status){
           this.setState(
               {status:this.props.status}
           )

       }


}


    render(){
      return( <div className={"status"}>
           {this.state.EditMode&&<div className={"edit"}>
                <textarea onChange={this.onStatusChange} autoFocus={true} onBlur={this.EditOf} value={this.state.status}/>
           </div>}

           {!this.state.EditMode&&<div className={"no_edit"}>
               <h3  onDoubleClick={this.EditOn} >{this.props.status||"-----"}</h3>
           </div>}
       </div>)

}
}