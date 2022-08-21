import styled from 'styled-components'

export const FeedbackContainer = styled.article`
  top: 11.5rem;
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 40px;

  & h1 {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 2.6rem;
  }

  & h3 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.625rem;
  }
`

export const SectionContainer = styled.section`
  flex: 1;
  display: flex;
  gap: 102px;

  & > img:last-child {
    width: 30.75rem;
    height: 18.3125rem;
  }

  @media (max-width: 1100px) {
    width: 100%;
    flex-direction: column;
    gap: 12px;
  }
`

export const ContentContainer = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
  border-radius: 6px 36px;

  & > div:first-child {
    display: flex;
    align-items: flex-start
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    background: ${(props) => props.theme.background};
    padding: 2rem;
    margin: 1.3px auto;
    width: 32.7rem;
    height: 16.7rem;
    border-radius: 6px 36px;
  }
`

export const ContentRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  & .content {
    width: 19.375rem;
  }
`

interface CircleContainerIconProps {
  color: string
}
export const CircleContainerIcon = styled.div<CircleContainerIconProps>`
  min-width: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${(props) => props.theme[props.color ?? 'purple']};
  color: ${(props) => props.theme.white};
`
