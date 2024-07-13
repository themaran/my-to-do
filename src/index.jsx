import {useState} from "react"
import './App.css'
const  App = () => {

  const [addValue, setAddValue] = useState("");
  const [data, setData] = useState([]);
  const handleAdd = () =>{
    if(!addValue.trim()){
      alert('Pls enter the to-do...')
    }
    else{
      setData([...data, addValue]);
      setAddValue("");
    }
  }
  const handleRemove = (index) => {
    const remove = data.filter((item, indexItem) => indexItem !==index);
    setData(remove);
  }
 
  return (
    <>
    <section className="bg-gray-900 w-full h-screen">
      <center>
        <div className="">
          <h1 className="text-violet-300 text-4xl font-black">My to-do</h1>
          <div className="mt-5">
            <input className="ring-4 outline-none w-1/2 h-12 rounded-full pl-5 ring-violet-500 mr-6" placeholder="Add the task..." onChange={(e)=>setAddValue(e.target.value)} value={addValue}></input>
            <button className="addButton w-12 h-12" onClick={()=>handleAdd()}></button>
          </div>
          <div className=""> 
            <h1 className="text-violet-300 mt-10 text-2xl">Tasks to do</h1>
            <ul className="flex place-content-center">
              {
                data.map((currItem, index) => {
                  return(
                    <>
                    <li key={index} className="bg-violet-100 rounded-full p-3 m-10 h-10 w-1/2 mb-5">
                      {currItem}
                    </li>
                    <button className="removeButton w-12 h-12 " onClick={()=> handleRemove(index)}></button>
                    </>
                  )
                })
              }
            </ul>
          </div>
          </div>
      </center>
    </section>
    </>
  )
}

export default App;
