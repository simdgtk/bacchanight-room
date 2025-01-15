import "../styles/pages/_legals.scss";

export default function Legals() {
  return (
    <div className="legals">
      <h1>Mentions légales</h1>
      <div className="content">
        <div className="content__section">
          <h2 className="content__section__title">1. Informations Générales</h2>
          <div className="content__section__text">
            Ce site a été réalisé dans le cadre d&apos;un projet étudiant pour
            l&apos;événement de la Bacchanigth organisé par le MUSBA (Musée des
            Beaux-Arts de Bordeaux).
          </div>
          <ul className="content__section__list">
            <li>
              Responsable de la publication : MUSBA (Musée des Beaux-Arts de
              Bordeaux)
            </li>
            <li>Adresse : 20 Cr d&apos;Albret, 33000 Bordeaux</li>
            <li>Email : musba@mairie-bordeaux.fr</li>
            <li>
              Réalisateurs : Équipe d&apos;étudiants en collaboration avec
              l&apos;IUT Bordeaux Montaigne
            </li>
          </ul>
          <h3>Hébergeur :</h3>
          <ul className="content__section__list">
            <li>Nom : Vercel Inc.</li>
            <li>Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789</li>
            <li>Téléphone : (559) 288-7060</li>
          </ul>
          <div className="content__section__text">
            Tous les contenus présents sur ce site (textes, images,
            illustrations, graphiques, logos, etc.) sont protégés par les lois
            en vigueur sur la propriété intellectuelle.
          </div>
          <ul className="content__section__list">
            <li>
              Les éléments liés au MUSBA et à l&apos;événement Bacchanigth sont
              la propriété exclusive du MUSBA, sauf mention contraire.
            </li>
            <li>
              Les créations étudiantes (design, développement) restent la
              propriété des étudiants, sauf accord avec le MUSBA.
            </li>
          </ul>
          <div className="content__section__text">
            Toute reproduction ou utilisation des contenus sans autorisation
            expresse est strictement interdite.
          </div>
        </div>
        <div className="content__section">
          <h2 className="content__section__title">2. Données Personnelles</h2>
          <div className="content__section__text">
            Ce site respecte les réglementations en matière de protection des
            données personnelles (RGPD). Aucune collecte de données personnelles
            n’est effectuée à moins d&apos;un consentement explicite de
            l&apos;utilisateur.
          </div>
          <ul className="content__section__list">
            <li>
              Les données éventuellement collectées (via formulaires ou cookies)
              sont uniquement destinées à améliorer l’expérience utilisateur et
              ne seront jamais cédées à des tiers sans accord.
            </li>
            <li>
              Vous pouvez demander l&apos;accès, la rectification ou la
              suppression de vos données en contactant :
              musba@mairie-bordeaux.fr.
            </li>
          </ul>
        </div>
        <div className="content__section">
          <h2 className="content__section__title">3. Responsabilités</h2>
          <h3>Contenus :</h3>
          <ul className="content__section__list">
            <li>
              Les étudiants et le MUSBA ne sauraient être tenus responsables des
              erreurs ou omissions dans les contenus du site.
            </li>
          </ul>
          <h3>Accessibilité :</h3>
          <ul className="content__section__list">
            <li>
              Bien que tout soit mis en œuvre pour assurer une accessibilité
              optimale, aucune garantie n’est fournie concernant la
              disponibilité ininterrompue du site.
            </li>
          </ul>
        </div>
        <div className="content__section">
          <h2 className="content__section__title">4. Liens Hypertextes</h2>
          <div className="content__section__text">
            Ce site peut contenir des liens hypertextes vers d&apos;autres sites
            externes. Le MUSBA et les étudiants ne sont pas responsables des
            contenus de ces sites tiers.
          </div>
        </div>
        <div className="content__section">
          <h2 className="content__section__title">6. Contact</h2>
          <h3>
            Pour toute question concernant le site ou ses mentions légales, vous
            pouvez contacter :
          </h3>
          <ul className="content__section__list">
            <li>MUSBA : musba@mairie-bordeaux.fr</li>
            <li>Équipe étudiante : alexis.juhel@mmibordeaux.com</li>
          </ul>
        </div>
        <div className="content__section">
          <h2 className="content__section__title">
            7. Mise à Jour des Mentions Légales
          </h2>
          <div className="content__section__text">
            Ces mentions légales peuvent être modifiées à tout moment pour
            s’adapter à l’évolution du site ou des réglementations en vigueur.
            Merci de les consulter régulièrement.
          </div>
          <p>Dernière mise à jour : 15 janvier 2025</p>
        </div>
      </div>
    </div>
  );
}
