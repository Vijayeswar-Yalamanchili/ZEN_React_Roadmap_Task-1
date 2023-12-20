import React from 'react'

function Cards({cardData}) {
    // const {cardData} = props     //instead of giving props in parameter and then destructuring(as shown in this line) the props value in {cardData} variable, we can simply give as {cardData} in paramter
    // console.log(cardData);       // after destructing, in console it will the display objs data alone , with destructing it will show a obj inside to cardData where the obj details will be held.
    return <>        
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{cardData.plan}</h5>
                    <h6 className="card-price text-center">${cardData.price}<span className="period">/month</span></h6>
                    <hr/>
                    <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{cardData.user}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{cardData.storage}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{cardData.publicProjects}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{cardData.communityAccess}</li>
                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{cardData.privateProjects}</li>
                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{cardData.phoneSupport}</li>
                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{cardData.subDomian}</li>
                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{cardData.reports}</li>
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Cards