import React from "react";
import { Add } from "@material-ui/icons";
import "../css/SidebarOptions.css";

export default function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/05/11173455/Ancient-Indian-History.png"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://blog.hubspot.com/hubfs/how-to-run-a-business.jpg"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://idreamcareer.com/wp-content/uploads/2021/04/career-in-psychology-in-india.webp"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.unlockfood.ca/getmedia/79cc0763-3b98-4333-897a-d41d5ec5fbbc/mom-and-daughter-cooking.aspx?width=830&height=553"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.blog.vivanls.com/wp-content/uploads/2022/09/How-music-and-sound-can-help-alleviate-career-anxiety_940x485.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-colorful-science-education-background_23-2148475858.jpg?w=2000"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.sustainable-environment.org.uk/wp-content/uploads/2019/01/health-wellness.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.gq.com/photos/5de68aa26d3bed00084df580/master/pass/Best-Movies-of-2019-GQ-2019-120319.jpg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE1r0Ita-p02iMOc8VTHbM1udF5RDQdpp5LQ8Kp0oeaiuRreJ_HbkgpQdIWK1Y3U2hg9Y&usqp=CAU"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.collegechoice.net/app/uploads/2018/01/GettyImages-1214570071.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}
