import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>  
        <section id="header">
          <a href="#"><img src="img/icons/kmp logo.png" alt="kmp logo" height="60px" class="logo"/></a>
          <div>
            <ul id="navbar">
              <li><a href="index.html">Home</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="cart.html"><img src="img/icons/cart.png" height="40pxs" /></a></li>
            </ul>
          </div>
        </section>
        <section id="main-header">
          <h4>Welcome to Konnect Market Place</h4>
          <h2>Your one-stop store for all your needs!</h2>
          <h2>We offer a wide range of products at unbeatable prices.</h2> 
          <p>Shop now and enjoy exclusive discounts!</p>
          <button>shop now</button>
        </section>
        <section id="services">
          <div class="service-box">
            <img src="img/icons/f1.png" alt=""/>
            <p>variety to chhose</p>
          </div>
          <div class="service-box">
            <img src="img/icons/f2.png" alt=""/>
            <p>Online order</p>
          </div>
          <div class="service-box">
            <img src="img/icons/f3.png" alt="" />
            <p>lowest price</p>
          </div>
          <div class="service-box">
            <img src="img/icons/f4.png" alt="" />
            <p>promotions</p>
          </div>
          <div class="service-box">
            <img src="img/icons/f5.png" alt=""/>
            <p>Happy sell</p>
          </div>
          <div class="service-box">
            <img src="img/icons/f6.png" alt=""/>
            <p>Online 24/7</p>
          </div>
        </section>
        <section id="help">
          <div class="help-box">
            <h2>WE PROVIDE A PLATFORM WHERE YOU GET ALL YOU NEED AT YOUR HAND PALM</h2>
            <h2>you can sell, buy ,get other services while at your place.</h2>
            <h2>market your products and services with AI proffessionals.</h2>
            <button>Find your market</button>
          </div>
          <div id="slider-frame">
            <div id="slide-images">
              <div class="img-container">
                <img src="img/img/blender (2).webp"/>
              </div>
              <div class="img-container">
                <img src="img/img/cooker 1700.jpg"/>
              </div>
              <div class="img-container">
                <img src="img/img/dispenser.jpg"/>
              </div>
              <div class="img-container">
                <img src="img/img/ear.jpg"/>
              </div>
              <div class="img-container">
                <img src="img/img/exte.jpg"/>
              </div>
            </div>
          </div>
        </section>
        <section id="why">
          <div class="why-box">
            <h2>when WHY are more.</h2>
            <p>Why pay more?</p>
            <p>Why walk to buy goods & services?</p>
            <p>Why strain to seek job?</p>
            <p>Why not get all you need at your palm?</p>
            <h1>we provide HOW on single click.</h1>
          </div>
        </section>
        <section id="trade">
          <div class="trade-box">
            <h2>Ensure production quality with</h2>
            <h1>Verified Supply</h1>
            <p>Connect with variety of sellers with third-party-verified credentials
              and capabilities. Look for the "Verified" logo to
            begin trading with experienced suppliers your bussiness could rely on.
            </p>
            <a href="#">Learn more</a>
          </div>
          <div class="trade-box">
            <h2>Protect your purchase with</h2>
            <h1>Trade Assuarance</h1>
            <p>sell and buy confidently with access to secure payment options,
              protection against fraud, and 24/7 customer support.
              pay only when you are satisfied with the product.
            </p>
            <a href="#">Learn more</a>
          </div>
        </section>
        <section id="testimonial">
          <div class="test-box1">
            <div class="test-box2">
              <div class="test-box3">
                <h2>What our customers say</h2>
                <p>We are proud to have served thousands of satisfied customers.</p>
                <p>Here are some of their testimonials:</p>
              </div>
              <div class="test-box4">
                <img src="img/icons/arrow left.png" alt="" />
                <img src="img/icons/arrow right.png" alt="" />
              </div>
            </div>
            <div class="test-box5">
              <p>"KMP.COM is a game changer for retailers bussiness like us.
                We were able to find the the products at cheaper prices and delivered to us the 
                products on time.we got the best platform than ever."</p>
              <h3>-Shawann E,25</h3>
            </div>
            <div class="test-box6">
              <p>"Once i discovered kmp.com, I was amazed at how many options i have 
                with supplier from kamukunji wholesaller."</p>
              <h3>-Juma M,30</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App