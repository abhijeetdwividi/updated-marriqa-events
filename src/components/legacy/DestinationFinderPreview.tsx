export default function DestinationFinderPreview() {
    return (
        <section className="home-destination-preview">
            <div className="home-destination-preview-inner">
                <div className="home-destination-copy reveal-left">
                    <span className="home-luxe-kicker">Destination Finder</span>

                    <h2>Find the right venue before the planning begins.</h2>

                    <p>
                        Explore wedding styles, destination options, rooms,
                        budget direction and curated venue matches across Jim
                        Corbett, Mussoorie, Rishikesh, Jaipur, Udaipur and Delhi
                        NCR.
                    </p>

                    <a
                        href="/destination-weddings"
                        className="home-luxe-btn home-luxe-btn-primary"
                    >
                        Explore Destination Finder
                    </a>
                </div>

                <div className="home-destination-card reveal-right">
                    <div className="home-destination-card-top">
                        <span>Venue Match</span>
                        <strong>Wedding Weekend</strong>
                    </div>

                    <div>
                        <span className="home-destination-small">
                            Suggested Direction
                        </span>
                        <h3>Hill Resort Wedding</h3>
                        <p>
                            100–160 guests · 35 rooms · 2 nights · decor +
                            hospitality + full planning.
                        </p>
                    </div>

                    <div className="home-destination-mini-grid">
                        <span>Mussoorie</span>
                        <span>Luxury Retreat</span>
                        <span>Custom Budget</span>
                        <span>Full Planning</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
