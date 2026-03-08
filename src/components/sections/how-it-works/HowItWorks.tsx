export default function HowItWorks() {
  return (
    <section className="bg-[#0b0f1a] text-white py-28">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">

            Getting Started
            <br />

            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              with Lerna
            </span>

          </h2>

          <p className="text-gray-400 mt-4">
            Setting up Lerna for your school takes only a few simple steps.
          </p>

        </div>

        {/* Steps */}

        <div className="mt-20 grid md:grid-cols-2 gap-12">

          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Create Your School</h3>
            <p>
              Register your school and create the administrator account
              that will manage the platform.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Setup Academic Structure</h3>
            <p>
              Add classes, departments, teachers and subjects
              to organize your school structure.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Manage Students</h3>
            <p>
              Register students, track attendance,
              manage results and academic records.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">04</div>
            <h3>Connect Parents</h3>
            <p>
              Parents can log in to monitor their children's
              progress, attendance and payments.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}