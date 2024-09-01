

function Navbar() {
  return (
    <div className="bg-blue-950 flex h-20 justify-between pl-44">
      <div className="text-white py-6">
        <span> NextStay </span>
      </div>
      <div className="flex">
        <button className="bg-white text-gray-700 m-6"> Register </button>
        <button className="bg-white text-gray-700 m-6"> Login </button>
      </div>
    </div>
  )
}



export default Navbar

