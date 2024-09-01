

function Navbar() {
  return (
    <div className="bg-blue-900 flex h-20 justify-between">
      <div className="text-white">
        <span> NextStay </span>
      </div>
      <div className="flex">
        <button className="bg-white text-gray-700 m-4"> Register </button>
        <button className="bg-white text-gray-700 m-4"> Login </button>
      </div>
    </div>
  )
}



export default Navbar

