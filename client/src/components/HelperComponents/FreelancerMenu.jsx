import home from '../../assets/svgs/homeIcon.svg'
import services from '../../assets/svgs/servicesIcon.svg'
import chat from '../../assets/svgs/chatIcon.svg'
import settings from '../../assets/svgs/settings.svg'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function FreelancerMenu({ active }) {
    const { id } = useParams()
    return (
        <menu className='Menu'>
            <div className={active == "home" ? 'link active' : 'link'}>
                <NavLink to={`/dashboard/helper/${id}`}>
                    <img src={home} alt="Home" />
                    <div className="linkHeader">
                        Home
                    </div>
                </NavLink>
            </div>
            <div className={active == "jobs" ? 'link active' : 'link'}>
                <NavLink to={`/dashboard/helper/${id}/jobs`}><img src={services} alt="Jobs" />
                    <div className="linkHeader">
                        My Jobs
                    </div>
                </NavLink>
            </div>
            <div className={active == "chat" ? 'link active' : 'link'}>
                <NavLink to={`/dashboard/helper/${id}/chat`}>
                    <img src={chat} alt="Chat" />
                    <div className="linkHeader">
                        Chat Room
                    </div>
                </NavLink>
            </div>
            <div className={active == "profile" ? 'link active' : 'link'}>
                <NavLink to={`/dashboard/helper/${id}/profile`}>
                    <img src={settings} alt="Settings" />
                    <div className="linkHeader">
                        My Profile
                    </div>
                </NavLink>
            </div>
        </menu>
    )
}
