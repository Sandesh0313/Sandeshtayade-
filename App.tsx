
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import { PROJECTS, LEARNING_POSTS, RABBIT_HOLES } from './constants';

const Home = () => (
  <section className="animate-in fade-in duration-700">
    <h1 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight tracking-tight text-stone-900">
      I’m Sandesh Tayade. I find patterns in data and build interfaces that make sense of them.
    </h1>
    <div className="prose prose-stone text-lg text-stone-700 space-y-6 max-w-[65ch]">
      <p>
        I am a Computer Engineering graduate based in the Mumbai Metropolitan Region. My work sits at the intersection of <strong>Data Analytics</strong>, <strong>Web Development</strong>, and <strong>Financial Markets</strong>.
      </p>
      <p className="font-medium italic border-l-2 border-stone-300 pl-6 py-2 text-stone-800 bg-stone-50/50">
        "I believe that the best products are built by people who aren't afraid to dive into the raw data before they start writing the frontend."
      </p>
      <p>
        Currently, I am a <strong>Financial Data Analyst Trainee</strong>, where I spend my days with Python, SQL, and Power BI. Alongside my technical career, I’ve spent the last <strong>5 years deeply immersed in the stock market</strong>—mastering both technical analysis and fundamental research.
      </p>
    </div>
    <div className="mt-12 flex flex-wrap gap-4">
      <Link to="/made" className="bg-stone-900 text-stone-50 px-8 py-3 rounded-sm hover:bg-stone-800 transition-all focus:ring-2 focus:ring-stone-400 focus:outline-none font-medium">
        See the work
      </Link>
      <Link to="/contact" className="border border-stone-300 text-stone-700 px-8 py-3 rounded-sm hover:bg-stone-100 transition-all font-medium">
        Let's talk
      </Link>
    </div>
  </section>
);

