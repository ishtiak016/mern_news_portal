import React from "react";
import { AiOutlineClose } from "react-icons/ai";
function Gallary() {
    const [show, setShow] = useState(true);

    const handleClose = () => {
      setShow(false);
    };
  //   return (
  //     <div className="w-screen h-screen left-0 top-0 z-[999]">
  //       <div className="w-full h-full relative">
  //         <div className="bg-gray-400 opacity-80 w-full h-full absolute top-0 left-0 z-[998]"></div>
  //         <div className="absolute bg-white w-[50%] p-3 rounded-sm h-[85vh] overflow-y-auto
  //         left-[50%] top-[50%] z-[999] -translate-x-[50%] -translate-y-[50%]" ></div>
  //       </div>
  //     </div>
  //   );
  return (
    <div className="w-screen h-screen fixed left-0 top-0 z-[999]">
      <div className="w-full h-full relative">
        <div className="bg-gray-400 opacity-80 w-full h-full absolute top-0 left-0 z-[998]"></div>
        <div className="absolute bg-white w-[50%] p-3 rounded-sm h-[85vh] overflow-y-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999]">
         <div className="pb-3 flex justify-between items-center ">
           <h2>Gallery</h2>
            <div  onClick={handleClose} className="text-xl cursor-pointer">
            <AiOutlineClose />
            </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Gallary;
