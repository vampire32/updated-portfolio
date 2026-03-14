import { Navbar } from './components';
import { About, Header, Work, Skills, Testimonial, Footer } from './container';


export default function Home() {
  return (
    <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
  );
}
