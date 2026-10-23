import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useReview } from './lib/review';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Product } from './pages/Product';
import { Integration } from './pages/Integration';
import { Assurance } from './pages/Assurance';
import { Company } from './pages/Company';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

/* Old hash links (#/products/trms) keep working: redirect to the real path. */
function HashRedirect() {
  const { hash } = useLocation();
  if (hash.startsWith('#/')) return <Navigate to={hash.slice(1)} replace />;
  return <Home />;
}

/* Hidden entry to the review panel. Switches it on for this tab, then
   lands on the home page. Not linked from anywhere. */
function DemoEntry() {
  const { enableDemo } = useReview();
  useEffect(enableDemo, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <Navigate to="/" replace />;
}

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HashRedirect />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="integration" element={<Integration />} />
        <Route path="assurance" element={<Assurance />} />
        <Route path="company" element={<Company />} />
        <Route path="contact" element={<Contact />} />
        <Route path="__demo" element={<DemoEntry />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
