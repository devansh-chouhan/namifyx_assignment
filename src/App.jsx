import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function App() {
  return <>
  <div className="h-screen w-screen p-4 bg-[#F9F1F0]">
    <Navbar/>
    <Main/>
  </div>
  </>
}