import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import guidePic from '../public/guide.jpg'
import lakePic from '../public/lake.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pai Tiew - Begin living YOUR life</title>
        <meta name="description" content="Begin living YOUR life" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {/* <div className={styles.header}>
          <div className={styles.logo}>Pai Tiew</div>
          <div className={styles.menu}></div>
        </div> */}
        
        <div className={styles.proposition}>
          <div className={styles.introduction}>

            <div className={styles.textblock}>

              <div className={styles.headers}>
                <h1 className={styles.headline}>Learn to take confident action towards what you really want</h1>
                <h2 className={styles.subheadline}>I can teach you how to align your heart and mind, set you on your path of self-discovery, and let you tap into your inner strength to pursue your true purpose.</h2>
              </div>
              
              <div className={styles.introtext}>
                <p>
                  You are not alone. Feeling lost and unhappy in a society that from birth inundates you with an "ideal" of what "your" life should be, is only normal.  
                  We are not meant to lose contact with our heart, and then mostly base our decisions on our mind alone. 
                </p>
                <p>
                  Unfortunately in Western society, I have experienced that the wisdom how to balance the two again, seems mostly lost, and we find many people struggling to find happiness.
                </p>
                <p>
                  That is why I made it my life's purpose to help people find their true self again. 
                  I am Wiphatthra Tangchit, your life coach, and fellow traveler.
                </p> 

                <div className={styles.quote}>
                  <div className={styles.qtext}>Spiritual awakening is the most essential thing in man's life, and it is the sole purpose of being. Is not civilization, in all its tragic forms, a supreme motive for spiritual awakening?</div>
                  <div className={styles.qauthor}>⎯ Khalil Gibran</div>
                </div>

              </div>

            </div> {/* END TEXT BLOCK */}

            <div className={styles.pictureblock}>

              <div className={styles.guide}>
                <Image src={guidePic} alt="Picture of your guide" width="600" height="800" />
              </div>

              <div className={styles.center}>
                <div className={styles.socialmedia}>
                  <div className={styles.smbutton}>IN</div>
                  <div className={styles.smbutton}>FB</div>
                  <div className={styles.smbutton}>IG</div>
                </div>
              </div>

            </div> {/* END PICTURE BLOCK */}

          </div> {/* END INTRODUCTION */}

          <div className={styles.introduction}>
            <div className={styles.pictureblock}> 
            </div>

            <div className={styles.textblock} style={{paddingRight: "6rem"}}>
              <p>
                Besides my copious life experience, my more than 25 year experience in applying holistic balancing techniques, and my lifelong experience with mindfulness, which I like to call heartfulness instead, I can tap into a wide variety of holistic treatment modalities to efficiently reconnect you to yourself.
              </p>
              <p> 
                So we can faciliate and speed up your self-discovery, and leverage your inner resources, in order to quickly set you off on your own path and give you the confidence to know and to take action towards what truly makes you happy.			
              </p>
              <p>
                I have a unique perspective from intimimately knowing both Asian and Western cultures and I have many different holistic treatment modalities to my disposal that are not deeply known and understood well elsewhere.
              </p>
              <p>
                It is known nowadays that action precedes thought. My balancing of your heart-mind connection, so you start to be able to move more naturally and freely in life, is a more effective process than talking therapy alone. 
              </p>
              <p>  
                Although of course I will coach and support you in that way too. My words however will more heavily focus on their emotional impact on you, rather than trying to teach you things on an intellectual level as is usually done.
              </p>
              <p>
                I am looking forward to working with you and seeing you find and act your true purpose!
              </p>
            
              <div className={styles.cta}>
                <h2 className={styles.subheadline}>Begin living YOUR life</h2>
                <p>Book a free intake call with me to find out what I can do for you.</p>
                <div className={styles.alignbutton}>
                  <button className={styles.ctabutton}>
                    Start your new life NOW. 
                  </button> 
                </div>
              </div>
            </div>

          </div>
          
        </div> {/* END PROPOSITION */}
        
        <div className={styles.swan}>
          <Image src={lakePic} alt="swan swimming in lake" />  
        </div>

        <footer className={styles.footer}>
          ©2021 Pai Tiew | All rights reserved | <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
        </footer>
      
      </main>

      
    </div>
  )
}
