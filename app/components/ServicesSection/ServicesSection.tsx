import React from 'react'

const ServicesSection = () => {
  return (
    <section className="services">
    <div className="container">
        <div className="section-title">
            <h2>Our Services</h2>
        </div>
        
        <div className="services-grid">
            {[0, 1, 2].map((index) => (
                <div key={index} className="service-card animate" style={{ '--index': index } as React.CSSProperties}>
                    {index === 0 && (
                        <>
                            <div className="service-img" style={{ backgroundImage: "url('/mobile-dev.jpg')" }}></div>
                            <div className="service-content">
                                <h3>Branded Mobile Applications</h3>
                                <p>
                                    Slicksales Ltd elevates your business with branded mobile applications powered by advanced AI technology. Designed to provide a seamless and personalized user experience, our apps help you stand out in a crowded market. Say goodbye to generic solutions; our AI-driven approach ensures your app adapts to your customers' needs, boosting engagement and satisfaction. Whether you aim to increase sales, improve brand loyalty, or streamline operations, this tailored app delivers powerful results
                                </p>
                                <a href="#" className="service-link">Learn More</a>
                            </div>
                        </>
                    )}
                    {index === 1 && (
                        <>
                            <div className="service-img" style={{ backgroundImage: "url('/enterprise.jpg')" }}></div>
                            <div className="service-content">
                                <h3>Enterprise Application Development</h3>
                                <p>
                                    Our solutions are designed to streamline processes, enhance productivity, and provide actionable insights, enabling your organization to stay ahead in a competitive landscape. With customizable features tailored to your specific needs, our software not only improves efficiency but also drives innovation, ensuring you harness the full potential of artificial intelligence for sustainable growth. Elevate your enterprise today and experience the future of software development.                                </p>
                                <a href="#" className="service-link">Learn More</a>
                            </div>
                        </>
                    )}
                   
                    {index === 2 && (
                        <>
                            <div className="service-img" style={{ backgroundImage: "url('/integration.jpg')" }}></div>
                            <div className="service-content">
                                <h3>Legacy Software Integration</h3>
                                <p>
                                    Slicksales Ltd transforms your business software to modern solutions powered by advanced AI technology. This innovative service seamlessly bridges the gap between your existing legacy systems and modern applications, enhancing efficiency and reducing operational costs. Experience improved data accuracy, streamlined workflows, and the ability to leverage real-time insights, all while preserving your valuable legacy investments
                                </p>
                                <a href="#" className="service-link">Learn More</a>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    </div>
</section>
  )
}

export default ServicesSection