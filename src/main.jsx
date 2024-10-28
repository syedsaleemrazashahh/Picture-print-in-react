import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import car1 from "./Assests/cars.jpg";
import car2 from "./Assests/car1.jpg";
import { SlOptionsVertical } from "react-icons/sl";
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import "./style.css";
import men from "./Assests/men.jpg";
import men1 from "./Assests/men1.jpg";
import women1 from "./Assests/women1.jpg";

// Post Component
function Post(props) {
  // Corrected to "props" instead of "Props"
  console.log("props, ", props.name);

  return (
    <div className="style-container">
      <div className="style-header">
        <div className="style-user-detail">
          <img src={props.ProfilePhoto} className="dp" alt="User Profile" />
          <div className="mr">
            <h3>{props.name}</h3>
            <span>1 minute ago</span>
          </div>
          <div>
            <SlOptionsVertical />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          voluptates, mollitia deserunt quaerat illo perferendis sint rem
          voluptatem aut nihil quos officia necessitatibus repellat laudantium
          incidunt, nobis ab saepe quod.
        </p>

        {props.postimage ? (
          <img src={props.postimage} alt="Post" className="style-photo" />
        ) : null}

        <div className="style-icons">
          <BiLike /> Like
          <FaComment /> Comment
          <IoIosShareAlt /> Share
        </div>
      </div>
    </div>
  );
}

// App Component
function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <Post name="Saleem" postimage={men} ProfilePhoto={car2} />

        <Post
          name="Noman"
          // postimage={women1}
          ProfilePhoto="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
        />
        <Post
          name="Shayan"
          postimage={men1}
          ProfilePhoto="https://media.istockphoto.com/id/1311957094/photo/handsome-smiling-young-man-with-crossed-arms-portrait.jpg?s=612x612&w=0&k=20&c=zALF0xV8gL-W9IooXcbEE95aejQhYYkBslwjPMqlUxA="
        />
        <Post
          name="Bilal"
          postimage={car1}
          ProfilePhoto="https://media.istockphoto.com/id/1347495868/photo/smiling-african-american-man-wearing-glasses.jpg?s=612x612&w=0&k=20&c=QMCbWu-AOfLDkQMsX-qX2xHFZAL56tx_uVucZ5rBxv8="
        />
        <Post
          name="Hamza"
          postimage={men}
          ProfilePhoto="data:image/jpeg;base64,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"
        />
        <Post name="Sajid" postimage={women1} ProfilePhoto={car2} />

        <Post
          name="Sufyan"
          //  postimage={men1}
          ProfilePhoto={women1}
        />

        <Post name="Muneez" postimage={car1} ProfilePhoto={men1} />

        <Post
          name="Absar"
          postimage={men1}
          ProfilePhoto="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
        />
        <Post name="Muddasir" postimage={car1} ProfilePhoto={men} />
      </div>
    </>
  );
}

// Render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
