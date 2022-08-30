import React from 'react'
import Icon1 from '../../images/svg-1.png'
import Icon2 from '../../images/svg-3.png'
import Icon3 from '../../images/svg-5.png'
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesH2, ServicesIcon, ServicesP  } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expences</ServicesH2>
                    <ServicesP>We Help Reduce your fees and icrease your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that return 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
