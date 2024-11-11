import Phone from "../assets/images/image-mockups.png"
import icon1 from "../assets/icons/icon-online.svg"
import icon2 from "../assets/icons/icon-budgeting.svg"
import icon3 from "../assets/icons/icon-onboarding.svg"
import icon4 from "../assets/icons/icon-api.svg"
import Article1 from "../assets/images/image-currency.jpg"
import Article2 from "../assets/images/image-restaurant.jpg"
import Article3 from "../assets/images/image-plane.jpg"
import Article4 from "../assets/images/image-confetti.jpg"
import '../styles/Home.css'

const Home = () => {
  return (
    <>
      <div className="Home-container">
        <div className="Home">
          <h1>Next generation digital banking</h1>
          <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
          <button>Request Invite</button>
        </div>
        <div className="Home-image">
          <img src={Phone} alt="" />
        </div>
      </div>
      <div className="About-container">
        <div className="About">
          <h2>Why choose Easybank?</h2>
          <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
        <div className="items">
          <ul>
            <li>
              <img src={icon1} alt="" />
              <h3>Online Banking</h3>
              <p>
                Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
              </p>
            </li>
            <li>
              <img src={icon2} alt="" />
              <h3>Simple Budgeting</h3>
              <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
            </li>
            <li>
              <img src={icon3} alt="" />
              <h3>Fast Onboarding </h3>
              <p>We don&apos;t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </li>
            <li>
              <img src={icon4} alt="" />
              <h3>Open API </h3>
              <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="Article-container">
        <div className="Article">
          <h1>Latest Articles</h1>
        </div>
        <div className="Article-cards">
          <ul>
            <li>
              <div className="Article-img">
                <img src={Article1} alt="" />
              </div>
              <div className="Article-text">
                <span>By Claire Robinson </span>
                <h3>Receive money in any currency with no fees</h3>
                <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
              </div>
            </li>
            <li>
              <div className="Article-img">
                <img src={Article2} alt="" />
              </div>
              <div className="Article-text">
                <span>By Claire Robinson </span>
                <h3>Receive money in any currency with no fees</h3>
                <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
              </div>
            </li>
            <li>
              <div className="Article-img">
                <img src={Article3} alt="" />
              </div>
              <div className="Article-text">
                <span>By Claire Robinson </span>
                <h3>Receive money in any currency with no fees</h3>
                <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
              </div>
            </li>
            <li>
              <div className="Article-img">
                <img src={Article4} alt="" />
              </div>
              <div className="Article-text">
                <span>By Claire Robinson </span>
                <h3>Receive money in any currency with no fees</h3>
                <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Home