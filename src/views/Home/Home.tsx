import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button, Image, Card, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'

const Hero = styled.div`
  align-items: center;
  border-radius: 20px;
  background-image: linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%);
  backdrop-filter: blur(20px);
  background-repeat: no-repeat;
  background-position: top center;
  max-width: 98%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding: 0px 30px;
  padding-top: 16px;
  text-align: center;
  
  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    max-width: 90%;
    padding: 0px 120px;
    padding-top: 116px;
    height: 265px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`
const AdsCards = styled(BaseLayout)`
  align-items: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: 50px;
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`

const BridgeBoard = styled.div`
  align-items: center;
  border: 2px solid #2424a8;
  box-shadow: 3px 7px 5px 7px #121254;
  border-radius: 20px;
  background: #09092B;
  max-width: 98%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding: 10px 30px;
  text-align: center;
  
  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 90%;
    padding: 20px 40px;
  }
`
const FeatBtn = styled(Button)`
  color: ${({ theme }) => theme.colors.bright};
  border-color: ${({ theme }) => theme.colors.bright};
  margin: 20px 0px;
`

const FeatsGrid = styled(BaseLayout)`
  align-items: start;
  & > div {
    grid-column: span 6;
  }
`

const PerformersFlex = styled(Flex)`
  align-items: start;
  & > div {
    grid-column: span 6;
  }
`

const Performer = styled.div`
  display: flex;
  border: 2px solid white;
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <Hero>
        <Heading as="h1" scale="xl" mb="24px" color="blue">
          {t('Bridging Defi on BNB chain')}
        </Heading>
        <Text color="white">{t('Launched initially on the BNB chain network, BridgeSwap will soon expand to the Polygon, Fantom, Avalanche, HECO and more.')}</Text>
        <Button variant="primary" style={{margin: "20px 0px"}}>Learn more</Button>
      
      </Hero>
      <div>
        <AdsCards>
          <Image src="/images/adverts/pools-coming-soon.svg" alt="Pools coming soon" width={400} height={200} responsive/>
          <Image src="/images/adverts/farms-coming-soon.svg" alt="Farms coming soon" width={400} height={200} responsive/>
        </AdsCards>
        <BridgeBoard>
          <Heading as="h3" mb="24px" color="primary">
            {t('A suite of Features Powering BridgeSwap')}
          </Heading>
          <FeatsGrid>
            <Card p="15px">
              <Heading as="h5" mb="10px" color="text">
                {t('Trade')}
              </Heading>
              <Text small fontSize='12px' color="text">
                {t('Instantly swap crypto tokens: NO registration or account needed.')}
              </Text>
              <FeatBtn variant="secondary" scale="sm">Enter exchange</FeatBtn>
            </Card>

            <Card p="15px">
              <Heading as="h5" mb="10px" color="text">
                {t('Farms')}
              </Heading>
              <Text fontSize='12px' color="text">
                {t('Provide liqudity to earn yield.')}
              </Text>
              <FeatBtn variant="secondary" scale="sm">Add liquidity</FeatBtn>
            </Card>

            <Card p="15px">
              <Heading as="h3" mb="12px" color="text">
                {t('Pools')}
              </Heading>
              <Text small fontSize='12px' color="text">
                {t('Stake tokens, earn passive inome with crypto.')}
              </Text>
              <FeatBtn variant="secondary" scale="sm">Enter pools</FeatBtn>
            </Card>

            <Card p="15px">
              <Heading as="h5" mb="10px" color="text">
                {t('Defi 2.0 Zap')}
              </Heading>
              <Text small fontSize='12px' color="text">
                {t('Swap LPs to receive discounted BRIS tokens.')}
              </Text>
              <FeatBtn variant="secondary" scale="sm">Swap now</FeatBtn>
            </Card>

            <Card p="15px">
              <Heading as="h5" mb="10px" color="text">
                {t('Lottery')}
              </Heading>
              <Text small fontSize='12px' color="text">
                {t('Provably fair, on-chain game. WIN BIG!!!')}
              </Text>
              <FeatBtn variant="secondary" scale="sm">Play now</FeatBtn>
            </Card>

            <Card p="15px" style={{background: "linear-gradient(155.08deg, #FA00FF -35.34%, #17D2FB 134.08%)"}}>
              <Heading as="h5" mb="10px" color="text">
                {t('Referral Program')}
              </Heading>
              <Text small fontSize='12px' color="text">
                {t('Share your referral link, invite your fiend and earn 5% of their yields FOREVER!')}
              </Text>
              <Button variant="primary" scale="sm" style={{margin: "20px 0px"}}>Invite friends</Button>
            </Card>
            
          </FeatsGrid>
        </BridgeBoard>

        <BridgeBoard>
          <Heading as="h5" mb="10px" color="text">
            {t('Top performers')}
          </Heading>
          <FeatsGrid>
            <Card style={{width: "100%", border: "20x solid white"}}>
              <Heading as="h5" mb="10px" color="text">
                {t('Pools')}
              </Heading>
              <PerformersFlex>
                <Performer>

                  <img width="40px" height="40px" src="/images/farms/ada-bnb.svg" alt="Pools coming soon" />
                  <Text small fontSize='12px' color="text">
                    {t('ADA-BNB')}
                  </Text>
                </Performer>

              </PerformersFlex>
            </Card>
            <Card style={{width: "100%", border: "20x solid white"}}>
              <Heading as="h5" mb="10px" color="text">
                {t('Farms')}
              </Heading>
              <PerformersFlex>
                <Performer>
                  <img width="40px" height="40px" src="/images/farms/alice-bnb.svg" alt="Pools coming soon"/>
                  <Text small fontSize='12px' color="text">
                    {t('ADA-BNB')}
                  </Text>
                </Performer>

              </PerformersFlex>
            
            </Card> 
          </FeatsGrid>
          {/* <FarmStakingCard /> */}
          {/* <LotteryCard /> */}
        </BridgeBoard>
        <CTACards>
          <EarnAPRCard />
          <EarnAssetCard />
          <WinCard />
        </CTACards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
