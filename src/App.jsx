import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import About from './pages/About';
import AccountDetail from './features/profile/AccountDetail';
import AppLayout from './components/Layouts/AppLayout';
import ArticleDetail from './features/articles/ArticleDetail';
import ArticleList from './features/articles/ArticleList';
import CategoryDetail from './features/category/CategoryDetail';
import CategoryList from './features/category/CategoryList';
import Contact from './pages/Contact';
import EditorDashboard from './pages/EditorDashboard';
import Home from './pages/Home';
import Login from './features/auth/Login';
import PageNotFound from './pages/PageNotFound';
import ProfileDetail from './features/profile/ProfileDetail';
import Register from './features/auth/Register';
import TechEventDetail from './features/events/TechEventDetail';
import TechEventList from './features/events/TechEventList';
import TechJobDetail from './features/jobs/TechJobDetail';
import TechJobsList from './features/jobs/TechJobsList';
import TechToolDetail from './features/tools/TechToolDetail';
import TechToolList from './features/tools/TechToolList';
import ProfileDetailEmpty from './features/profile/ProfileDetailEmpty';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="articles" element={<ArticleList />} />
            <Route path="articles/:articleSlug" element={<ArticleDetail />} />
            <Route path="jobs" element={<TechJobsList />} />
            <Route path="jobs/:jobSlug" element={<TechJobDetail />} />
            <Route path="events" element={<TechEventList />} />
            <Route path="events/:eventSlug" element={<TechEventDetail />} />
            <Route path="tools" element={<TechToolList />} />
            <Route path="tools/:toolSlug" element={<TechToolDetail />} />
            <Route path="categories">
              <Route index element={<CategoryList />} />
              <Route path=":categorySlug" element={<CategoryDetail />} />
            </Route>

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="dashboard" element={<EditorDashboard />} />
            <Route path="profile" element={<ProfileDetail />} />
            {/* <Route path="profile" element={<ProfileDetailEmpty />} /> */}
            <Route path="account" element={<AccountDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

// filtering - categories/slug/trending-articles, categories/slug/featured-tech-tool,
// categories/slug/job-in-tech
// categories/slug/articles, categories/resource-spotlight
// =?filter=trending, =?filter=resource-spotlight
