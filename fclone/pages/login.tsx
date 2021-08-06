import { Formik, Form } from "formik";
import React from "react";
import InputFields from "../components/InputFields";
import Link from "next/link";
interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="flex">
      <div className="bg-gray-900 w-1/3 h-screen">
        <Link href="/">
          <img className="h-14 cursor-pointer" src="logo.png" alt="logo" />
        </Link>

        <div></div>
      </div>
      <div className="flex justify-center items-center h-screen w-2/3">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            Sign In to Console.<span className="text-red-600">err()</span>
          </h3>{" "}
          <div className="flex justify-center ">
            <button className="w-4/5 flex mt-6 px-3 py-2 border-2 rounded-lg  border-gray-200 hover:bg-gray-50  hover:shadow focus:outline-none">
              <img
                className="h-6  object-cover object-center"
                src="google_r.png"
                alt="googole button"
              />
              <span className="ml-2 text-gray-500 font-semibold">
                Sign In with Google
              </span>
            </button>
          </div>
          <div className="flex justify-center ">
            <button className=" w-4/5 flex mt-6 px-3 py-2 border-2 rounded-lg hover:shadow border-blue-200 hover:bg-gray-50   focus:outline-none">
              <img
                className="h-6  object-cover object-center"
                src="facebook_r.png"
                alt="googole button"
              />
              <span className="ml-2 text-gray-500 font-semibold">
                Sign In with facebook
              </span>
            </button>
          </div>
          <div className="text-center mt-4 text-lg font-semibold text-gray-900">
            or
          </div>
          <div>
            <Formik
              initialValues={{ username: "", email: "", password: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({}) => (
                <Form>
                  <InputFields
                    label="Username or Email"
                    placeholder="John Doe"
                    name="username"
                  />

                  <InputFields
                    label="password"
                    placeholder="password..."
                    name="password"
                    type="password"
                  />
                  <div className="text-gray-900 mt-4 font-semibold text-sm text-center">
                    dont have an account?{" "}
                    <Link href="/register">
                      <a className="text-red-600 hover:text-red-900">sign up</a>
                    </Link>
                  </div>
                  <div>
                    <button className="mt-4 w-full bg-red-600 px-3 text-white py-2 font-semibold rounded hover:bg-red-500">
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
