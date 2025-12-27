import '../styles/achievements.css';
import { Award, Calendar, MapPin, Trophy } from 'lucide-react';

const Achievements = () => {
    return (
        <section id="achievements">
            <div className="achievements-header">
                <h1>Milestones & Awards</h1>
                <p>A timeline of recognition and technical excellence.</p>
            </div>

            <div className="achievements-container">
                <div className="achievement-card">
                    <div className="achievement-image-box">
                        <img
                            src="/images/medspark1.jpeg"
                            alt="Medspark Achievement"
                            className="achievement-img"
                        />
                        <div className="achievement-badge">
                            <Trophy size={20} />
                        </div>
                    </div>

                    <div className="achievement-details">
                        <div className="achievement-type">
                            <Award size={14} />
                            <span>Poster Presentation</span>
                        </div>
                        <h2>MEDSPARK '24</h2>
                        <p className="achievement-loc">
                            <MapPin size={14} /> Sona College of Technology, Salem
                        </p>
                        <p className="achievement-date">
                            <Calendar size={14} /> 1st Year Achievement
                        </p>
                        <div className="achievement-desc">
                            <p>
                                Secured the <strong>2nd Prize</strong> in the prestigious Medspark Poster Presentation competition.
                                Recognized for exceptional research, visual storytelling, and technical clarity in presenting new technical concepts.
                                Secured a cash prize of ₹500.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="achievement-card">
                    <div className="achievement-image-box">
                        <img
                            src="/images/gnanchemp2.jpeg"
                            alt="GNANCHEMP-2k24 Achievement"
                            className="achievement-img"
                        />
                        <div className="achievement-badge">
                            <Trophy size={20} />
                        </div>
                    </div>

                    <div className="achievement-details">
                        <div className="achievement-type">
                            <Award size={14} />
                            <span>National Level Symposium</span>
                        </div>
                        <h2>GNANCHEMP-2k24</h2>
                        <p className="achievement-loc">
                            <MapPin size={14} /> Gnanamani College of Technology, Namakkal
                        </p>
                        <p className="achievement-date">
                            <Calendar size={14} /> 1st Year Achievement
                        </p>
                        <div className="achievement-desc">
                            <p>
                                Participated in the National Level Technical Symposium and secured the <strong>3rd Prize</strong> in the Poster Presentation event.
                                Demonstrated technical depth and effective communication in a competitive national-level environment.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="achievement-card">
                    <div className="achievement-image-box">
                        <img
                            src="/images/thiran3.jpeg"
                            alt="THIRAN Design Blitz Achievement"
                            className="achievement-img"
                        />
                        <div className="achievement-badge">
                            <Trophy size={20} />
                        </div>
                    </div>

                    <div className="achievement-details">
                        <div className="achievement-type">
                            <Award size={14} />
                            <span>National Inter College Fest</span>
                        </div>
                        <h2>THIRAN '25</h2>
                        <p className="achievement-loc">
                            <MapPin size={14} /> Sri Eshwar College of Engineering, Coimbatore
                        </p>
                        <p className="achievement-date">
                            <Calendar size={14} /> 2nd Year Achievement
                        </p>
                        <div className="achievement-desc">
                            <p>
                                Participated in the <strong>Design Blitz</strong> event as a team of two and secured the <strong>2nd Prize</strong>.
                                Recognized for creative design execution and collaborative technical problem-solving.
                                Secured a cash prize of ₹1500.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="achievement-card">
                    <div className="achievement-image-box">
                        <img
                            src="/images/dhiraj4.jpeg"
                            alt="IDEATHON Achievement"
                            className="achievement-img"
                        />
                        <div className="achievement-badge">
                            <Trophy size={20} />
                        </div>
                    </div>

                    <div className="achievement-details">
                        <div className="achievement-type">
                            <Award size={14} />
                            <span>National Level Symposium</span>
                        </div>
                        <h2>IDEATHON</h2>
                        <p className="achievement-loc">
                            <MapPin size={14} /> Dhirajlal Gandhi College of Technology, Salem
                        </p>
                        <p className="achievement-date">
                            <Calendar size={14} /> 2nd Year Achievement
                        </p>
                        <div className="achievement-desc">
                            <p>
                                Participated in the <strong>Ideathon</strong> as a team of two and secured the <strong>2nd Prize</strong>.
                                Presented an innovative conceptual framework and was recognized with a trophy and a cash prize of ₹1000.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="achievement-card">
                    <div className="achievement-image-box">
                        <img
                            src="/images/tnwise4.jpeg"
                            alt="TNWISE Hackathon Achievement"
                            className="achievement-img"
                        />
                        <div className="achievement-badge">
                            <Trophy size={20} />
                        </div>
                    </div>

                    <div className="achievement-details">
                        <div className="achievement-type">
                            <Award size={14} />
                            <span>Hackathon</span>
                        </div>
                        <h2>TNWISE '25</h2>
                        <p className="achievement-loc">
                            <MapPin size={14} /> PMC Tech, Hosur
                        </p>
                        <p className="achievement-date">
                            <Calendar size={14} /> 2nd Year Achievement
                        </p>
                        <div className="achievement-desc">
                            <p>
                                Participated in the <strong>TNWISE Hackathon</strong> as a team of two.
                                Presented a collaborative project and gained valuable insights from technical mentors and fellow innovators in a high-pressure environment.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="achievement-card">
                    <div className="achievement-image-box">
                        <img
                            src="/images/colo6.jpeg"
                            alt="COLOSSUS 2.0 Hackathon"
                            className="achievement-img"
                        />
                        <div className="achievement-badge">
                            <Trophy size={20} />
                        </div>
                    </div>

                    <div className="achievement-details">
                        <div className="achievement-type">
                            <Award size={14} />
                            <span>24H National Hackathon</span>
                        </div>
                        <h2>COLOSSUS 2.0</h2>
                        <p className="achievement-loc">
                            <MapPin size={14} /> Dr. Ambedkar Institute of Technology, Bangalore
                        </p>
                        <p className="achievement-date">
                            <Calendar size={14} /> 2nd Year Achievement
                        </p>
                        <div className="achievement-desc">
                            <p>
                                Participated in <strong>COLOSSUS 2.0</strong>, my first ever 24-hour national-level hackathon.
                                Competed alongside seniors as the only junior in the team, gaining invaluable experience in rapid prototyping and high-intensity collaboration.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="achievement-card">
                    <div className="achievement-image-box">
                        <img
                            src="/images/dev7.jpeg"
                            alt="DEVSPARK'25 Hackathon"
                            className="achievement-img"
                        />
                        <div className="achievement-badge">
                            <Trophy size={20} />
                        </div>
                    </div>

                    <div className="achievement-details">
                        <div className="achievement-type">
                            <Award size={14} />
                            <span>24H Hackathon</span>
                        </div>
                        <h2>DEVSPARK'25</h2>
                        <p className="achievement-loc">
                            <MapPin size={14} /> KPR Institute of Engineering and Technology, Coimbatore
                        </p>
                        <p className="achievement-date">
                            <Calendar size={14} /> 3rd Year Achievement
                        </p>
                        <div className="achievement-desc">
                            <p>
                                Participated in the <strong>DEVSPARK'25</strong> 24-hour hackathon as a team of 4.
                                Worked intensively on real-world problem solving, utilizing collaborative workflows and advanced full-stack development techniques.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="achievement-card">
                    <div className="achievement-image-box">
                        <img
                            src="/images/sih7.jpeg"
                            alt="Smart India Hackathon '25 Grand Finale"
                            className="achievement-img"
                        />
                        <div className="achievement-badge">
                            <Trophy size={20} />
                        </div>
                    </div>

                    <div className="achievement-details">
                        <div className="achievement-type">
                            <Award size={14} />
                            <span>National Level Hackathon</span>
                        </div>
                        <h2>Smart India Hackathon '25</h2>
                        <p className="achievement-loc">
                            <MapPin size={14} /> Sri Sri University, Odisha, Cuttack
                        </p>
                        <p className="achievement-date">
                            <Calendar size={14} /> 3rd Year Achievement
                        </p>
                        <div className="achievement-desc">
                            <p>
                                Participated in the <strong>SIH'25 Grand Finale</strong> as a team of 6 with our mentor.
                                This milestone involved my first long-distance travel and provided an unforgettable experience, allowing our team to network with innovators from across various states and gain profound technical insights.
                            </p>
                        </div>
                    </div>
                </div>

                {/* More achievement cards will go here */}
            </div>
        </section>
    );
};

export default Achievements;
