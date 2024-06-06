import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';


const Home = () => {
  const loggedIn = { firstName: 'Andres', lastName:  'Jose', email: 'Andresjose@mail.com' };
  return (
    <section className='home'>
      <div className='home-content' >
      <header className='home-header'>
      <HeaderBox 
      type="greeting"
      title="Welcome"
      user={loggedIn?.firstName||'Guest'}
      subtext="Access and manage your accounts and transactions efficiently."
      />

      <TotalBalanceBox 
       accounts={[]}
       totalBanks={1}
       totalCurrentBalance={9057}
      />
      </header>

      RECENT TRANSACTIONS
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions = {[]}
      banks= {[{ currentBalance: 1478.50 }, {currentBalance: 7960.80}]}
      />
    </section>
  )
}

export default Home