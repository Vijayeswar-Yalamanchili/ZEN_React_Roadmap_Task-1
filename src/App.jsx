import React from 'react';
import Cards from './components/Cards';

function App() {
let priceData = [
  {
    plan: "FREE",
    price : 0,
    user : "Single User",
    isUser : true,
    storage : "5GB storage",
    isStorage : true,
    publicProjects : "Unlimited Public Projects",
    isPublicProjects :true,
    communityAccess : "Community Access",
    isCommunityAccess:true,
    privateProjects : "Unlimited Private Projects",
    isPrivateProjects : false,
    phoneSupport : "Dedicated Phone Support",
    isPhoneSupport : false,
    subDomian : "Free Subdomain",
    isSubDomian : false,
    reports  : "Monthly Status Reports",
    isReports : false
  },
  {
    plan: "PLUS",
    price : 9,
    user : "5 Users",
    isUser : true,
    storage : "50GB storage",
    isStorage : true,
    publicProjects : "Unlimited Public Projects",
    isPublicProjects :true,
    communityAccess : "Community Access",
    isCommunityAccess:true,
    privateProjects : "Unlimited Private Projects",
    isPrivateProjects : true,
    phoneSupport : "Dedicated Phone Support",
    isPhoneSupport : true,
    subDomian : "Free Subdomain",
    isSubDomian : true,
    reports  : "Monthly Status Reports",
    isReports : false
  },
  {
    plan: "PRO",
    price : 49,
    user : "Unlimited Users",
    isUser : true,
    storage : "150GB storage",
    isStorage : true,
    publicProjects : "Unlimited Public Projects",
    isPublicProjects :true,
    communityAccess : "Community Access",
    isCommunityAccess:true,
    privateProjects : "Unlimited Private Projects",
    isPrivateProjects : true,
    phoneSupport : "Dedicated Phone Support",
    isPhoneSupport : true,
    subDomian : "Free Subdomain",
    isSubDomian : true,
    reports  : "Monthly Status Reports",
    isReports : true
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