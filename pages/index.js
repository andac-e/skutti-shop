import AnimatedBalls from "../components/animatedBalls";
import TopLogo from "../components/topLogo";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-cover bg-center bg-[url('/bg-2.jpg')] font-montserrat flex flex-col">
        <TopLogo />
        <AnimatedBalls />
      </div>
    </>
  );
}
