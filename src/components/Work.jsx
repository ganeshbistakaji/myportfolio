import React from 'react'
import './css/Work.scss'

const Work = () => {
  return (
    <div className="work" id='works'>
        <div className="top">
            <div className="left">
                <p className="title">I've been making</p>
                <dic className="desc">website templates for people to use it for their site as needed and also have been working on a <strong>SCSS</strong> libarary (now abandone for the time being) due to my other works. I also work with a <strong>linux</strong> device hence also being experienced in linux (debian/ubuntu). </dic>
            </div>
            <div className="right">
                <p className="title">PocketMine-MP</p>
                <dic className="desc">is a server software for a game (Minecraft) where anyone can create their own server with multiple minigames using plugins. The server software is coded in PHP (ridiculous? I know). I have made few open source plugins for the software on my github.</dic>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <p className="title">I have been</p>
                <dic className="desc">taking classes for other students that be school or college students about Web Development. Hence I also do have skills as a teacher and speaker since I taught my students like a literal children to make the concepts easier to grasp and understand </dic>
            </div>
            <div className="right">
                <p className="title">I have been working</p>
                <dic className="desc">on a Pasword Manager which can be hosted by anyone online or locally since it is an open source project in GitHub under GPL license. It got features such as custom themes, proper categories, and a good UI.</dic>
            </div>
        </div>
    </div>
  )
}

export default Work
