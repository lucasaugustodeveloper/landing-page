import React from 'react'
import { logoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const Logo = ({ alternativeText, url }: logoProps) => <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />

export default Logo
