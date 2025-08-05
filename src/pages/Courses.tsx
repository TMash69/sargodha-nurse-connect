import Header from "@/components/Header";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <CoursesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Courses;