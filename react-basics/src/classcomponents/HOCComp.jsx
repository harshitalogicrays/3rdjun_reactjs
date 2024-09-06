import React, { Component } from 'react'

const HOCComp = (InputComponent,InputData) => { //{url:'',columns:[id,userId,title,body]}
    return class extends Component {
        constructor(props) { super(props)
            this.state = {alldata:[] } }      
        getData=async()=>{
          try{
           let res =  await fetch(InputData.url)
           let data = await res.json()
           console.log(data)
          this.setState({alldata:data}) }
          catch(err){console.log(err)} }
      
        componentDidMount(){  this.getData() }
          render() {  return (
                <>
                <h1>{InputData.heading}</h1>
        <div class="table-responsive" >
            <table   class="table table-primary"  >
                <thead>
                    <tr>
                      {InputData.columns.map((c,i)=><th key={i}>{c}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.state.alldata.length ==0 && <tr><td colSpan={InputData.columns.length}>No data found</td></tr>}
                    {this.state.alldata.map((data,i)=>
                    <tr key={data.id}>
                         {InputData.columns.map((c,i)=><td key={i}>{data[c]}</td>)}
                    </tr>)}
                </tbody>
            </table>
        </div>
        
     </>
            )
          }
        }
        
    }

export default HOCComp
