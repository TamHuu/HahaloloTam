import NavTabs from "./Atomic/navigation/tabs";
import React from "react";
import styled from "styled-components";
const Footer = styled.div`
  backgroundcolor: red;
`;

function App() {
  return (
    <div>
      <NavTabs />
      {/* Footer */}
      <footer>
        <div
          className="container_footer"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor: "mediumvioletred",

            color: "white",
          }}
        >
          <div className="left">
            <img
              style={{ width: "314px", padding: "30px 0" }}
              src="http://hhvn.com.vn/wp-content/uploads/2020/05/Logo-HHVn2020-1024x294.png"
            ></img>
            <br></br>
            <img
              style={{ width: "200px" }}
              src="http://hhvn.com.vn/wp-content/themes/hhvn/images/logo_tienphong.png"
            ></img>
            <img
              style={{ width: "200px" }}
              src="http://hhvn.com.vn/wp-content/themes/hhvn/images/logo_senvang.png"
            ></img>
          </div>
          <div className="right">
            <ul
              style={{
                margin: "77px 0",
                fontSize: "18px",
                listStyle: "none",
                lineHeight: "43px",
              }}
            >
              <li>Bản quyền thuộc về HOA HẬU VIỆT NAM 2020</li>
              <li>Điện thoại: 028 - 3899 2222 * Fax: 028 - 3899 1111</li>
              <li>Địa chỉ: 6D Trường Sa, P.17, Bình Thạnh, TP.HCM</li>
            </ul>
          </div>
        </div>
      </footer>
      {/* End footer */}
    </div>
  );
}

export default App;
