export const metadata = {
  title: "Conditions Générales d'Utilisation",
  description:
    "Conditions Générales d'Utilisation du site internet Atma Studio",
};

export default function ConditionsGeneralesPage() {
  return (
    <div className="p-6">
      <h1 className="mb-4 font-semibold text-2xl">
        Conditions Générales d&apos;Utilisation -{" "}
        <span className="text-buttercup-500">ATMA STUDIO</span>
      </h1>
      <p className="mb-4">
        Bienvenue sur le site web d&apos;ATMA STUDIO. En accédant à ce site,
        vous acceptez de vous conformer aux conditions générales
        d&apos;utilisation énoncées ci-dessous. Si vous n&apos;acceptez pas ces
        conditions, veuillez ne pas utiliser ce site.
      </p>
      <h2 className="mt-4 mb-2 font-semibold text-xl">
        1. Utilisation du Site
      </h2>
      <p className="mb-4">
        Vous vous engagez à utiliser ce site uniquement à des fins légales et
        conformément à ces conditions générales.
      </p>
      <h2 className="mt-4 mb-2 font-semibold text-xl">
        2. Propriété Intellectuelle
      </h2>
      <p className="mb-4">
        Le contenu de ce site, y compris les textes, images, logos et éléments
        multimédias, est protégé par le droit d&apos;auteur et toutes autres
        lois sur la propriété intellectuelle.
      </p>
      <h2 className="mt-4 mb-2 font-semibold text-xl">3. Confidentialité</h2>
      <p className="mb-4">
        Nous tenons à vous informer que ATMA STUDIO ne collecte pas
        d&apos;emails ni d&apos;informations personnelles dans notre base de
        données. Votre vie privée est importante pour nous, et nous ne
        collectons que les données nécessaires pour vous fournir nos services
        sans compromettre votre confidentialité.
      </p>
      <h2 className="mt-4 mb-2 font-semibold text-xl">4. Contact</h2>
      <p className="mb-4">
        Si vous avez des questions concernant ces conditions générales, veuillez
        nous contacter à l&apos;adresse suivante :{" "}
        <a
          className="text-buttercup-500"
          href="mailto:adn.nantes@gmail.com?subject=Questions sur les conditions générales d'utilisation"
        >
          adn.nantes@gmail.com
        </a>
      </p>
    </div>
  );
}
