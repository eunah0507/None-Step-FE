import styled from "styled-components";

export const InfoBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 600px;
    height: calc(100vh - 142px);
    border: none;
    border-radius: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 30;
`;

export const InfoWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    padding: 30px 14px 20px 0;
    border: 1px solid ${(props) => props.theme.colors.gray05};
    border-radius: 7px;
    background: ${(props) => props.theme.colors.white};
    overflow: hidden;
    z-index: 40;

    @media screen and (max-width: 500px) {
        width: 94%;
    }
`;

export const InfoCloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;

    svg {
        width: 22px;
        height: 22px;
        color: ${(props) => props.theme.colors.gray01};
    }
`;

export const InfoContainer = styled.div`
    height: 100%;
    padding-left: 20px;
    padding-right: 6px;

    .info_title {
        font-size: 1.6rem;
        margin-bottom: 20px;
    }

    .congestion_info .info {
        margin-bottom: 30px;
    }

    .info > li {
        margin-left: 20px;
        margin-bottom: 8px;
        color: #333;
        font-size: 1rem;
        list-style-type: disc;
    }

    .info li span {
        line-height: 1.5;
        color: #4f4f4f;
        font-size: 1.5rem;
        word-break: keep-all;
    }

    .distance_info_step,
    .convenience_info_step {
        margin-top: 5px;
        margin-left: 2px;
    }

    .distance_info_step li {
        margin-bottom: 4px;
    }

    .distance_info_step li span:first-child {
        font-weight: 500;
    }

    .distance_info_step .safe {
        color: #34c759;
    }

    .distance_info_step .caution {
        color: #ffc500;
    }

    .distance_info_step .danger {
        color: #ff3b30;
    }

    .distance_info_step .nothing {
        color: #4f4f4f;
    }

    .convenience_info_step li {
        display: flex;
        align-items: center;
    }

    .convenience_info_step li:not(:last-child) {
        margin-bottom: 5px;
    }

    .convenience_info_step img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    .convenience_info_step svg {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        color: #4f4f4f;
        fill: #4f4f4f;
    }
`;