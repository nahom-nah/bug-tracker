import React from "react";
import { Formik, Form } from "formik";
import InputFields from "../components/InputFields";
import Link from "next/link";
import { useRegisterMutation } from "../generated/graphql";
import { useRouter } from "next/router";
import { toErrorMap } from "../utils/toErrorMap";
import Head from "next/head";

interface RegiserProps {}

const Register: React.FC<RegiserProps> = (props) => {
  const [, register] = useRegisterMutation();
  const router = useRouter();
  const onSignIn = () => {
    console.log("hello");
  };
  return (
    <>
      <Head>
        <title>Register page</title>
        <meta
          name="google-signin-client_id"
          content="413857722613-imff9l1pve9ib6rvjh0k3quqra5r5ca1.apps.googleusercontent.com"
        />
        <script
          src="https://apis.google.com/js/platform.js?onload=renderButton"
          async
          defer
        ></script>
      </Head>
      <div className="flex">
        <div className="bg-gray-900 w-1/3 h-screen">
          <Link href="/">
            <img className="h-14 cursor-pointer" src="logo.png" alt="logo" />
          </Link>

          <div> </div>
        </div>
        <div className="flex justify-center items-center h-screen w-2/3">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 ">
              Sign Up to Console.<span className="text-red-600">err()</span>
            </h3>{" "}
            <div className="flex justify-center ">
              <button
                id="my-signin2"
                data-onsuccess={() => onSignIn}
                className="w-4/5 flex mt-6 px-3 py-2 border-2 rounded-lg hover:bg-gray-100  hover:shadow focus:outline-none"
              >
                <img
                  className="h-6  object-cover object-cente"
                  src="google_r.png"
                  alt="google button"
                />
                <span className="ml-2  font-semibold">Sign up with Google</span>
              </button>
            </div>
            <div className="text-center mt-3 text-lg font-semibold text-gray-900">
              <div className="flex justify-center ">
                <a
                  href="https://github.com/login/oauth/authorize?client_id=f9083eaa98faae7e21d0"
                  className="w-4/5 flex mt-6 px-3 bg-gray-900 hover:bg-gray-800 py-2 border-2 rounded-lg  hover:shadow focus:outline-none"
                >
                  <img
                    className="h-6 object-cover object-cente"
                    src="GitHub_r.png"
                    alt="google button"
                  />
                  <span className="ml-2  font-semibold text-white">
                    Sign up with Github
                  </span>
                </a>
              </div>
              <div className="text-center mt-4 text-lg font-semibold text-gray-900"></div>
              or
            </div>
            <div>
              <Formik
                initialValues={{ username: "", email: "", password: "" }}
                onSubmit={async (values, { setErrors }) => {
                  const response = await register(values);
                  if (response.data?.register.errors) {
                    setErrors(toErrorMap(response.data.register.errors));
                  } else if (response.data?.register.user) {
                    router.push("/dashboard");
                  }
                }}
              >
                {({}) => (
                  <Form>
                    <InputFields
                      label="Username"
                      placeholder="John Doe"
                      name="username"
                    />
                    <InputFields
                      label="Email"
                      placeholder="email@email.com"
                      name="email"
                    />
                    <InputFields
                      label="password"
                      placeholder="password..."
                      name="password"
                      type="password"
                    />
                    <div className="text-gray-900 mt-4 font-semibold text-sm text-center">
                      already have an account?{" "}
                      <Link href="/login">
                        <a className="text-red-600 hover:text-red-900">
                          sign in
                        </a>
                      </Link>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="mt-4 w-full bg-red-600 px-3 text-white py-2 font-semibold rounded hover:bg-red-500"
                      >
                        Register
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
