import React from 'react';
import "./style/sectionleft.css"

import { FaChevronLeft } from "react-icons/fa6";

import { FaAngleRight } from "react-icons/fa6";

const Page: React.FC = () => {
    const categories = [
        { name: "Restaurant food", count: 37 },
        { name: "Travel news", count: 10 },
        { name: "Modern technology", count: 3 },
        { name: "Product", count: 11 },
        { name: "Inspiration", count: 21 },
        { name: "Health Care", count: 109 }
    ];


    const tags = [
        "project", "love", "technology", "travel",
        "restaurant", "life style", "design", "illustration",
    ];

    const instagramFeeds = [
        "/image/post_5.jpg.webp",
        "/image/post_6.jpg.webp",
        "/image/post_7.jpg.webp",
        "/image/post_8.jpg.webp",
        "/image/post_9.jpg.webp",
        "/image/post_10.jpg.webp",
    ];

    return (
        <div className="page-container">
            {/* Main Content Section */}
            <main className="main-content">
                <div>
                    <div className="blog-card">
                        <div className="blog-image">
                            <img src="/image/single_blog_1.jpg.webp" alt="Google office" />
                            <div className="date-badge">
                                <div className="day">15</div>
                                <div className="month">Jan</div>
                            </div>
                        </div>

                        <div className="blog-content">
                            <h2 className="blog-title">Google inks pact for new 35-storey office</h2>
                            <p className="blog-text">
                                That dominion stars lights dominion divide years for fourth have don't stars is
                                that he earth it first without heaven in place seed it second morning saying.
                            </p>
                            <div className="blog-meta">
                                <span className="meta-item">
                                    <i className="icon-heart"></i> Travel, Lifestyle
                                </span>
                                <span className="meta-item">
                                    <i className="icon-comment"></i> 02 Comments
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="divider"></div> */}

                <div>
                    <div className="blog-card">
                        <div className="blog-image">
                            <img src="/image/single_blog_2.jpg.webp" alt="Google office" />
                            <div className="date-badge">
                                <div className="day">15</div>
                                <div className="month">Jan</div>
                            </div>
                        </div>

                        <div className="blog-content">
                            <h2 className="blog-title">Google inks pact for new 35-storey office</h2>
                            <p className="blog-text">
                                That dominion stars lights dominion divide years for fourth have don't stars is
                                that he earth it first without heaven in place seed it second morning saying.
                            </p>
                            <div className="blog-meta">
                                <span className="meta-item">
                                    <i className="icon-heart"></i> Travel, Lifestyle
                                </span>
                                <span className="meta-item">
                                    <i className="icon-comment"></i> 02 Comments
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="blog-card">
                        <div className="blog-image">
                            <img src="/image/single_blog_3.jpg.webp" alt="Google office" />
                            <div className="date-badge">
                                <div className="day">15</div>
                                <div className="month">Jan</div>
                            </div>
                        </div>

                        <div className="blog-content">
                            <h2 className="blog-title">Google inks pact for new 35-storey office</h2>
                            <p className="blog-text">
                                That dominion stars lights dominion divide years for fourth have don't stars is
                                that he earth it first without heaven in place seed it second morning saying.
                            </p>
                            <div className="blog-meta">
                                <span className="meta-item">
                                    <i className="icon-heart"></i> Travel, Lifestyle
                                </span>
                                <span className="meta-item">
                                    <i className="icon-comment"></i> 02 Comments
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="blog-card">
                        <div className="blog-image">
                            <img src="/image/single_blog_4.jpg.webp" alt="Google office" />
                            <div className="date-badge">
                                <div className="day">15</div>
                                <div className="month">Jan</div>
                            </div>
                        </div>

                        <div className="blog-content">
                            <h2 className="blog-title">Google inks pact for new 35-storey office</h2>
                            <p className="blog-text">
                                That dominion stars lights dominion divide years for fourth have don't stars is
                                that he earth it first without heaven in place seed it second morning saying.
                            </p>
                            <div className="blog-meta">
                                <span className="meta-item">
                                    <i className="icon-heart"></i> Travel, Lifestyle
                                </span>
                                <span className="meta-item">
                                    <i className="icon-comment"></i> 02 Comments
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="blog-card">
                        <div className="blog-image">
                            <img src="/image/single_blog_5.jpg.webp" alt="Google office" />
                            <div className="date-badge">
                                <div className="day">15</div>
                                <div className="month">Jan</div>
                            </div>
                        </div>

                        <div className="blog-content">
                            <h2 className="blog-title">Google inks pact for new 35-storey office</h2>
                            <p className="blog-text">
                                That dominion stars lights dominion divide years for fourth have don't stars is
                                that he earth it first without heaven in place seed it second morning saying.
                            </p>
                            <div className="blog-meta">
                                <span className="meta-item">
                                    <i className="icon-heart"></i> Travel, Lifestyle
                                </span>
                                <span className="meta-item">
                                    <i className="icon-comment"></i> 02 Comments
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="btn-btm-click">
                    <button><FaChevronLeft /></button>
                    <button>1</button>
                    <button>2</button>
                    <button><FaAngleRight /></button>
                </div>
            </main>

            {/* Sidebar Section */}
            <aside className="sidebar">
                {/* Search Section */}
                <div className="sidebar-widget">
                    <h3 className="sidebar-title">Search Keyword</h3>
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search keyword"
                            className="search-input"
                        />
                        <button className="search-button">
                            <i className="icon-search">Search</i>
                        </button>
                    </div>
                </div>

                {/* Category Section */}
                <div className="sidebar-widget">
                    <h3 className="sidebar-title">Category</h3>
                    <ul className="category-list">
                        {categories.map((category, index) => (
                            <li key={index} className="category-item">
                                <span className="category-name">{category.name}</span>
                                <span className="category-count">({category.count})</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Recent Posts Widget */}
                <div className="sidebar-widget">
                    <h3 className="sidebar-title">Recent Posts</h3>
                    <div className="recent-posts">
                        <div className="recent-post-item">
                            <img src="/image/post_1.jpg.webp" alt="Recent post" />
                            <div className="recent-post-content">
                                <h4>From life was you fish</h4>
                                <span>January 12, 2024</span>
                            </div>
                        </div>
                        <div className="recent-post-item">
                            <img src="/image/post_2.jpg.webp" alt="Recent post" />
                            <div className="recent-post-content">
                                <h4>The Amazing Hubble</h4>
                                <span>February 14, 2024</span>
                            </div>
                        </div>
                        <div className="recent-post-item">
                            <img src="/image/post_3.jpg.webp" alt="Recent post" />
                            <div className="recent-post-content">
                                <h4>Astronomy Or Astrology</h4>
                                <span>03 Hours ago</span>
                            </div>
                        </div>
                        <div className="recent-post-item">
                            <img src="/image/post_4.jpg.webp" alt="Recent post" />
                            <div className="recent-post-content">
                                <h4>Asteroids telescope</h4>
                                <span>01 Hours ago</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Tag Clouds Widget */}
                <div className="sidebar-widget">
                    <h3 className="sidebar-title">Tag Clouds</h3>
                    <div className="tag-clouds">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Instagram Feeds Widget */}
                <div className="sidebar-widget">
                    <h3 className="sidebar-title">Instagram Feeds</h3>
                    <div className="instagram-feeds">
                        {instagramFeeds.map((feed, index) => (
                            <div key={index} className="instagram-item">
                                <img src={feed} alt={`Instagram post ${index + 1}`} />
                                <div className="instagram-overlay">
                                    <span className="instagram-icon">📷</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="sidebar-widget">
                    <h3 className="sidebar-title">Newsletter</h3>
                    <div className="search-box-bottom">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="search-input"
                        />
                        <button className="btn-btm" type="submit">
                            Subscribe
                        </button>
                    </div>
                </div>

            </aside>
        </div>
    );
};

export default Page;