import HomeCSS from './Home.module.css';
const Home = () => {
    
    return (
        <div className={HomeCSS.home}>
           <div className={HomeCSS.content}>
           <img id = {HomeCSS.picture1} src="/images/Coaching.jpg" alt="" />
            <div className={HomeCSS.text}>
                <h2>Getting Started With CoachConnect!</h2>
                <p>CoachConnect is an online platform made with the goal of making tennis education 
                    more accessible and affordable. CoachConnect makes it simple and efficient for 
                    its users to find coaches in their area and begin enrolling in lessons.</p>
            </div>
            </div>
        </div>
    )
}

export default Home;