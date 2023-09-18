import '@/app/(site)/css/additional-styles/utility-patterns.css';

export default function ContactForm() {
  return (
    <div data-aos="fade-right" data-aos-delay="200" className="w-full max-w-sm">
      <form>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300" htmlFor="fname">
              Prénom <span className="text-rose-500">*</span>
            </label>
            <input
              id="fname"
              name="fname"
              className="form-input w-full"
              type="text"
              placeholder="E.g., Mark Rossi"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300" htmlFor="lname">
              Nom <span className="text-rose-500">*</span>
            </label>
            <input
              id="lname"
              name="lname"
              className="form-input w-full"
              type="text"
              placeholder="mE.g., Acme Inc."
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300" htmlFor="email">
              Email <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              className="form-input w-full"
              type="email"
              placeholder="markrossi@company.com"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300" htmlFor="message">
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea id="message" name="message" className="form-input w-full" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300" htmlFor="referrer">
              Comment as-tu entendu parlé de nous ? <span className="text-rose-500">*</span>
            </label>
            <select id="referrer" className="form-select w-full py-2 text-sm" required>
              <option>Bouche à oreille</option>
              <option>Instagram</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="btn group w-full bg-buttercup-500 text-sm text-white shadow-sm hover:bg-buttercup-600"
          >
            Sign Up{' '}
            <span className="ml-1 tracking-normal text-buttercup-200 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
              -&gt;
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
