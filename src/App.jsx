import React from 'react';
import Cards from './components/Cards';

function App() {
let priceData = [
  {
    plan: "FREE",
    price : 0,
    user : "Single User",
    storage : "5GB storage",
    publicProjects : "Unlimited Public Projects",
    communityAccess : "Community Access",
    privateProjects : "Unlimited Private Projects",
    phoneSupport : "Dedicated Phone Support",
    subDomian : "Free Subdomain",
    reports  : "Monthly Status Reports"
  },
  {
    plan: "PLUS",
    price : 9,
    user : "5 Users",
    storage : "50GB storage",
    publicProjects : "Unlimited Public Projects",
    communityAccess : "Community Access",
    privateProjects : "Unlimited Private Projects",
    phoneSupport : "Dedicated Phone Support",
    subDomian : "Free Subdomain",
    reports  : "Monthly Status Reports"
  },
  {
    plan: "PRO",
    price : 49,
    user : "Unlimited Users",
    storage : "150GB storage",
    publicProjects : "Unlimited Public Projects",
    communityAccess : "Community Access",
    privateProjects : "Unlimited Private Projects",
    phoneSupport : "Dedicated Phone Support",
    subDomian : "Free Subdomain",
    reports  : "Monthly Status Reports"
  }
]

  return <>
    <section className="pricing py-5">
        <div className="container">
            <div className="row">
              {
                priceData.map((e,i)=>{
                  return <Cards cardData={e} key={i}/>
                })
              }                
            </div>
        </div>
    </section>
  </>
}

export default App