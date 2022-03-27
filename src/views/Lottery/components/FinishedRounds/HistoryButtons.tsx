import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledNav = styled.div`
  margin-bottom: 40px;
`


function HistoryButtons({ activeIndex = 0 }) {
    const { t } = useTranslation()


    return (

        <StyledNav>
            <ButtonMenu activeIndex={activeIndex} scale="sm" variant="primary">
            <ButtonMenuItem id="allhistory-nav-link" to="/" as={Link}>
                {t('All History')}
            </ButtonMenuItem>
            <ButtonMenuItem id="myhistory-nav-link" to="/" as={Link}>
                {t('My History')}
            </ButtonMenuItem>
            
            </ButtonMenu>
        </StyledNav>
    )
}

export default HistoryButtons
