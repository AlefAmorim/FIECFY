import { useState } from "react";
import { MdOutlineMail, MdOutlinePassword, MdClose } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaSpotify, FaApple, FaFacebook } from "react-icons/fa";
import Button from "../Button";

const LoginForm = ({ isOpen, handleClose }) => {
  const [showPass, setShowPass] = useState(false);
  const [dados, setDados] = useState({
    email: "",
    senha: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({
      ...dados,
      [name]:value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dados);
  };
  return (
    <div className={` p-4 absolute bg-zinc-800 h-max w-110 rounded-md z-4 ${isOpen?'animate-fade-out':"animate-fade-in"}`}>
      <header className="flex justify-between items-center p-3">
        <h2 className="flex items-center gap-2 text-balance text-2xl text-center text-white font-bold">
          <FaSpotify className="text-zinc-200" />
          Bem vindo(a) de volta
        </h2>
        <button
          type="button"
          title="Fechar"
          className="cursor-pointer text-zinc-400 rounded-full p-2 hover:bg-zinc-500/30"
          onClick={handleClose}
        >
          <MdClose size={30} />
        </button>
      </header>
      <form
        action="post"
        className="h-full flex flex-col p-3 gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <div className="px-4 py-2 flex gap-2 items-center rouned-md border-zinc-500 border-2 rounded-lg ">
            <MdOutlineMail size={20} className="text-zinc-400" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full h-full p-2 outline-0"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="senha" className="font-semibold">
            Senha
          </label>
          <div className="px-4 py-2 flex gap-2 items-center rouned-md border-zinc-500 border-2 rounded-lg ">
            <MdOutlinePassword size={20} className="text-zinc-400 " />
            <input
              type={showPass ? "text" : "password"}
              name="senha"
              id="senha"
              placeholder="Senha"
              className="w-full h-full p-2 outline-0"
              onChange={handleChange}
            />
            <button
              type="button"
              className="cursor-pointer text-zinc-400 rounded-full p-2 hover:bg-zinc-500/30"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
            </button>
          </div>
          <a href="#" className="text-green-400 text-sm  font-medium hover:underline block w-max">Esqueceu a senha?</a>
        </div>

        <Button className="w-full bg-green-500 text-white rounded-full  py-3 px-8 font-bold hover:bg-green-400 hover:scale-105 transition-transform cursor-pointer">
          Login
        </Button>

        <div className="w-full flex gap-3 justify-center ">
          <Button
            className="rounded-full font-bold border-2 bg-zinc-400/30 border-zinc-400 hover:border-white hover:scale-105 transition-transform cursor-pointer p-1"
            title="Login com o google"
          >
            <FcGoogle size={40} />
          </Button>

          <Button
            className="rounded-full font-bold border-2 bg-zinc-400/30 border-zinc-400 hover:border-white hover:scale-105 transition-transform cursor-pointer p-1"
            title="Login com a apple"
          >
            <FaApple size={40} />
          </Button>

          <Button
            className="rounded-full font-bold border-2 bg-zinc-400/30 border-zinc-400 hover:border-white hover:scale-105 transition-transform cursor-pointer p-1"
            title="Login com  facebook"
          >
            <FaFacebook size={40} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
