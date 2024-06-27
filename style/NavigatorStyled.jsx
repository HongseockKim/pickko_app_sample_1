import styled from "styled-components";

const NavigatorStyled = styled.div`
  .nav_1 {
    .nav_1_list_item {
      overflow: hidden;
      line-height: 50px;
      transition: max-height 0.3s ease-in-out;
      max-height: ${props => props.isOpen ? props.menuHeight || '500px' : '50px'};

      .nav_2_list {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
        opacity: 0;
      }

      &.on {
        .nav_2_list {
          max-height: ${props => props.menuHeight || '500px'};
          opacity: 1;
        }
      }
    }
  }
`;

export default NavigatorStyled;