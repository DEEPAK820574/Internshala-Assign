import Image from "next/image";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="relative">
       <Header/>
       <Main/>
       <Footer/>
    </div>
  );
}
