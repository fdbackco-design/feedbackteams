import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Suspense, lazy } from "react";

// 코드 분할을 위한 lazy loading
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const Service = lazy(() => import("@/pages/service"));
const Brand = lazy(() => import("@/pages/brand"));
const News = lazy(() => import("@/pages/news"));
const Contact = lazy(() => import("@/pages/contact"));
const Article = lazy(() => import("@/pages/article"));
const Hoid = lazy(() => import("@/pages/brand/hoid"));
const Medifeed = lazy(() => import("@/pages/brand/medifeed"));
const Asran = lazy(() => import("@/pages/brand/asran"));
const InYourHeart = lazy(() => import("@/pages/brand/inyourheart"));
const Sangsaeng = lazy(() => import("@/pages/brand/sangsaeng"));
const B2B2C_Demo = lazy(() => import("@/pages/B2B2C_Demo"));
const NotFound = lazy(() => import("@/pages/not-found"));

// 로딩 컴포넌트
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="text-muted-foreground">로딩 중...</p>
    </div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/brand" component={Brand} />
        <Route path="/brand/hoid" component={Hoid} />
        <Route path="/brand/asran" component={Asran} />
        <Route path="/brand/medifeed" component={Medifeed} />
        <Route path="/brand/inyourheart" component={InYourHeart} />
        <Route path="/brand/sangsaeng" component={Sangsaeng} />
        <Route path="/news" component={News} />
        <Route path="/article/:id" component={Article} />
        <Route path="/contact" component={Contact} />
        <Route path="/b2b2c-demo" component={B2B2C_Demo} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
