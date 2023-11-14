import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Menu } from "antd";

import { IoIosArrowDown } from "react-icons/io";

import "./style.css";

import Logo from "../images/Logo.svg";

export const SUIDeskNavbar = ({ className }) => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const navigate = useNavigate();

  const [navSize, setNavSize] = useState("");
  const [navColor, setNavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setNavColor("transparent")
      : setNavColor("transparent");
    window.scrollY > 10 ? setNavSize("115px") : setNavSize("100px");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div className={className}>
      <div
        className="SUIDeskNavbar"
        style={{
          backgroundColor: navColor,
          backdropFilter: "blur(51px)",
          height: navSize,
          transition: "all 0.5s",
        }}
      >
        <div className="SUIDeskNavbarContainer">
          <div className="SUIDeskLogo">
            {/* <p>Logo</p> */}
            <img
              src={Logo}
              alt="logo"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            className="SUIDeskNavbarContainerBox"
          >
            <Menu.Item key="HOME">
              <Link to="/"> HOME</Link>
            </Menu.Item>
            <Menu.Item key="PROFILE">
              <Link to="/profile"> PROFILE</Link>
            </Menu.Item>
            <Menu.SubMenu
              className="SUIDeskNavbarSubMenuContainer"
              key="PRODUCTS"
              title={
                <span>
                  PRODUCTS{" "}
                  <IoIosArrowDown className="SUIDeskNavbarDownArrowIcon" />
                </span>
              }
            >
              <Menu.ItemGroup className="SUIDeskNavbarSubMenuLink">
                <Menu.Item key="setting:1">
                  <Link to="/products/steam-gas-turbine-blades">
                    {" "}
                    Steam & Gas Turbine Blades
                  </Link>
                </Menu.Item>
                <Menu.Item key="setting:2">
                  <Link to="/products/precision-components">
                    {" "}
                    Precision Components
                  </Link>
                </Menu.Item>
                <Menu.Item key="setting:3">
                  <Link to="/products/heavy-fabrication">
                    {" "}
                    Heavy Fabrication
                  </Link>
                </Menu.Item>
                <Menu.Item key="setting:4">
                  <Link to="/products/dies-tools"> Dies & Tools</Link>
                </Menu.Item>
                <Menu.Item key="setting:5">
                  <Link to="/products/aero-sub-assemblies">
                    Aero Sub Assemblies
                  </Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.Item key="clients">
              <Link to="/clients">CLIENTS</Link>
            </Menu.Item>
            <Menu.Item key="quality">
              <Link to="/quality">QUALITY</Link>
            </Menu.Item>
            <Menu.Item key="careers">
              <Link to="/careers">CAREERS</Link>
            </Menu.Item>
            <Menu.Item key="Contact" className="SUIDeskNavbarLastMenuItem">
              <Link to="/contact"> CONTACT US</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};
