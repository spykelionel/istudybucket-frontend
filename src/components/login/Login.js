import React from "react";
import { MyCheckbox, MyTextInput } from "../../__sub__/InputCheckSelect";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  EyeIcon,
  EyeOffIcon,
  BookOpenIcon,
} from "@heroicons/react/solid";
import { IconContext } from "react-icons/lib";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import Button from "../../__sub__/Button";
// import styles from "./style.module.css";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send api req
  };
  return (
    <IconContext.Provider value={{ size: "2rem" }}>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="border shadow rounded p-5 max-w-md w-full space-y-8">
          <div className="flex justify-center">
            <BookOpenIcon className="w-16 h-16 self-center text-green-500" />
            <h2 className="text-center self-center text-2xl font-bold text-gray-700">
              istudybucket
            </h2>
          </div>
          <div className="mt-6 flex justify-center">
            <h2 className="text-center self-center text-xl font-normal text-gray-500">
              Sign in to your account
            </h2>
            {/* <LockClosedIcon className="w-8 h-8 text-green-500" /> */}
          </div>
          <Formik
            initialValues={{
              username: "",
              password: "",
              rememberMe: false, // added for our checkbox
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
              password: Yup.string()
                .min(8, "Must be 8 characters or more")
                .required("Required"),
              rememberMe: Yup.boolean()
                .required("Required")
                .oneOf(
                  [true, false],
                  "We'll remember you."
                ),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              // await axios.post('url',body)
                        // .then()
                        // .catch(e)
                setSubmitting(false);
             
            }}
          >
            {(formik) => (
              <Form className="mt-8 space-y-6" method="POST">
                <div className="rounded-md -space-y-px">
                  <div className="mb-6">
                    <MyTextInput
                      label={"Username"}
                      id="username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Username"
                    />
                    {setUsername(formik.values.username)}

                    <div className="mt-6">
                      <div className="group relative w-full border border-transparent text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <MyTextInput
                          label="Password"
                          ispassword={"true"}
                          id="password"
                          name="password"
                          type={(!showPassword && "password") || "text"}
                          autoComplete="current-password"
                          required
                          className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                          placeholder="Password"
                        />
                        {setUsername(formik.values.password)}
                        <span className="absolute z-10 right-1 bottom-2 flex items-center pl-3">
                          {!showPassword && (
                            <EyeIcon
                              onClick={(e) => setShowPassword(!showPassword)}
                              className="h-5 w-5 text-green-500 group-hover:text-green-400"
                              aria-hidden="true"
                            />
                          )}
                          {showPassword && (
                            <EyeOffIcon
                              onClick={(e) => setShowPassword(!showPassword)}
                              className="h-5 w-5 text-green-500 group-hover:text-green-400"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="items-center">
                    <MyCheckbox
                      name="rememberMe"
                      id="rememberMe"
                      className="h-4 w-4 text-green-500 focus:ring-green-50 border-gray-300 rounded"
                    >
                      <label
                        htmlFor="rememberMe"
                        className="ml-2 self-center text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </MyCheckbox>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-green-500 hover:text-green-600"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    name="Sign in"
                    className="group uppercase font-medium relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  />
                  <p className="mt-2 text-center text-sm text-gray-600">
                    New?{"  "}
                    <a
                      href="#"
                      className="font-medium text-green-600 hover:text-green-500"
                    >
                      Create your free account
                    </a>
                  </p>
                </div>
                <div className="mt-2 bg-gray-600 w-full h-0.5" />
                <div className="">
                  <p className={" text-center mb-2"}>OR continue with</p>
                  <div className="flex justify-center mt-2">
                    <div className="border prima py-2 px-6 mx-3 cursor-pointer hover:bg-gray-100 rounded-2xl">
                      <FaFacebook />
                    </div>
                    <div className="border py-2 px-6 mx-3 cursor-pointer hover:bg-gray-100 rounded-2xl">
                      <FaGithub />
                    </div>
                    <div className="border py-2 px-6 mx-3 cursor-pointer hover:bg-gray-100 rounded-2xl">
                      <FaGoogle />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Login;
