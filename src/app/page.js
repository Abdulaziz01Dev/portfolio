import 'boxicons/css/boxicons.min.css';
import Button from "@/Components/ui/Button";

export default function Home() {

  return (
    <div className="flex flex-col gap-10 lg:flex-row px-10 lg:items-center justify-center w-full h-screen">
        <div className="flex flex-col gap-5 dark:text-white text-black w-full lg:w-[50vw]">
            <h6 className="text-xl">Hi I am</h6>
            <h5 className="text-2xl text-amber-600 uppercase">Abdulaziz Vohobjonov</h5>
            <div className="lg:flex hidden lg:flex-col lg:gap-2">
                <h1>Full Stuck</h1>
                <h1>Developer</h1>
            </div>
            <div className="flex flex-col lg:hidden gap-2">
                <h1 className="text-5xl">Full Stuck</h1>
                <h1 className="text-5xl">Developer</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
            <Button />
        </div>
        <div className="flex flex-col gap-2 w-full lg:w-[50vw] justify-center items-center">
            <img src="../Assets/main.png" alt="Shunchaki asosiy rasm"/>
            <div className="flex gap-3 text-2xl dark:text-white text-black">
                <a href="#"><i className="bx bxl-github"></i></a>
                <a href="#"><i className="bx bxl-youtube"></i></a>
                <a href="#"><i className="bx bxl-telegram"></i></a>
                <a href="#"><i className="bx bxl-instagram"></i></a>
            </div>
        </div>
    </div>
  );
}
