import { useState, useEffect } from 'react';
import {
  Briefcase,
  Code,
  User,
  Download,
  Calendar,
  Sparkles,
  Target,
  Github,
  Linkedin,
  Mail,
  Star
} from 'lucide-react';
import { FaReddit } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  const achievements = [
    { number: "6+", label: " Practice Projects", icon: <Briefcase className="h-5 w-5" />, suffix: "" },
    { number: "12", label: "Months Learning", icon: <Calendar className="h-5 w-5" />, suffix: "+" },
    { number: "99", label: "Dedication", icon: <Target className="h-5 w-5" />, suffix: "%" },
    { number: "10", label: "Learning Mindset", icon: <User className="h-5 w-5" />, suffix: "+" }
  ];

  const techStack = [
    { category: "Frontend", items: ["HTML", "CSS",  "JavaScript", "Tailwind", "React"] },
    { category: "Backend", items: ["Node.js", "Express", "Java", "MongoDB"] },
  
  ];

  const features = [
    // "Full-stack expertise",
    // "Clean, maintainable code",
    // "Performance optimization",
    // "Agile methodology",
    // "24/7 support",
    // "Timely delivery"
  
  "Strong fundamentals in web development",
  "Practice-based learning with multiple projects",
  "Focus on clean and maintainable code",
  "Basic full-stack development exposure",
  "Comfortable with Git and modern tools",
  "Committed to continuous improvement"
];
  

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Sarbaz1122" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/muhammadullah07/" },
    { icon: <FaReddit className="h-5 w-5" />, href: "https://www.reddit.com/user/RoutineBed6148/" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:sahilmd.dev@gmail.com" }
  ];

  const tabContent = {
    personal:
      "I am a motivated and passionate web development student with a strong interest in building responsive and user-friendly websites.",
    professional:
      "Aspiring web developer seeking an internship opportunity to apply front-end and back-end skills.",
    approach:
      "I focus on clean code, best practices, and user-centered designs with continuous learning."
  };

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setCounter((prev) => (prev + 1) % achievements.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Sahil-resume.pdf';
    link.download = 'Sahil-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-br from-background to-primary/5 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-2xl mb-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">ABOUT ME</span>
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Transforming <span className="text-primary">Ideas</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building digital experiences with performance, elegance, and innovation.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-card border rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left */}
            <div>
              <h2 className="text-2xl font-bold mb-2">M_Ullah</h2>
              <p className="text-primary mb-4">Full Stack Developer</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {achievements.map((a, i) => (
                  <div
                    key={i}
                    className={`p-4 border rounded-xl ${
                      counter === i ? 'border-primary bg-primary/10' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {a.icon}
                      <div>
                        <div className="font-bold">{a.number}{a.suffix}</div>
                        <div className="text-sm text-muted-foreground">{a.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="flex gap-4 border-b mb-4">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 capitalize ${
                      activeTab === tab
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-muted-foreground"
                >
                  {tabContent[activeTab]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Right */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code className="text-primary" /> Tech Stack
              </h3>

              {techStack.map((stack, i) => (
                <div key={i} className="mb-4">
                  <h4 className="font-semibold mb-2">{stack.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-sm border rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={handleDownload}
                className="mt-6 w-full flex items-center justify-center gap-2 p-4 bg-primary text-primary-foreground rounded-xl"
              >
                <Download /> Download Resume
              </button>

              <div className="flex justify-center gap-4 mt-6">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} className="text-muted-foreground hover:text-primary">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Me */}
          <div className="mt-10">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Star className="text-primary" /> Why Choose Me
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};










// import React, { useState, useEffect } from 'react';
// import {
//   Briefcase,
//   Code,
//   User,
//   Download,
//   Calendar,
//   Sparkles,
//   Target,
//   Github,
//   Linkedin,
//   Twitter,
//   Mail,
//   Star
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export const AboutSection = () => {
//   const [activeTab, setActiveTab] = useState('personal');
//   const [counter, setCounter] = useState(0);

//   const achievements = [
//     { number: "6+", label: "Practice Projects", icon: <Briefcase className="h-5 w-5" /> },
//     { number: "12+", label: "Months Learning", icon: <Calendar className="h-5 w-5" /> },
//     { number: "100%", label: "Dedication", icon: <Target className="h-5 w-5" /> },
//     { number: "∞", label: "Learning Mindset", icon: <User className="h-5 w-5" /> }
//   ];

//   const techStack = [
//     { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind"] },
//     { category: "Backend (Basics)", items: ["Node.js", "Express"] },
//     { category: "Tools", items: ["Git", "GitHub", "Vercel"] }
//   ];

//   const features = [
//   "Strong fundamentals in HTML, CSS & JavaScript",
//   "Basic backend knowledge with Node.js and Express",
//   "Familiar with MongoDB and REST API concepts",
//   "Hands-on practice projects (frontend & backend)",
//   "Clean & readable code habits",
//   "Quick learner and adaptable team player"
// ];


//   const tabContent = {
//     personal:
//       "I am a motivated and passionate web development learner with a strong interest in building responsive and user-friendly websites.",
//     professional:
//       "Aspiring web developer actively seeking an internship opportunity to learn from experienced developers and contribute to real projects.",
//     approach:
//       "I focus on writing clean code, following best practices, and continuously improving my skills through feedback and practice."
//   };

//   useEffect(() => {
//     const interval = setInterval(
//       () => setCounter((prev) => (prev + 1) % achievements.length),
//       2000
//     );
//     return () => clearInterval(interval);
//   }, [achievements.length]);

//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = '/Sahil-resume.pdf';
//     link.download = 'Sahil-resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section id="about" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto space-y-12">

//         {/* Header */}
//         <div className="text-center">
//           <Sparkles className="mx-auto text-primary mb-2" />
//           <h1 className="text-4xl font-bold">Aspiring Web Developer</h1>
//           <p className="text-muted-foreground mt-2">
//             Actively learning and seeking an internship opportunity
//           </p>
//         </div>

//         {/* Profile */}
//         <div className="bg-card border rounded-3xl p-8">
//           <h2 className="text-2xl font-bold">M_Ullah</h2>
//           <p className="text-primary mb-6">Web Developer (Internship Seeker)</p>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//             {achievements.map((a, i) => (
//               <div
//                 key={i}
//                 className={`p-4 rounded-xl border ${
//                   counter === i ? 'border-primary bg-primary/10' : 'border-border'
//                 }`}
//               >
//                 <div className="flex items-center gap-2">
//                   {a.icon}
//                   <div>
//                     <div className="font-bold">{a.number}</div>
//                     <div className="text-xs text-muted-foreground">{a.label}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Tabs */}
//           <div className="flex border-b mb-4">
//             {['personal', 'professional', 'approach'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`flex-1 py-2 ${
//                   activeTab === tab
//                     ? 'text-primary border-b-2 border-primary'
//                     : 'text-muted-foreground'
//                 }`}
//               >
//                 {tab.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.p
//               key={activeTab}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="text-muted-foreground"
//             >
//               {tabContent[activeTab]}
//             </motion.p>
//           </AnimatePresence>
//         </div>

//         {/* Tech Stack */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {techStack.map((stack, i) => (
//             <div key={i} className="border rounded-2xl p-4">
//               <h4 className="font-semibold mb-2">{stack.category}</h4>
//               {stack.items.map((item, j) => (
//                 <p key={j} className="text-sm text-muted-foreground">• {item}</p>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Why Choose Me */}
//         <div className="bg-card border rounded-3xl p-6">
//           <h3 className="font-bold mb-3 flex items-center gap-2">
//             <Star className="text-primary" /> Why Choose Me
//           </h3>

//           {features.map((f, i) => (
//             <p key={i} className="text-sm text-muted-foreground">• {f}</p>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <button
//             onClick={handleDownload}
//             className="px-6 py-3 border rounded-xl font-semibold hover:bg-accent"
//           >
//             <Download className="inline mr-2" />
//             Download Resume
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };
