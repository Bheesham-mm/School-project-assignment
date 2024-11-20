import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FaPalette } from 'react-icons/fa';


const SmoothSlider = () => {
    const [currentView, setCurrentView] = useState(0); // Tracks which set of cards to display
    const cards = [
        { id: 1, ico: { faFacebook }, title: 'Sports class', para: 'Hic nesciut galisum aut dolorem aperaim eum soluta quo...', content: "Card 1" },
        { id: 2, content: "Card 2" },
        { id: 3, content: "Card 3" },
        { id: 4, content: "Card 4" },
        { id: 5, content: "Card 5" },
        { id: 6, content: "Card 6" },
    ];

    // Automatically slide every 3 seconds
    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentView((prevView) => (prevView === 1 ? 0 : 1)); // Toggle between view 0 and 1
        }, 3000);

        return () => clearInterval(autoSlide);
    }, []);

    // Get visible cards
    const getVisibleCards = () => {
        if (currentView === 0) {
            return cards.slice(0, 3); // Show Cards 1, 2, 3
        } else {
            return cards.slice(3, 6); // Show Cards 4, 5, 6
        }
    };

    return (
        <div className="slider-container" style={{ textAlign: "center", margin: "20px auto", width: "80%" }}>
            {/* Cards */}
            <div
                className="cards-wrapper"
                style={{
                    display: "flex",
                    overflow: "hidden",
                    position: "relative",
                    height: "200px",
                }}
            >
                <div
                    className="cards"
                    style={{
                        display: "flex",
                        transition: "transform 0.5s ease-in-out",
                        transform: `translateX(-${currentView * 100}%)`,
                    }}
                >
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="card"
                            style={{
                                minWidth: "35.33%",
                                margin: "0 10px",
                                padding: "20px",
                                background: "#f8f9fa",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                textAlign: "center",
                            }}
                        >
                            <div className="data_card">
                                <FaPalette size={50} color="tomato" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div
                className="navigation-buttons"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <button
                    onClick={() => setCurrentView(0)}
                    style={{
                        padding: "10px 20px",
                        margin: "0 10px",
                        background: currentView === 0 ? "#007bff" : "#6c757d",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                </button>
                <button
                    onClick={() => setCurrentView(1)}
                    style={{
                        padding: "10px 20px",
                        margin: "0 10px",
                        background: currentView === 1 ? "#007bff" : "#6c757d",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                </button>
            </div>
        </div>
    );
};

export default SmoothSlider;