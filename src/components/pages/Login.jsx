import React from "react";
import Header from "../Header";
import axios from "../../axios";
import { toast } from "react-hot-toast";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";

const styles = {
  input: "w-full rounded-md p-2 px-4 fbg-[#e7ebf0]",
};

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [hide, setHide] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = axios.post("/login", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const resp = await res.json();

      setTimeout(() => {
        setLoading(false);
        toast.success("Logged in successfully");
        // return;
      }, 8000);
    } catch (error) {
      toast.error("Failed!");
      console.log(error);
    }

    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="w-full min-h-screen flex flex-column relative flex-auto bg-slate-100 ">
      <Header />

      <div className="md:p-5 flex justify-center items-center flex-auto  overflow-y-scroll text-slate-600">
        <div className="flex min-h-[calc(100vh - 7px)] md:min-h-screen md:pb-40 flex-col">
          <div className="flex flex-col items-center flex-1">
            <div className="w-full  py-[50px] md:px-[30px] px-[10px] flex-col m-auto md:justify-center space-y-5">
              <p className="text-center text-2xl md:text-4xl font-semibold ">
                Login
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col m-auto justify-center space-y-5 min-w-[350px] md:min-w-[600px]"
              >
                {/* <input name="csrfToken" value={csrfToken} type="hidden" /> */}
                <input
                  type="email"
                  name="email"
                  value={formData["email"]}
                  className={styles.input}
                  placeholder="E-mail"
                  autoCorrect="off"
                  onChange={handleChange}
                  required
                />
                <div className="w-full flex items-center relative">
                  <input
                    type={hide ? "password" : "text"}
                    className={styles.input}
                    placeholder="Password"
                    name="password"
                    value={formData["passsword"]}
                    onChange={handleChange}
                    required
                  />

                  <span
                    className="absolute text-sm cursor-pointer rounded p-1 right-3"
                    onClick={() => setHide(!hide)}
                  >
                    {hide ? (
                      <FaRegEye size={20} />
                    ) : (
                      <RiEyeCloseLine size={20} />
                    )}
                  </span>
                </div>

                <button
                  className={`bg-[#0E7705] text-white font-semibold rounded-md p-2 px-4 w-full ${
                    loading && "cursor-not-allowed"
                  }`}
                >
                  {loading ? <LoadingIcon /> : "Login"}
                </button>

                {/*
                <div className="flex flex-col space-y-4 py-2 text-slate-600 ">
                  <p className="text-right text-md md:text-lg ">
                    Don&apos;t have an account yet?{" "}
                    <span className=" text-blue-400 ">
                      <a href="/register">register</a>
                    </span>
                  </p>
                </div>
             */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const LoadingIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
};
