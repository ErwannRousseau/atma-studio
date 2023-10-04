export default function CreditsPage() {
  return (
    <div className="p-6">
      <h1 className="h1 mb-4 text-2xl font-semibold">Credits</h1>
      <div className="mb-6">
        Photos :
        <div className="ml-4 pt-2">
          Hugo Drodelot :
          <div className="ml-4">
            <p>
              Instagram :{' '}
              <a target="_blank" className="text-buttercup-500" href="https://www.instagram.com/hugoo_dr/">
                @hugoo_dr
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-6">
        Developpeur Web :
        <div className="ml-4 pt-2">
          Erwann Rousseau :
          <div className="ml-4">
            <p>
              Site internet :{' '}
              <a target="_blank" className="text-buttercup-500" href="https://www.erwannrousseau.com">
                Erwann Rousseau Developpeur FullStack
              </a>
            </p>
            <p>
              LinkedIn :{' '}
              <a
                target="_blank"
                className="text-buttercup-500"
                href="https://www.linkedin.com/in/erwannrousseauwebdev/"
              >
                @erwannrousseauwebdev
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
