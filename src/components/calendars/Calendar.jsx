import React from 'react'
import Headercalendar from '../headercalendar/Headercalendar'
import Year from '../years/Year';
import Month from '../months/Month';
import Day from '../days/Day';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
} from 'react-router-dom';

const Calendar = () => {
    return (
        <div>
            <Router>
            <Headercalendar />
                {/* <nav style={{ margin: 10 }}>
                    <Link to="/" style={{ padding: 5 }}>
                        Month
                    </Link>
                    <Link to="/about" style={{ padding: 5 }}>
                        About
                    </Link>
                    <Link to="/posts" style={{ padding: 5 }}>
                        Posts
                    </Link>
                </nav> */}
                {/* Rest of the code remains same */}
                <Routes>
                    <Route path="/" element={<Month />} />
                    <Route path="/day" element={<Day />} />
                    <Route path="/year" element={<Year />} />

                </Routes>
            </Router>

        </div>
    )
}

export default Calendar