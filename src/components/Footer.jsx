function Footer() {
  return (
    <section className="footer bg-theme-card text-theme-secondary px-6 py-10">
      <section className="footer-info flex flex-wrap md:flex-nowrap justify-between gap-6 text-center md:text-left">
        {/* Logo Section */}
        <section className="footer-info-left w-full md:w-1/4 flex flex-col items-center md:items-start">
          <img
            src="Gitrank_logo_small.svg"
            alt="Logo"
            width="200px"
            height="150px"
          />
          <p className="font-mono text-sm footer-info-left">
            Discover, Rank & Prep <br /> with GitHub Repos!
          </p>
        </section>

        {/* Quick Links */}
        <section className="footer-info-right w-full md:w-1/4">
          <h3 className="text-theme-primary font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            {["Home", "Watch List", "Contact"].map((text, i) => (
              <li key={i}>
                <a
                  href={`/${text.replace(/\s/g, "").toLowerCase()}`}
                  className="ttext-white no-underline"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Developer Info */}
        <section className="footer-info-right w-full md:w-1/4">
          <h3 className="text-theme-primary font-semibold mb-4">
            Developed By
          </h3>
          <p className="text-sm text-white">Mrithulasree N</p>
          <p className="text-sm">
            <a
              href="mailto:mrithula04@gmail.com"
              className="text-white no-underline"
            >
              mrithula04@gmail.com
            </a>
          </p>
          <div className="footer-social-media mt-4 flex justify-center md:justify-start gap-3">
            {["LinkedIn", "Twitter", "Youtube"].map((platform) => (
              <a
                key={platform}
                href={`https://${platform.toLowerCase()}.com`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${platform}.png`}
                  alt={platform}
                  className="footer-social-media__icon"
                />
              </a>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}

export default Footer;
