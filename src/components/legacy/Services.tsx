export default function Services() {
    return (
        <section id="services">
            <div className="services-header reveal">
                <span className="section-label">What We Create</span>

                <h2 className="section-title">
                    Our <em>Signature</em> Services
                </h2>

                <div className="gold-line"></div>
            </div>

            <div className="services-grid">
                <div
                    className="service-card reveal"
                    style={{ transitionDelay: "0.1s" }}
                >
                    <div
                        className="card-bg"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1633104502699-b2ecf0fee294?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        }}
                    ></div>

                    <div className="card-overlay"></div>

                    <div className="card-content">
                        <span className="card-icon">I</span>
                        <div className="card-title">Luxury Weddings</div>
                        <div className="card-sub">The pinnacle of elegance</div>
                        <div className="card-line"></div>
                        <div className="card-desc">
                            Crafting dream weddings with unmatched decor,
                            flawless execution, and cinematic storytelling
                            across premier venues.
                        </div>
                    </div>
                </div>

                <div
                    className="service-card reveal"
                    style={{ transitionDelay: "0.15s" }}
                >
                    <div
                        className="card-bg"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1767790692557-0ddb29cb9e7a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        }}
                    ></div>

                    <div className="card-overlay"></div>

                    <div className="card-content">
                        <span className="card-icon">II</span>
                        <div className="card-title">Engagements</div>
                        <div className="card-sub">
                            Where love begins, beautifully
                        </div>
                        <div className="card-line"></div>
                        <div className="card-desc">
                            Intimate engagements styled with premium florals,
                            golden ambiance, and deeply personal touches.
                        </div>
                    </div>
                </div>

                <div
                    className="service-card reveal"
                    style={{ transitionDelay: "0.2s" }}
                >
                    <div
                        className="card-bg"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1772127822525-7eda37383b9f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        }}
                    ></div>

                    <div className="card-overlay"></div>

                    <div className="card-content">
                        <span className="card-icon">III</span>
                        <div className="card-title">Premium Decor</div>
                        <div className="card-sub">Art you can inhabit</div>
                        <div className="card-line"></div>
                        <div className="card-desc">
                            Statement installations, editorial floral design,
                            and atmosphere-defining decor that transforms every
                            space.
                        </div>
                    </div>
                </div>

                <div
                    className="service-card reveal"
                    style={{ transitionDelay: "0.25s" }}
                >
                    <div
                        className="card-bg"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1725573839639-be2aa2163255?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        }}
                    ></div>

                    <div className="card-overlay"></div>

                    <div className="card-content">
                        <span className="card-icon">IV</span>
                        <div className="card-title">Birthday Galas</div>
                        <div className="card-sub">Celebrate in luxury</div>
                        <div className="card-line"></div>
                        <div className="card-desc">
                            From intimate soirées to lavish milestone
                            celebrations, styled with luxury details that feel
                            magazine-worthy.
                        </div>
                    </div>
                </div>

                <div
                    className="service-card reveal"
                    style={{ transitionDelay: "0.3s" }}
                >
                    <div
                        className="card-bg"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1606311199519-bfe0dddc53dd?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        }}
                    ></div>

                    <div className="card-overlay"></div>

                    <div className="card-content">
                        <span className="card-icon">V</span>
                        <div className="card-title">Corporate Events</div>
                        <div className="card-sub">Prestige meets purpose</div>
                        <div className="card-line"></div>
                        <div className="card-desc">
                            Luxury corporate experiences — product launches,
                            galas, and summits — executed with boardroom
                            precision and brand clarity.
                        </div>
                    </div>
                </div>

                <div
                    className="service-card reveal"
                    style={{ transitionDelay: "0.35s" }}
                >
                    <div
                        className="card-bg"
                        style={{
                            backgroundImage: "url(/images/destination.png)",
                        }}
                    ></div>

                    <div className="card-overlay"></div>

                    <div className="card-content">
                        <span className="card-icon">VI</span>
                        <div className="card-title">Destination Events</div>
                        <div className="card-sub">Rajasthan · Uttarakhand</div>
                        <div className="card-line"></div>
                        <div className="card-desc">
                            Destination weddings in palace forts, mountain
                            resorts, and heritage havens across North
                            India&apos;s most stunning locations.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
