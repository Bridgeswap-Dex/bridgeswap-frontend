import React from 'react'
import { Heading, Text, BaseLayout, Button, Image, Card, Flex, Grid } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'

const ticketPrice = 1

const LotteryInfo = styled.div`
    display: flex;
    background-image: url(/images/decorations/bg-design-large.svg);
    background-repeat: no-repeat;
    background-position: top center;
    flex-direction: column;
    justify-content: center;
    border-radius: 12px;
    text-align: center;
    padding: 30px 0px;
    margin: 12px;
`

const BridgeLottery = () => {
  const { t } = useTranslation()

    return (
        <LotteryInfo>
            <Text fontSize="12px" mb="15px" color="text">
              {t("The BridgeSwap Lottery")}
            </Text><Text fontWeight="700" mb="15px" fontSize="42px">
              {t("Win $300000")}
            </Text>
            <Text fontSize="12px" mb="22px" color="text">
              {t("in prizes")}
            </Text>
            <Button variant="primary" scale="sm" style={{margin: "10px auto", width: "200px"}}>Buy tickets</Button>
            <Text fontSize='12px' color='text'>
                {t(`Tickets sold at $${ticketPrice} per ticket`)}
            </Text>
        </LotteryInfo>
    )
}

export default BridgeLottery
