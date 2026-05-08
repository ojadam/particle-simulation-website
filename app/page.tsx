import { Github, PlayCircle } from "lucide-react";

const postItems = [
  {
    title: "Core Dynamics Stability",
    file: "md_core_plots.png",
    caption: "Energy, temperature, and pressure trajectories from the production run."
  },
  {
    title: "RDF + MSD Analysis",
    file: "md_analysis_plots.png",
    caption: "Structure and transport diagnostics extracted from trajectory samples."
  },
  {
    title: "Parameter Sweep Trends",
    file: "sweep_summary.png",
    caption: "Average pressure and total energy trends across (density, temperature)."
  },
  {
    title: "Force Benchmark",
    file: "benchmark_summary.png",
    caption: "Brute-force and cell-list runtime scaling comparison by particle count."
  }
];

export default function HomePage() {
  return (
    <main id="wrapper">
      <section id="intro">
        <p className="introLabel">Particle simulation engine | part of ojadam portfolio</p>
        <h1>
          Lennard-Jones
          <br />
          Molecular Dynamics
        </h1>
        <p>
          A 3D particle simulation I built from scratch, with plots, parameter sweeps, and speed tests.
        </p>
      </section>

      <nav id="navBar">
        <ul className="links">
          <li>
            <a href="#results">Results</a>
          </li>
          <li>
            <a href="#workflow">Workflow</a>
          </li>
          <li>
            <a href="#run">Run</a>
          </li>
        </ul>
        <a
          className="iconLink"
          href="https://github.com/ojadam/particle-simulation-engine"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
      </nav>

      <section id="main">
        <article className="post featured">
          <header className="major">
            <h2>Particle Simulation</h2>
          </header>
          <img src="/artifacts/md_trajectory.gif" alt="Molecular dynamics trajectory animation" className="image main" />
          <ul className="actions special">
            <li>
              <a href="/artifacts/md_trajectory_3d.html" target="_blank" rel="noreferrer" className="button">
                <PlayCircle size={16} />
                <span>Open Interactive 3D</span>
              </a>
            </li>
          </ul>
        </article>

        <section className="posts" id="results">
          {postItems.map((item) => (
            <article key={item.file}>
              <header>
                <h3>{item.title}</h3>
              </header>
              <a
                href={`/artifacts/${item.file}`}
                target="_blank"
                rel="noreferrer"
                className="graphLink"
                aria-label={`Open full-size ${item.title}`}
              >
                <img src={`/artifacts/${item.file}`} alt={item.title} className="image fit" />
              </a>
              <p>{item.caption}</p>
            </article>
          ))}
        </section>

        <article className="post" id="workflow">
          <header className="major">
            <h2>Workflow</h2>
          </header>
          <p>
            I run the core simulation in <code>md_lj.py</code>, use <code>md_analysis.py</code> for plots, use{" "}
            <code>md_sweep.py</code> to test different setups, and <code>benchmark_forces.py</code> to compare
            performance.
          </p>
        </article>

        <article className="post" id="run">
          <header className="major">
            <h2>Reproduce Results</h2>
          </header>
          <pre>
{`git clone https://github.com/ojadam/particle-simulation-engine.git
cd particle-simulation-engine
pip install -r requirements.txt
python md_lj.py
python md_analysis.py
python md_sweep.py --mode full
python benchmark_forces.py
python test_md_checks.py`}
          </pre>
        </article>

        <article className="post" id="credits">
          <header className="major">
            <h2>Credits</h2>
          </header>
          <p>
            Design inspiration: <a href="https://html5up.net/massively" target="_blank" rel="noreferrer">Massively</a>{" "}
            by <a href="https://html5up.net" target="_blank" rel="noreferrer">HTML5 UP</a>.
          </p>
        </article>
      </section>
    </main>
  );
}
