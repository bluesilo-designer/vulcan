import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
