import "./App.css";

import SimpleSlider from "./component/owl-carousel";
import Logo from "../src/images/login/Icon.png";

function App() {
  return (
    <>
      <section>
        <div className="bg-[#EBF5FF] w-full h-[960px]">
          <div className="grid grid-cols-6">
            <div className="pt-[136px] ml-[118px]">
              <div className="w-[575px] h-[636px] gap-[32px] login">
                <div className="flex content-center">
                  <img
                    src={Logo}
                    className="m-auto mt-[65px] mb-[32px]"
                    alt="Logo"
                  />
                </div>

                <p className="text-center mb-[32px] login_text">Login</p>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="email_input mb-[16px]"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="email_input mb-[16px]"
                />

                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="remember_me"
                    name="remember_me"
                    value="remember_me"
                  />
                  <label htmlFor="remember_me" className="remember_me">
                    Remember Me
                  </label>
                </div>

                <div className="login_btn">
                  <p className="login_btn_text ">Login</p>
                </div>
              </div>
            </div>

            
            {/* <SimpleSlider /> */}
            
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
