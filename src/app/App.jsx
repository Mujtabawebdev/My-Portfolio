import { portfolioRoutes } from "../features/portfolio/routes/portfolio.routes.jsx";

export default function App() {
  const [{ element: Page }] = portfolioRoutes;

  return <Page />;
}
