import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import HomePage from "@/pages/Home/HomePage";
import AboutPage from "@/pages/About/AboutPage";
import ActivitiesPage from "@/pages/Activities/ActivitiesPage";
import ActivityDetailsPage from "@/pages/ActivityDetails/ActivityDetailsPage";
import ToursPage from "@/pages/Tours/ToursPage";
import GalleryPage from "@/pages/Gallery/GalleryPage";
import BlogPage from "@/pages/Blog/BlogPage";
import BlogPostPage from "@/pages/BlogPost/BlogPostPage";
import BookingPage from "@/pages/Booking/BookingPage";
import ContactPage from "@/pages/Contact/ContactPage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import ServicesPage from "@/pages/Services/ServicesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/activities/:id" element={<ActivityDetailsPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
