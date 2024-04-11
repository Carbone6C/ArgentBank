import HomeDisplay from '../../components/HomeDisplay/homedisplay'

import iconChat from '../../assets/img/icon-chat.png'
import iconMoney from '../../assets/img/icon-money.png'
import iconSecurity from '../../assets/img/icon-security.png'

function Home() {
  // Rendu de la page Home
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <HomeDisplay
          img={iconChat}
          title="You are our #1 priority"
          alt="Chat Icon"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <HomeDisplay
          img={iconMoney}
          title="More savings means higher rates"
          alt="Money Icon"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <HomeDisplay
          img={iconSecurity}
          title="Security you can trust"
          alt="Security Icon"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  )
}

export default Home
