import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import EventCard from './EventCard'
import './Event.css'

const Event = () => {
  return (
    <>
    <Navbar/>
    <div className="e-bg">
      
    </div>
    <div className="event-screen">

    <h1>Our Event</h1>

    <EventCard
     name = "GaneshUtsav"
     detial="Ganesh Utsav is a vibrant and joyous festival celebrated by people all over the world, especially in India. It honors Lord Ganesha, the deity of wisdom, prosperity, and good fortune, and usually lasts for ten days, culminating in the grand immersion of Ganesha idols in water bodies. During this time, homes and streets are adorned with colorful decorations, and elaborate idols of Lord Ganesha are worshipped with fervor. The festival brings together communities, fostering a sense of unity, devotion, and cultural richness. It's a time of feasting, singing devotional songs, and participating in various cultural events that add to the festive spirit."
     
     img='Gallery/ganpati.png'
    />
    
    <EventCard
     name = "Shivjayanti"
     detial="Shiv Jayanti is an important festival celebrated by Indians, especially in the state of Maharashtra, India. It commemorates the birth anniversary of Chhatrapati Shivaji Maharaj, a revered warrior king and the founder of the Maratha Empire. Shiv Jayanti is marked with great enthusiasm and reverence, with people offering prayers, conducting processions, and organizing cultural events to honor Shivaji Maharaj's legacy of courage, valor, and leadership. It is a time for reflection on his contributions to Indian history and a celebration of his ideals of justice, strength, and patriotism."
     img='Gallery/shivaji.png'
    />
    <EventCard
     name = "FoodFest"
     detial="The Maharashtra Mandal at IIT Kharagpur hosts a Food Fest to showcase authentic Maharashtrian cuisine. This culinary celebration features traditional dishes like vada pav, pav bhaji, puran poli, and ukdiche modak, offering a taste of Maharashtra's rich culinary heritage. It's a great opportunity for cultural exchange and appreciation through food at IIT Kharagpur."
     img='Gallery/food.png'
    />
    <EventCard
     name = "Aarambh"
     detial="'Aarambh' is a vibrant and welcoming event organized by our community to embrace and celebrate the newest members of our college, the first-year students. It's a joyous occasion filled with games, dances, and an abundance of fun activities. The event aims to create a warm and inclusive atmosphere where everyone can mingle, bond, and create lasting memories. The highlight of Aarambh is the energetic DJ night, where students can let loose, dance to their favorite tunes, and kick-start their college journey with enthusiasm and excitement. Aarambh is not just an event; it's a warm embrace that signifies the beginning of a memorable and enriching college experience for all."
     img='Gallery/food.png'
    />
    <EventCard
     name = "Bharari"
     detial="'Bharari' is a heartfelt farewell program dedicated to honoring and bidding adieu to our graduating seniors, celebrating their journey and contributions to our community. It's a time to reflect on the cherished moments, friendships, and achievements shared during their time with us. As they embark on new adventures and pursue their dreams, we come together to express gratitude, share memories, and wish them success in all their future endeavors. In the words of William Shakespeare, Parting is such sweet sorrow, and Bharari encapsulates this bittersweet sentiment as we say goodbye to our beloved seniors with love, admiration, and best wishes for the road ahead.."
     img='Gallery/food.png'
    />
    <EventCard
     name = "Misal Paw Party"
     detial="The Misal Pav Party is a delightful gathering organized by our community, where everyone comes together to enjoy the iconic Maharashtrian dish, Misal Pav, and partake in fun games and activities. This event is not just about relishing the spicy and flavorful Misal Pav, but also about fostering stronger bonds and connections among all participants. As people gather around to prepare and share this beloved dish, laughter and conversations flow freely, creating a warm and welcoming atmosphere. The addition of games adds an element of excitement and camaraderie, encouraging interaction and building friendships. The Misal Pav Party is not just a culinary experience but a celebration of togetherness and community spirit."
     img='Gallery/food.png'
    />

    </div>


    <Footer/>
    
    </>
  )
}

export default Event
