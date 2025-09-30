import styled from 'styled-components';
import { RiBookMarkedLine } from 'react-icons/ri';

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 0;

  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: var(--verticalPadding);

  > h2 {
    font-size: 16px;
    font-weight: normal;
  }
`;

export const CalendarHeading = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;
`;

export const RepoIcon = styled(RiBookMarkedLine)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Tab = styled.div`
  background: var(--header);

  .content {
    display: flex;
    align-items: center;
    width: min-content;

    padding: 14px 16px;

    .label {
      font-size: 14px;
      padding: 0 7px;
      font-weight: 600;
    }
    .number {
      font-size: 12px;
      background: var(--ticker);
      padding: 2px 6px;
      border-radius: 24px;
    }
  }

  .line {
    display: flex;
    width: 200vw;
    border-bottom: 1px solid var(--border);
    margin-left: -50vw;
  }

  &.mobile {
    margin-top: var(--verticalPadding);

    .content {
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
  &.desktop {
  display: none;

  @media (min-width: 768px) {
    display: block;

    .wrapper {
      display: flex;
      margin: 0 auto;
      max-width: 1280px;
    }

    .content {
    margin-left: var(--horizontalPadding);
    }

      .offset {
        width: 25%;
        margin-right: var(--horizontalPadding);
      }
    }
  }
`;
