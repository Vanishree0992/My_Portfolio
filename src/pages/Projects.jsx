import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Employee's Payslip Website",
      description: "A web-based solution to generate employee payslips efficiently.",
      image: "src//assets/project4.png",
      live: "https://vanishree0992.github.io/Prototype/prototype%204/index.html",
      code: "https://github.com/Vanishree0992/Prototype/tree/main/prototype%204",
    },
    {
      title: "Vetri Supermarket Billing Layout",
      description: "A billing system prototype for supermarkets with clean UI.",
      image: "src//assets/project.png",
      live: "https://vanishree0992.github.io/Prototype/prototype%205/index.html",
      code: "https://github.com/Vanishree0992/Prototype/tree/main/protot%20ype%205",
    },
    {
      title: "VTS Exam Portal",
      description: "An online examination portal with role-based logins.",
      image: "src//assets/project5.png",
      live: "https://vanishree0992.github.io/Prototype/prototype%206/index.html",
      code: "https://github.com/Vanishree0992/Prototype/tree/main/prototype%206",
    },
    {
      title: "Wedding Card Website",
      description: "A digital wedding card generator with modern design.",
      image: "src/assets/project6.png",
      live: "#",
      code: "https://github.com/Vanishree0992/wedding_cards_website",
    },
    {
      title: "Online Cooking Class",
      description: "A web app for hosting and attending online cooking classes.",
      image: "src/assets/project7.png",
      live: "#",
      code: "https://github.com/Vanishree0992/online-cooking-class",
    },
    {
      title: "Baby Products Website",
      description: "An e-commerce prototype for baby products.",
      image: "src//assets/project8.png",
      live: "https://baby-products.onrender.com",
      code: "https://github.com/Vanishree0992/Baby_products",
    },
    {
      title: "Bakery Website",
      description: "A responsive bakery website showcasing products.",
      image: "src//assets/project9.png",
      live: "https://prototype-10-2.onrender.com",
      code: "https://github.com/Vanishree0992/prototype-10",
    },
    {
      title: "Meditation Website",
      description: "A relaxing UI layout for meditation practices.",
      image: "src//assets/project10.png",
      live: "https://prototype-11.onrender.com",
      code: "https://github.com/Vanishree0992/Prototype-11",
    },
    {
      title: "Stationary Shop Website",
      description: "An online shop layout for stationery products.",
      image: "src//assets/project11.png",
      live: "https://stationary-shop-1-5w6u.onrender.com/",
      code: "https://github.com/Vanishree0992/Stationary-Shop",
    },
    {
      title: "Trading Website Layout",
      description: "A stock trading prototype with modern layout.",
      image: "src//assets/project12.png",
      live: "https://trading-project-3.onrender.com/",
      code: "https://github.com/Vanishree0992/Trading_project",
    },
    {
      title: "Second Hand Bike Website",
      description: "A platform for buying and selling second-hand bikes.",
      image: "src//assets/project13.png",
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
