export default function Footer() {
  return (
    <footer className="bg-wood text-nude py-6 mt-10">
      <div className="container mx-auto text-center space-y-2">
        <p className="font-heading">&copy; {new Date().getFullYear()} Vanishree | All Rights Reserved</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/Vanishree0992" target="_blank" rel="noreferrer" className="hover:text-honey transition">GitHub</a>
          <a href="https://www.linkedin.com/in/vanishree-anbuchelvan-8b90299a/" target="_blank" rel="noreferrer" className="hover:text-honey transition">LinkedIn</a>
          <a href="mailto:vani0992@gmail.com" className="hover:text-honey transition">Email</a>
        </div>
      </div>
    </footer>
  );
}
