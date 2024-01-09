import styled from 'styled-components';
import * as Styled from '../../../common/styled/button.styled';
import { COLORS, FONTS, MEDIA } from '../../../theme';
import FavIcon from '../../../../assets/images/icon-fav-default.png';
import FavIconHvr from '../../../../assets/images/icon-fav-alt-hover.png';

export const Button = styled(Styled.MiniButton)`
  @media screen and (max-width: ${MEDIA.tablet}px) {
    position: absolute;
    background: none;
    right: 3px;
    bottom: 3px;
    width: clamp(24px, 1.2vw, 30px);
    height: clamp(24px, 1.2vw, 30px);
    border: none;
    padding: 0;
    margin: 0;
    transition: none;
    transform: none;
    font-size: 0;
    &::before {
      display: none;
      transition: none;
    }
    > .hover {
      display: none;
    }
    > .default {
      display: block;
    }
  }

  &:hover {
    @media (max-width: ${MEDIA.tablet}px) {
      transition: none;
      transform: none;
      > .hover {
        display: block;
      }
      > .default {
        display: none;
      }
    }
  }

  > img {
    display: none;
  }
`;
export const Container = styled.div`
  width: 260px;
  padding: 13px 13px 8px;
  border: 1px solid ${COLORS.black};
  @media (max-width: 950px) {
    width: clamp(156px, 24vw, 260px);
    padding: 5px 5px 10px;
  }
  @media (max-width: 767px) {
    width: clamp(156px, 43vw, 260px);
  }
  &:hover {
    border: 1px solid ${COLORS.accent};
  }
`;
export const ImageHolder = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 8px;
  img {
    background-size: cover;
    width: 100%;
  }
`;
export const Heart = styled.span`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 36px;
  height: 36px;
  background: url(${FavIcon}) no-repeat;
  background-position: center;
  cursor: pointer;
  @media (max-width: 950px) {
    right: 1.5%;
    top: 1%;
    width: 24px;
    height: 24px;
    background-size: cover;
  }
  &:hover {
    background-image: url(${FavIconHvr});
  }
`;
export const Paragraph = styled.p`
  font-size: clamp(${FONTS.SIZES.s}, 1.9vw, ${FONTS.SIZES.m});
  @media (max-width: ${MEDIA.tablet}px) {
    font-size: clamp(${FONTS.SIZES.xs}, 3.4vw, ${FONTS.SIZES.s});
  }
`;
export const Name = styled.div`
  margin-bottom: 4px;
  height: clamp(48px, 7.7vw, 60px);
`;
export const Price = styled.div`
  text-align: end;
  margin-bottom: 20px;
  @media (max-width: ${MEDIA.tablet}px) {
    text-align: left;
    margin: 0;
  }
`;
export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  a {
    font-family: ${FONTS.FAMILIES.normal};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    color: ${COLORS.text};
    @media (max-width: ${MEDIA.tablet}px) {
      display: none;
    }
    &:hover {
      font-weight: 600;
    }
  }
`;
