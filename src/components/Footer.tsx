const Footer = () => {
  return (
    <footer className="bg-(--dark-color)">
      <div className="mx-auto w-full max-w-screen-xl text-white">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2
              className="text-(--secondary-color) mb-6 text-2xl font-semibold uppercase"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              ADAOPTE
            </h2>
            <ul className="text-body font-regular text-sm">
              <li className="mb-4">
                Notre mission est de trouver des foyers aimants pour chaque
                animal abandonné et de promouvoir le bien-être animal.
              </li>
              <li className="mb-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-(--light-color)/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-white"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-(--light-color)/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-white"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-(--light-color)/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-white"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-(--light-color)/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-white"
                    >
                      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2
              className="text-(--secondary-color) mb-6 text-2xl font-semibold uppercase"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Informations utiles
            </h2>
            <ul className="font-regular text-sm">
              <li className="mb-4">FAQs</li>
              <li className="mb-4">Conseils d'adoption</li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Nous contacter
                </a>
              </li>
              <li className="mb-4">Mentions légales</li>
            </ul>
          </div>
          <div>
            <h2
              className="text-(--secondary-color) mb-6 text-2xl font-semibold uppercase"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Contact
            </h2>
            <ul className="font-regular text-sm">
              <li className="mb-4">
                <p>116 Rue du Faubourg Saint-Martin</p>
                <p>75010 Paris, France</p>
                <p>Email: contact@adaopte.fr</p>
                <p>Tél: +33 1 23 45 67 89</p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="w-full my-6 border-t text-gray-400 sm:mx-auto lg:my-8" />
        <span className="ml-4 block text-sm text-body sm:text-center pb-8 text-gray-400">
          © 2025 Adaopte. Tous droits réservés.
          <p>
            Ce site a été développé dans le cadre d'un projet pour ADA Tech
            School.
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
