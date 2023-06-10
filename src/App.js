import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Reviews from "./pages/Reviews";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Join from "./pages/Join";
import Referral from "./pages/Referral";
import Faq from "./pages/Faq";
import GetStarted from "./pages/GetStarted";
import Salesfunnels from "./pages/Salesfunnels";
import Seo from "./pages/Seo";
import SocialMedia from "./pages/SocialMedia";
import WebDevelopment from "./pages/WebDevelopment";
import PpcAdvertising from "./pages/PpcAdvertising";
import Cannabis from "./pages/Cannabis";
import SeoLawyers from "./pages/SeoLawyers";
import Healthcare from "./pages/Healthcare";
import Dispensary from "./pages/Dispensary";
import CBDmarketing from "./pages/CBDmarketing";
import HealthWeb from "./pages/HealthWeb";
import MarijuanaMarketing from "./pages/MarijuanaMarketing";
import Terms from "./pages/Terms";
import WebsiteMaintainence from "./pages/WebsiteMaintainence";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="">
           <BrowserRouter>
           <Navbar/>
           <ScrollToTop/>
      <Routes>
        <Route path="/">
          <Route index element = {<Home/>}/>
          <Route path="about-us" element = {<About/>}/>
          <Route path="join" element = {<Join/>}/>
          <Route path="refer" element = {<Referral/>}/>
          <Route path="faq" element = {<Faq/>}/>
          <Route path="get-started" element = {<GetStarted/>}/>
          <Route path="services" element = {<Services/>}/>
          <Route path="blog" element = {<Blog/>}/>
          <Route path="reviews" element = {<Reviews/>}/>
          <Route path="sales-funnels" element = {<Salesfunnels/>}/>
          <Route path="seo" element = {<Seo/>}/>
          <Route path="social-media-marketing" element = {<SocialMedia/>}/>
          <Route path="web-development" element = {<WebDevelopment/>}/>
          <Route path="ppc-advertising" element = {<PpcAdvertising/>}/>
          <Route path="cannabis-marketing" element = {<Cannabis/>}/>
          <Route path="seo-for-lawyers" element = {<SeoLawyers/>}/>
          <Route path="healthcare-seo" element = {<Healthcare/>}/>
          <Route path="dispensary-marketing" element = {<Dispensary/>}/>
          <Route path="cbd-marketing" element = {<CBDmarketing/>}/>
          <Route path="healthcare-web-development" element = {<HealthWeb/>}/>
          <Route path="marijuana-marketing-and-advertising" element = {<MarijuanaMarketing/>}/>
          <Route path="monthly-website-maintenance" element = {<WebsiteMaintainence/>}/>
          <Route path="terms-&-conditions" element = {<Terms/>}/>
          </Route>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
