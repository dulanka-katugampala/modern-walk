import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import PathRoutes from "./router/Index.tsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./components/common/ErrorPage.tsx";
import { ScrollToTop } from "./components/common/ScrollToTop.tsx";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchOnReconnect: true,
        staleTime: 0,
      },
    },
  });

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop>
            <PathRoutes />
          </ScrollToTop>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
