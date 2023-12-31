import  { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const Register = () => {
    const {createUser, nameAndUrl, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    reset,
   formState : {errors},
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.ConfirmPassword)
    .then(result =>{
        const loggedUser = result.user
        console.log(loggedUser)
        nameAndUrl(data.name, data.photoUrl)
        .then(()=>{
            const savedUser = {name : data.name , email : data.email, photo : data.photoUrl}
            console.log(savedUser)
            const url = "https://e-commerce-site-back-end.vercel.app/users"
            fetch(url, {
              method : "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if(data.insertedId){
                reset()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
            });
           
        })

    })

  };


  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
        const loggedUser = result.user
        const savedUser = {name : loggedUser.displayName, email : loggedUser.email}
        const url = "https://e-commerce-site-back-end.vercel.app/users"
        fetch(url, {
          method : "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate(from, { replace: true });
        });
       
    })
  }




  return (
    <div className="hero min-h-screen bg-base-200 p-5">
      <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="font-bold text-xl">Register Now</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: true,
                })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
              {errors.name && (
                <span className="text-red-500">{errors.name}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                 {...register("password", {
                  required: "Password is required",
                //   minLength: {
                //     value: 6,
                //     message: "Password must be at least 6 characters",
                //   },
                //   pattern: {
                //     value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/,
                //     message: "Password must contain at least one uppercase letter, one number, and one special character",
                //   },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered relative"
                required
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Confirm Password</span>
              </label>

              <input
                {...register("ConfirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                type="password"
                placeholder="password"
                className="input input-bordered relative"
                required
              />

              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>

              <input
                {...register("photoUrl", {
                  required: true,
                })}
                type="url"
                placeholder="Photo URL"
                className="input input-bordered relative"
                required
              />
            </div>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already Have a Account
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="px-8 py-3  bg-orange-500 transform duration-500 hover:scale-105 box-border text-white rounded-md">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="divider mb-10">
          <button onClick={handleGoogleSignIn} className="border px-4 py-2 btn-primary rounded-full flex items-center gap-2">
            {" "}
            <FaGoogle></FaGoogle> Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
