import Nav from "./components/Nav"
import Landing from "./landing/Landing"
import Features from "./features/Features"
import Reviews from "./reviews/Reviews"

export default function Home() {
  return (
    <div>
      <Nav />
      <Landing />
      <Features />
      <Reviews />
    </div>
  );
}
