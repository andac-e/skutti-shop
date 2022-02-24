import AnimatedBalls from "../components/animatedBalls";
import TopLogo from "../components/topLogo";

export default function Home() {
  return (
    <>
      <div className="home-bg flex flex-col">
        <TopLogo />
        <AnimatedBalls />
      </div>
    </>
  );
}
