import { createBrowserRouter, Navigate } from "react-router-dom"
import { Suspense, lazy } from "react"
import { MainLayout } from "@/app/layout/MainLayout"

const HomePage = lazy(() => import("@/features/home"))
const SchedulePage = lazy(() => import("@/features/schedule"))
const FacilitiesPage = lazy(() => import("@/features/facilities"))
const ServicesPage = lazy(() => import("@/features/services"))
const EcosystemPage = lazy(() => import("@/features/ecosystem"))
// const CompetitionPage = lazy(() => import("@/features/competition"))
const PriceListPage = lazy(() => import("@/features/pricelist"))
const ProgramPage = lazy(() => import("@/features/program"))
const AboutPage = lazy(() => import("@/features/about"))
const ContactPage = lazy(() => import("@/features/contact"))

const withSuspense = (Component: React.LazyExoticComponent<any>) => (
  <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
    <Component />
  </Suspense>
)

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: withSuspense(HomePage) },
        { path: "schedule", element: withSuspense(SchedulePage) },
        { path: "facilities", element: withSuspense(FacilitiesPage) },
        { path: "services", element: withSuspense(ServicesPage) },
        { path: "ecosystem", element: withSuspense(EcosystemPage) },
        // { path: "competition", element: withSuspense(CompetitionPage) },
        { path: "pricelist", element: withSuspense(PriceListPage) },
        { path: "program", element: withSuspense(ProgramPage) },
        { path: "about", element: withSuspense(AboutPage) },
        { path: "contact", element: withSuspense(ContactPage) },
        // ✅ fallback route untuk GitHub Pages SPA
        { path: "*", element: <Navigate to="/" replace /> }
      ]
    }
  ],
  {
    basename: "/borneoanfieldstadium/", // wajib sesuai nama repo
  }
)