import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { RecipeProvider } from "./contexts/RecipeContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import SpinnerFullPage from "./components/SpinnerFullPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const About = lazy(() => import("./pages/About"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const FoodInfo = lazy(() => import("./pages/FoodInfo"));
const Category = lazy(() => import("./pages/Category"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute"));

function App() {
  return (
    <AuthProvider>
      <RecipeProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="login" element={<Login />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={
                    <Navigate to="/app/category/burger" replace={true} />
                  }
                />
                <Route path="category" element={<CategoryPage />}>
                  <Route index element={<Navigate to="burger" />} />
                  <Route path=":id" element={<Category />} />
                </Route>
                <Route path="foodinfo" element={<FoodInfo />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;
