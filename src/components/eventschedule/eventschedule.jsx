import "./eventschedule.css";

function EventSchedule(){
    return(
        
        <div className="scheduleSection" id="programme">
            <h1><span className="dash"></span>Programme</h1>
            <h2>Event Schedule</h2>
            <div className="tableWrapper">
                <table className="scheduleTable">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Session</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="sessionGroup">
                            <td colSpan="3">Morning Sessions</td>
                        </tr>
                        <tr>
                            <td className="time">10:00 AM</td>
                            <td className="sAndD">Registration & Networking</td>
                            <td className="sAndD">Check-in, welcome kits, networking, sponsor activations, and marketplace access.</td>
                        </tr>
                        <tr>
                            <td className="time">10:30 AM</td>
                            <td className="sAndD">Opening Ceremony</td>
                            <td className="sAndD">Opening remarks, summit overview, and sponsor acknowledgements.</td>
                        </tr>
                        <tr>
                            <td className="time">11:00 AM</td>
                            <td className="sAndD">Keynote Address</td>
                            <td className="sAndD">"Built to Compete Globally"</td>
                        </tr>
                        <tr>
                            <td className="time">12:00 PM</td>
                            <td className="sAndD">Panel Sessions</td>
                            <td className="sAndD">The Blueprint: Business, Life & Legacy</td>
                        </tr>

                        <tr className="sessionGroup">
                            <td colSpan="3">Afternoon Sessions</td>
                        </tr>
                        <tr>
                            <td className="time">1:00 PM</td>
                            <td className="sAndD">Networking Lunch</td>
                            <td className="sAndD">—</td>
                        </tr>
                        <tr>
                            <td className="time">2:00 PM</td>
                            <td className="sAndD">Breakout Sessions</td>
                            <td className="sAndD">—</td>
                        </tr>
                        <tr>
                            <td className="time">3:30 PM</td>
                            <td className="sAndD">Pitch Competition</td>
                            <td className="sAndD">Young entrepreneurs pitch live for grants and recognition.</td>
                        </tr>

                        <tr className="sessionGroup">
                            <td colSpan="3">Evening Sessions</td>
                        </tr>
                        <tr>
                            <td className="time">5:00 PM</td>
                            <td className="sAndD">Awards & Grant Announcements</td>
                            <td className="sAndD">Recognition of winners and closing remarks.</td>
                        </tr>
                        <tr>
                            <td className="time">5:30 PM</td>
                            <td className="sAndD">Networking Reception</td>
                            <td className="sAndD">Music, conversations, content creation, and connection opportunities.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default EventSchedule;