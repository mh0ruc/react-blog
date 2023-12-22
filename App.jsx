import { useState } from 'react'
import './App.css'

import { UserList } from './componenets/UserList'



function App() {
 const username="mustafa hilmi"
 const uyeler=["ali","mhemet","ayşe", "mehmet"]
 const mapuser=uyeler.map((uyeler,i)=><li key={i}>{uyeler}</li>)
const isactive=true
const styles={
  h4style:{fontSize:"24px",backgroundColor:"lightgreen"}
}
const prodacts=[
  {id:1,name:"iphone 14 pro",isstock:true},
  {id:2,name:"iphone 13 pro",isstock:true},
  {id:3,name:"ipad mini",isstock:false},
  {id:4,name:"monster abra a5",isstock:true},
  {id:5,name:"lenovo idealpad",isstock:false},
  {id:6,name:"samsung galaxy s21",isstock:true},
]

  return (
    <>
    
    <img src="https://picsum.photos/200/300" alt="" />
      <div> başlık</div>
      <h1 style={{backgroundColor:`${isactive?"green":"orange"}`}}>merhaba {username}</h1>
      <p>Lorem, ipsum.</p>
      <p>Inventore, ut.</p>
      <p>Aliquam, dolor!</p>
      <hr />
      <div className="yeniüyeler">
        <h3 style={styles.h4style}> yeni üyeler</h3>
      </div>
      <ul>
        {uyeler.map((uyeler,index)=><li key={index}>{uyeler}</li>)}
      </ul>
      <hr /> 
      <h5> yeni kullanıcılar</h5>
      <ul style={{backgroundColor:"yellow", color:"red", margin:0, padding:50}}>
        {
          mapuser
        }
      </ul>
      <h3>stokrtaki ürünler</h3>
      <ul>
        {
          prodacts
          .filter(item=>item.isstock)
          .map(item=><li key={item.id}>{item.name.toUpperCase()}</li>)
        }
      </ul>
      <hr />
      <h5>yeni resim</h5>
      <ImageThumbnail/>
      < UserList/>
    </>
  )
}
function ImageThumbnail(){
  return(
    <img src="https://picsum.photos/600/300" alt=''
    style={{padding:10,margin:0,borderRadius:40, border:"5px double black"}}/>
  )
}
export default App 
