import { useEffect, useState } from "react";
import { getCourses } from "../services/api";
import Navbar from "../components/Navbar";

function Teaching() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [audienceFilter, setAudienceFilter] = useState("All");
  const [modeFilter, setModeFilter] = useState("All");

  useEffect(() => {
    getCourses()
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const audiences = ["All", "Junior", "Senior", "College & University", "Working Class"];
  const modes = ["All", "Online", "Physical"];

  const filteredCourses = courses.filter((course) => {
    const audienceMatch = audienceFilter === "All" || course.audience.includes(audienceFilter);
    const modeMatch = modeFilter === "All" || course.deliveryMode.includes(modeFilter);
    return audienceMatch && modeMatch;
  });

  const categories = ["Foundations", "Frontend", "Backend", "Full Program"];

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />

      <section className="pt-32 pb-16 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm text-accent mb-4">$ teaching --overview</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 max-w-2xl">
            Practical programming, taught the way I actually build.
          </h1>
          <p className="text-muted text-lg mb-10 max-w-xl">
            From your first line of JavaScript to full-stack MERN, Laravel, and Vue — courses built from real projects, not recycled tutorials. Junior and senior programmes, holiday tuition, and working-class upskilling — online or in person.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-border rounded-lg p-4">
              <p className="font-mono text-xs text-accent mb-1">$ audience</p>
              <p className="text-sm text-muted">Junior & Senior programmes</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="font-mono text-xs text-accent mb-1">$ students</p>
              <p className="text-sm text-muted">College, university & working class</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="font-mono text-xs text-accent mb-1">$ format</p>
              <p className="text-sm text-muted">Online & physical lessons</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="font-mono text-xs text-accent mb-1">$ schedule</p>
              <p className="text-sm text-muted">Term-time & holiday tuition</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <p className="font-mono text-sm text-accent mb-2">// courses</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl">Find your course</h2>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {audiences.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAudienceFilter(a)}
                    className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      audienceFilter === a
                        ? "bg-accent text-bg border-accent"
                        : "border-border text-muted hover:border-accent hover:text-accent"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {modes.map((m) => (
                  <button
                    key={m}
                    onClick={() => setModeFilter(m)}
                    className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      modeFilter === m
                        ? "bg-accent text-bg border-accent"
                        : "border-border text-muted hover:border-accent hover:text-accent"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {loading ? (
            <p className="font-mono text-sm text-muted">loading courses...</p>
          ) : filteredCourses.length === 0 ? (
            <p className="font-mono text-sm text-muted">No courses match these filters yet.</p>
          ) : (
            categories.map((category) => {
              const categoryCourses = filteredCourses.filter((c) => c.category === category);
              if (categoryCourses.length === 0) return null;

              return (
                <div key={category} className="mb-12">
                  <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">{category}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryCourses.map((course) => (
                      <div key={course._id} className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="font-mono text-xs text-accent border border-accent/40 rounded-full px-2 py-0.5">
                            {course.level}
                          </span>
                          {course.duration && (
                            <span className="font-mono text-xs text-muted">{course.duration}</span>
                          )}
                        </div>

                        <h3 className="font-display font-bold text-xl mb-2">{course.title}</h3>
                        <p className="text-muted mb-4 leading-relaxed flex-1">{course.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {course.topics.map((topic) => (
                            <span key={topic} className="font-mono text-xs text-muted bg-bg border border-border px-2.5 py-1 rounded-full">
                              {topic}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {course.deliveryMode.map((mode) => (
                            <span key={mode} className="font-mono text-xs text-accent">
                              {mode === "Online" ? "💻" : "📍"} {mode}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="font-display font-bold text-lg text-accent">
                            {course.currency} {course.price.toLocaleString()}
                          </span>
                          <a href="#contact" className="font-mono text-xs bg-accent text-bg px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                            Enroll →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}

export default Teaching;