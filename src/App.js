import './App.css';
import 'antd/dist/antd.css';
import HeroSec from './sections/HeroSec'
import MenuSec from './components/MenuSec'
import AboutSec from './sections/AboutSec'
import FeatureSec from './sections/FeatureSec'
import HowWorkSec from './sections/HowWorkSec'
import FaqSec from './sections/FaqSec'
import PricingSec from './sections/PricingSec'
import ContactSec from './sections/ContactSec'
import FooterSec from './components/FooterSec'


import { Layout } from 'antd'
const { Header, Content, Footer } = Layout


function App() {
  return (

    <div dir='rtl' className='mainLayout'>

      <Layout>

        <Header>
          <MenuSec />
        </Header>

        <Content>
          <HeroSec />
          <AboutSec />
          <FeatureSec />
          <HowWorkSec />
          <FaqSec />
          <PricingSec />
          <ContactSec />
        </Content>

        <Footer>
          <FooterSec />
        </Footer>

      </Layout>
    </div>
  );
}

export default App;
