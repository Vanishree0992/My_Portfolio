export default function About() {
  return (
    <section className="bg-nude py-12 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-fancy text-center text-wood mb-10">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/vanishree/400/400"
              alt="Vanishree profile"
              className="rounded-2xl shadow-lg w-72 h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl font-semibold text-honey mb-4">
              Hello, I'm Vanishree 👋
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a passionate <span className="font-bold">Frontend Developer</span> 
              and <span className="font-bold">Electronics Engineer</span> with 2 years of 
              experience at <span className="font-bold">DRDO (Defence Research Development Organisation)</span>.  
              I love crafting clean, responsive, and user-friendly web applications with 
              modern technologies like <span className="text-honey">React, Django, and Tailwind CSS</span>.
            </p>

            {/* Skills */}
            <h4 className="text-xl font-semibold text-wood mb-3">Skills</h4>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Django",
                "Tailwind CSS",
                "JavaScript",
                "Bootstrap",
                "Git & GitHub",
                "Python",
                "Electronics Systems",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-honey text-white px-4 py-2 rounded-full shadow-md hover:bg-wood transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Experience */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-wood mb-3">
                Experience
              </h4>
              <div className="border-l-4 border-honey pl-4">
                <p className="text-lg font-bold text-gray-800">
                  Electronics Engineer @ DRDO
                </p>
                <p className="text-gray-600">2 Years | 2021 – 2023</p>
                <p className="mt-2 text-gray-700">
                  Worked on advanced defence research projects, applying technical 
                  expertise to develop innovative solutions in electronics and embedded systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
