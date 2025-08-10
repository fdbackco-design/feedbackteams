import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Service from "@/pages/service";
import Brand from "@/pages/brand";
import News from "@/pages/news";
import Contact from "@/pages/contact";
import Article from "@/pages/article";
import Hoid from "@/pages/brand/hoid";
import Medifeed from "@/pages/brand/medifeed";
import InYourHeart from "@/pages/brand/inyourheart";
import Sangsaeng from "@/pages/brand/sangsaeng";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/service" component={Service} />
      <Route path="/brand" component={Brand} />
      <Route path="/brand/hoid" component={Hoid} />
      <Route path="/brand/medifeed" component={Medifeed} />
      <Route path="/brand/inyourheart" component={InYourHeart} />
      <Route path="/brand/sangsaeng" component={Sangsaeng} />
      <Route path="/news" component={News} />
      <Route path="/article/:id" component={Article} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const isHomePage = location === "/";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className={`flex flex-col ${isHomePage ? '' : 'min-h-screen'}`}>
          <Header />
          <main className={isHomePage ? '' : 'flex-1'}>
            <Router />
          </main>
          {!isHomePage && <Footer />}
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
