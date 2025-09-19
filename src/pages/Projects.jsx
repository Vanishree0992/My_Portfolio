import ProjectCard from "../components/ProjectCard";

// Import images
import project4 from "../assets/project4.png";
import project from "../assets/project.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import project10 from "../assets/project10.png";
import project11 from "../assets/project11.png";
import project12 from "../assets/project12.png";
import project13 from "../assets/project13.png";

export default function Projects() {
  const projects = [
    {
      title: "Employee's Payslip Website",
      description: "A web-based solution to generate employee payslips efficiently.",
      image: project4,
      live: "https://vanishree0992.github.io/Prototype/prototype%204/index.html",
      code: "https://github.com/Vanishree0992/Prototype/tree/main/prototype%204",
    },
    {
      title: "Vetri Supermarket Billing Layout",
      description: "A billing system prototype for supermarkets with clean UI.",
      image: project,
      live: "https://vanishree0992.github.io/Prototype/prototype%205/index.html",
      code: "https://github.com/Vanishree0992/Prototype/tree/main/prototype%205",
    },
    {
      title: "VTS Exam Portal",
      description: "An online examination portal with role-based logins.",
      image: project5,
      live: "https://vanishree0992.github.io/Prototype/prototype%206/index.html",
      code: "https://github.com/Vanishree0992/Prototype/tree/main/prototype%206",
    },
    {
      title: "Wedding Card Website",
      description: "A digital wedding card generator with modern design.",
      image: project6,
      live: "#",
      code: "https://github.com/Vanishree0992/wedding_cards_website",
    },
    {
      title: "Online Cooking Class",
      description: "A web app for hosting and attending online cooking classes.",
      image: project7,
      live: "#",
      code: "https://github.com/Vanishree0992/online-cooking-class",
    },
    {
      title: "Baby Products Website",
      description: "An e-commerce prototype for baby products.",
      image: project8,
      live: "https://baby-products.onrender.com",
      code: "https://github.com/Vanishree0992/Baby_products",
    },
    {
      title: "Bakery Website",
      description: "A responsive bakery website showcasing products.",
      image: project9,
      live: "https://prototype-10-2.onrender.com",
      code: "https://github.com/Vanishree0992/prototype-10",
    },
    {
      title: "Meditation Website",
      description: "A relaxing UI layout for meditation practices.",
      image: project10,
      live: "https://prototype-11.onrender.com",
      code: "https://github.com/Vanishree0992/Prototype-11",
    },
    {
      title: "Stationary Shop Website",
      description: "An online shop layout for stationery products.",
      image: project11,
      live: "https://stationary-shop-1-5w6u.onrender.com/",
      code: "https://github.com/Vanishree0992/Stationary-Shop",
    },
    {
      title: "Trading Website Layout",
      description: "A stock trading prototype with modern layout.",
      image: project12,
      live: "https://trading-project-3.onrender.com/",
      code: "https://github.com/Vanishree0992/Trading_project",
    },
    {
      title: "Second Hand Bike Website",
      description: "A platform for buying and selling second-hand bikes.",
      image: project13,
      live: "https://bike-project.onrender.com/",
      code: "https://github.com/Vanishree0992/Bike_Project",
    },
  ];

  return (
    <section className="bg-nude py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-fancy text-center text-wood mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              title={proj.title}
              description={proj.description}
              image={proj.image}
              live={proj.live}
              code={proj.code}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
