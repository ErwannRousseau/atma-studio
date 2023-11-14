export const metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de Confidentialité du site internet Atma Studio',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-semibold">
        Politique de Confidentialité - <span className="text-buttercup-500">ATMA STUDIO</span>
      </h1>
      <p className="mb-4">
        Chez ATMA STUDIO, nous attachons une grande importance à la protection de votre vie privée. Cette politique de
        confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
      </p>
      <h2 className="mb-2 mt-4 text-xl font-semibold">1. Collecte de Données</h2>
      <p className="mb-4">
        Nous ne collectons aucune information personnelle identifiable, y compris les adresses e-mail, sauf si vous nous
        la fournissez volontairement, par exemple, en nous contactant par e-mail ou en remplissant un formulaire sur
        notre site.
      </p>
      <h2 className="mb-2 mt-4 text-xl font-semibold">2. Utilisation des Données</h2>
      <p className="mb-4">
        Les informations que vous nous fournissez peuvent être utilisées pour répondre à vos demandes, améliorer nos
        services et vous contacter si nécessaire.
      </p>
      <h2 className="mb-2 mt-4 text-xl font-semibold">3. Protection des Données</h2>
      <p className="mb-4">
        Nous prenons des mesures pour protéger vos informations personnelles et ne les partageons pas avec des tiers
        sans votre consentement explicite.
      </p>
      <h2 className="mb-2 mt-4 text-xl font-semibold">4. Contact</h2>
      <p className="mb-4">
        Si vous avez des questions concernant notre politique de confidentialité, veuillez nous contacter à
        l&apos;adresse suivante :{' '}
        <a
          className="text-buttercup-500"
          href="mailto:adn.nantes@gmail.com?subject=Questions sur la politique de confidentialité"
        >
          adn.nantes@gmail.com
        </a>
      </p>
    </div>
  );
}
