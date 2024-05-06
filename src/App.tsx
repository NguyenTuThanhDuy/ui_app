import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import Homepage from "./screens/Homepage";
import VideoPage from "./screens/VideoPage";
import LayoutUser from "./components/LayoutUser";
import LoginPage from "./screens/LoginPage";
import SignupPage from "./screens/SignupPage";
import LoadingPage from "./screens/LoadingPage";

const Error404 = lazy(() => import("./screens/Error404"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 10 * (60 * 1000), // 10 mins
        gcTime: 5 * (60 * 1000), // 5 mins
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutUser />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
          <Route index element={<VideoPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Error404 />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
