export default function DestinationFinderPreview() {
    return (
        <section className="destination-preview-section reveal">
            <div className="destination-preview-card">
                <span className="section-label">Destination Finder</span>

                <h2>Not sure where your wedding should happen?</h2>

                <p>
                    Explore wedding styles, popular destinations, suitable
                    venues, room requirements and budget buckets before you
                    start shortlisting.
                </p>

                <div className="destination-preview-tags">
                    <span>Jim Corbett</span>
                    <span>Mussoorie</span>
                    <span>Rishikesh</span>
                    <span>Noida</span>
                    <span>Rajasthan</span>
                </div>

                <a href="/destination-weddings" className="btn-primary">
                    Explore Destination Finder
                </a>
            </div>
        </section>
    );
}
