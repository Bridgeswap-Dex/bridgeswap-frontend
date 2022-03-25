import React, { useContext, useState } from 'react'
import { Heading, Text, BaseLayout, Button, Image, Card, Flex, Grid } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { flexbox } from 'styled-system'

const drawNumber = 329
const drawTime = "Feb 20, 2022, 1:27 AM"
const lotteryPrize = "300, 000"
const brisAmt = 579
const userNumTicket = 0
const timeHours = 16
const timeMinutes = 45
const timeSeconds = 27


const Board = styled.div`
    border-radius: 20px;
    width: 95%;
    margin: 0 auto;
    padding: 20px;
    background-color: #0F0F71;
    background-image: url(/images/decorations/lottery-prize-bg.svg);
    background-position: center;
    ${({ theme }) => theme.mediaQueries.sm} {
        padding: 50px;

    }
`
const DrawTimeDisplay = styled(Flex)`
    justify-content: space-between;

`
const Draw = styled.div`
    display: flex;
    justify-content: space-between;

`
const PriceDisplay = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    margin: 30px auto;
    text-align: center;
    width: 100%;


    ${({ theme }) => theme.mediaQueries.sm} {
        text-align: left;
        width: 70%;
    }

`
const PricePot = styled(Flex)`
    justify-content: center;
    flex-direction: column;
    
    ${({ theme }) => theme.mediaQueries.sm} {
        margin-bottom: 0px;
        flex-direction: row;
        justify-content: space-between;

    }
`

const PricePotDetails = styled.div`
    margin-bottom: 20px;
    margin-right: 0px;
    min-width: 150px;
    ${({ theme }) => theme.mediaQueries.sm} {
        margin-bottom: 0px;
        margin-right: 20px;
    }

`
const CountDownTimer = styled.div`
    text-align: center;
`

const UserTicket = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`
const CountDown = styled(Flex)`
    align-items: flex-start;
    justify-content: center;
`
const Time = styled.div`
    text-align: center;
`
const Value = styled(Flex)`
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.bright};
    background-color: ${({ theme }) => theme.colors.primary};

    ${({ theme }) => theme.mediaQueries.sm} {
        width: 60px;
        height: 60px;
    }
`

const Img = styled.img`
    width: 7px;
    height: 32px;
    margin-top: 7px;
    
    ${({ theme }) => theme.mediaQueries.sm} {
        margin-top: 15px;

    }
`

const TimeLabel = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 10px;
`




const TicketBoard = () => {
    const { t } = useTranslation()

    return (
        <Board>
            <DrawTimeDisplay>
                <Text fontSize="14px" color='text'>
                    {t("Next Draw")}
                </Text>
                <Draw>
                    <Text fontSize="12px" color='text'>{`#${drawNumber}`}</Text >
                    <Text m="0px 4px" fontSize="12px" color='text'>|</Text>
                    <Text fontSize="12px" color='text'>{`Draw: ${drawTime}`}</Text>
                </Draw>

            </DrawTimeDisplay>
            <PriceDisplay>
                <Text color='text'>
                    {t("Price Pot")}
                </Text>
                <PricePot>
                    <PricePotDetails>
                        <Heading>
                            {t(`$${lotteryPrize}`)}
                        </Heading>
                        <Text fontSize='11px' mb="22px" color='textSubtle'>
                            {t(`~${brisAmt} BRIS`)}
                        </Text>
                        <Text color='text'>
                            {t("Your Tickets")}
                        </Text>
                        <Text mb="22px" fontSize='12px' color='text'>
                            {t(`You have `)}
                            <UserTicket>{`{${userNumTicket}}`}</UserTicket>
                            {t(` tickets for this round.`)}
                        </Text>
                        <Button scale="sm" variant="primary">Buy Tickets</Button>                        
                    </PricePotDetails>

                    <CountDownTimer>
                        <Text mb="12px" color='text'>
                            {t("Get Your Tickets Now")}
                        </Text>
                        <CountDown>
                            <Time>
                                <Value>{timeHours}</Value>
                                <TimeLabel>HOURS</TimeLabel>
                            </Time>
                            <Img src="/images/time-divider.svg" alt="time-divider" />
                            <Time>
                                <Value>{timeMinutes}</Value>
                                <TimeLabel>MINUTES</TimeLabel>
                            </Time>
                            <Img src="/images/time-divider.svg" alt="time-divider" />
                            <Time>
                                <Value>{timeSeconds}</Value>
                                <TimeLabel>SECONDS</TimeLabel>
                            </Time>
                        </CountDown>
                    </CountDownTimer>
                </PricePot>

            </PriceDisplay>
        </Board>
    )
}

export default TicketBoard
