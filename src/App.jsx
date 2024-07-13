import { useState } from "react";
import { MdAddTask } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const App = () => {
  const [data, setData] = useState("");
  const [todo, addTodo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleTodo = () => {
    if (data === "") {
      setIsOpen(!isOpen);
    } else {
      addTodo([...todo, data]);
      setData("");
    }
  };
  const handleRemove = (index) => {
    const remove = todo.filter((item, itemIndex) => itemIndex !== index);
    addTodo(remove);
  };
  return (
    <div className="w-full h-auto bg-[#071952] flex flex-col justify-center items-center">
      {/* first child */}
      <h1 className="text-4xl text-[#EBF4F6] my-10">My to-do</h1>
      <div className="w-full h-screen bg-[#37B7C3] pt-10 rounded-lg ">
        {/* input field */}
        <div className="flex gap-4 justify-center mt-2 mb-10 ">
          <input
            type="text"
            placeholder="Type the shits to do..."
            className="w-80 h-14 p-4 rounded-md outline-none bg-white hover:scale-105 transform transition delay-200 hover:shadow-lg"
            onChange={(e) => setData(e.target.value)}
            color="#071952"
            value={data}
          ></input>
          <button
            className="bg-white rounded-md px-2"
            onClick={() => handleTodo()}
          >
            <MdAddTask size={30} color="#37B7C3" className="" />
          </button>
        </div>
        {/* tasks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {todo.map((item, index) => (
            <div
              key={index}
              className="w-96 h-40 bg-white relative rounded-md shadow-md transform transition delay-200 hover:shadow-lg"
            >
              <button className="absolute right-0 m-2 hover:rotate-6">
                <IoClose
                  size={30}
                  color="#071952"
                  className="hover:scale-125 transition delay-200 transform hover:rotate-6"
                  onClick={() => handleRemove(index)}
                />
              </button>
              <div className="w-full h-full flex justify-center items-center">
                <p className="text-[#071952] text-lg">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="absolute bg-white w-1/2 h-56 flex items-center justify-center rounded-md shadow-2xl ">
          <button onClick={handleTodo} className="absolute top-0 right-0 m-2">
            <IoClose
              size={36}
              color="#071952"
              className="hover:scale-125 transition delay-200 transform hover:rotate-6"
            />
          </button>
          <p className="sm:text-lg text-xl">
            Please, enter the shits to do!
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