const Projects = () => (
  <section className="animate-in fade-in duration-500">
    <header className="mb-16">
      <h2 className="text-3xl font-semibold mb-4 text-stone-900">Things I’ve Made</h2>
      <p className="text-stone-500 max-w-md">Proof of effort across data science, web development, and hardware.</p>
    </header>
    <div className="space-y-20">
      {PROJECTS.map((project) => (
        <div key={project.id} className="group">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-2">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl font-semibold text-stone-800 group-hover:text-stone-600 transition-colors border-b-2 border-transparent hover:border-stone-200"
            >
              {project.title} ↗
            </a>
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-mono bg-stone-100 px-2 py-1 rounded w-fit">
              {project.status}
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-10 text-sm leading-relaxed">
            <div className="space-y-2">
              <h4 className="uppercase text-[10px] font-bold text-stone-400 tracking-widest">Problem</h4>
              <p className="text-stone-600">{project.problem}</p>
            </div>
            <div className="space-y-2">
              <h4 className="uppercase text-[10px] font-bold text-stone-400 tracking-widest">Approach</h4>
              <p className="text-stone-600">{project.why}</p>
            </div>
            <div className="space-y-2">
              <h4 className="uppercase text-[10px] font-bold text-stone-400 tracking-widest">Insight</h4>
              <p className="text-stone-600">{project.learned}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Learning = () => {
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set());

  const togglePost = (id: string) => {
    const next = new Set(expandedPosts);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setExpandedPosts(next);
  };

  return (
    <section className="animate-in fade-in duration-500">
      <header className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-stone-900">Things I’m Learning</h2>
        <p className="text-stone-500 max-w-md">Notes on technical shifts and new mental models.</p>
      </header>
      <div className="space-y-16">
        {LEARNING_POSTS.map((post) => {
          const isExpanded = expandedPosts.has(post.id);
          return (
            <article key={post.id} className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <time className="text-xs text-stone-400 font-mono">{post.date}</time>
                <span className="h-px bg-stone-200 flex-grow"></span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{post.topic}</span>
              </div>
              <h3 
                onClick={() => togglePost(post.id)}
                className="text-2xl font-semibold mb-4 text-stone-800 hover:text-stone-600 transition-colors cursor-pointer"
              >
                {post.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6 font-medium italic text-lg">
                {post.excerpt}
              </p>
              <div className={`text-stone-600 prose prose-stone max-w-none transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                {post.content}
              </div>
              <button 
                onClick={() => togglePost(post.id)}
                className="text-stone-900 font-bold text-sm mt-8 pb-1 border-b-2 border-stone-200 hover:border-stone-900 transition-all uppercase tracking-widest outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-4"
              >
                {isExpanded ? 'Collapse note' : 'Open full note'}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

const RabbitHoles = () => (
  <section className="animate-in fade-in duration-500">
    <header className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-stone-900">Rabbit Holes</h2>
      <p className="text-stone-600 max-w-lg">
        Intellectual wandering that keeps the mind sharp.
      </p>
    </header>
    <div className="grid md:grid-cols-1 gap-4">
      {RABBIT_HOLES.map((hole) => (
        <div key={hole.id} className="p-8 border border-stone-100 rounded bg-white hover:shadow-sm transition-all group">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-stone-800 group-hover:text-stone-900">{hole.topic}</h3>
            <span className={`text-[9px] px-3 py-1 rounded-full uppercase tracking-widest font-bold ${
              hole.intensity === 'Total Absorption' ? 'bg-orange-50 text-orange-700' : 'bg-stone-50 text-stone-500'
            }`}>
              {hole.intensity}
            </span>
          </div>
          <p className="text-stone-600 leading-relaxed max-w-prose">{hole.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const Now = () => (
  <section className="animate-in fade-in duration-500 max-w-2xl">
    <h2 className="text-3xl font-semibold mb-10 text-stone-900 border-b border-stone-100 pb-4">What I'm focused on right now</h2>
    <div className="prose prose-stone text-stone-700 space-y-8">
      <div className="bg-stone-50 p-6 border-l-4 border-stone-900 italic text-stone-600 mb-8">
        Last Updated: February 2025 • Currently in Mumbai / Pune
      </div>
      
      <ul className="space-y-6 list-none pl-0">
        <li className="flex gap-4">
          <span className="text-stone-300 font-mono">01</span>
          <span>Completing my <strong>Financial Data Analyst Training</strong> at Defence Guru. Deep diving into Alteryx workflows and automated reporting.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-stone-300 font-mono">02</span>
          <span>Executing <strong>Stock Market Technicals</strong>—applying 5 years of experience in chart patterns and indicators to real-time market movements.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-stone-300 font-mono">03</span>
          <span>Conducting <strong>Fundamental Research</strong> on emerging equity opportunities, looking for businesses with sustainable competitive advantages.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-stone-300 font-mono">04</span>
          <span>Keeping my frontend roots alive by experimenting with <strong>React</strong> and <strong>Tailwind</strong> (including this very site).</span>
        </li>
      </ul>
      
      <p className="mt-16 text-xs text-stone-400 font-mono uppercase tracking-[0.2em]">
        Inspired by Derek Sivers' /now movement.
      </p>
    </div>
  </section>
);

const Contact = () => (
  <section className="animate-in fade-in duration-500">
    <h2 className="text-3xl font-semibold mb-8 text-stone-900">Let’s talk</h2>
    <div className="prose prose-stone text-lg text-stone-700 max-w-lg">
      <p>
        I enjoy conversations about data storytelling, frontend architecture, or the future of automation.
      </p>
      <div className="mt-16 space-y-8">
        <div className="group">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold block mb-2">Email</span>
          <a href="mailto:sandeshtayade350@gmail.com" className="text-xl text-stone-900 hover:text-stone-600 transition-colors border-b border-stone-200 group-hover:border-stone-900 pb-1">
            sandeshtayade350@gmail.com
          </a>
        </div>
        <div className="group">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold block mb-2">LinkedIn</span>
          <a href="https://linkedin.com/in/sandesh-tayade-5b3b2035b" target="_blank" rel="noopener noreferrer" className="text-xl text-stone-900 hover:text-stone-600 transition-colors border-b border-stone-200 group-hover:border-stone-900 pb-1">
            linkedin.com/in/sandesh-tayade
          </a>
        </div>
        <div className="group">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold block mb-2">GitHub</span>
          <a href="https://github.com/sandesh-tayade" target="_blank" rel="noopener noreferrer" className="text-xl text-stone-900 hover:text-stone-600 transition-colors border-b border-stone-200 group-hover:border-stone-900 pb-1">
            github.com/sandesh-tayade
          </a>
        </div>
        <div className="group">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold block mb-2">Current Location</span>
          <span className="text-xl text-stone-900">Mumbai Metropolitan Region, India</span>
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/made" element={<Projects />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/rabbit-holes" element={<RabbitHoles />} />
          <Route path="/now" element={<Now />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
