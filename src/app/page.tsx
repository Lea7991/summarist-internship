import Nav from "./components/Nav"
import Landing from "./landing/Landing"
import Features from "./features/Features"
import Reviews from "./reviews/Reviews"
import Numbers from "./numbers/Numbers"
import Footer from "./footer/Footer"

export default function Home() {
  return (
    <div>
      <Nav />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </div>
  );
}
