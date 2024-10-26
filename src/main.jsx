import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import car1 from "./Assests/cars.jpg";
import car2 from "./Assests/car1.jpg";
import { SlOptionsVertical, SlSocialFacebook } from "react-icons/sl";
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import "./style.css";

// function App() {
//   return (
//     <>
//       <div className="style-container">
//       <div className="style-header">
//         <div className="style-user-detail">

//         <img src={car2} className="dp" id="my-id" />
//         <div>
//         <h3>Hedy Lamarrs</h3>
//         <span>1 minute ago</span></div>
//         <div/>
//         <SlOptionsVertical />
//         <div/>
//         {/* <SlSocialFacebook /> */}
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
//           voluptates, mollitia deserunt quaerat illo perferendis sint rem
//           voluptatem aut nihil quos officia necessitatibus repellat laudantium
//           incidunt, nobis ab saepe quod.
//         </p>

//         <img src={car1} alt="Hedy Lamarr" className="style-photo" id="my-id" />
//         <div>
//           <BiLike />
//           <FaComment />
//           <IoIosShareAlt />
//         </div>
//       </div>
//     </>
//   );
// }

function style() {}

function App() {
  return (
    <>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
