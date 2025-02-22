import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <div>
        <Header />
        <img
          className="absolute w-full bg-cover"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
          alt="Netflix-logo"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 opacity-80">
        <h1 className="font-bold text-3xl text-white py-2">Sign In</h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-2 my-2 bg-slate-800 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 bg-slate-800 w-full"
        />
        <button className="p-4 my-4 bg-red-700 w-full text-white">
          Sign In
        </button>
        <p className="text-white">New to Netflix? Sign up now.</p>
      </form>
    </div>
  );
}

export default Login
