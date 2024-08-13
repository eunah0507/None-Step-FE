import { MainHeader } from "@components/header/Headers";
import {
    CategoryBtn,
    CategoryContainer,
    CategoryWrapper,
    ChatBtn,
    ChatContainer,
    ChatWrapper,
    MainSection,
    MainWrapper,
} from "./MainPage.styles";
import MenuBar from "@components/menuBar/MenuBar";
import LocationTracker from "@components/location/LocationTracker";
import elevatorIcon from "@assets/icons/elevator-icon.svg";
import escalatorIcon from "@assets/icons/escalator-icon.svg";
import wheelchairLiftIcon from "@assets/icons/wheelchair-lift-icon.svg";
import toiletIcon from "@assets/icons/toilet-icon.svg";
import difToiletIcon from "@assets/icons/dif-toilet-icon.svg";
import nursingRoomIcon from "@assets/icons/nursing-room-icon.svg";
import atmIcon from "@assets/icons/atm-icon.svg";
import aedIcon from "@assets/icons/aed-icon.svg";
import wheelchairChargerIcon from "@assets/icons/wheelchair-charger-icon.svg";
import customerServiceIcon from "@assets/icons/customer-service-icon.svg";
import seoulMetroIcon from "@assets/icons/seoul-metro-logo.svg";
import busanMetroIcon from "@assets/icons/busan-transp-corp-logo.svg";
import daejeonMetroIcon from "@assets/icons/daejeon-transp-corp-logo.svg";
import daeguMetroIcon from "@assets/icons/daegu-transp-corp-logo.svg";
import gwangjuMetroIcon from "@assets/icons/gwangju-transp-corp-logo.svg";
import { useRef } from "react";

const MainPage = () => {
    const scrollRef = useRef(null);

    const handleScrollCategory = () => {
        const el = scrollRef.current;
        if (el) {
            const onWheel = (e) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 5,
                    behavior: "smooth",
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    };

    return (
        <>
            <MainHeader />
            <MainWrapper>
                <MainSection></MainSection>
                <CategoryWrapper>
                    <h3>편의시설 바로가기</h3>
                    <CategoryContainer
                        ref={scrollRef}
                        onWheel={handleScrollCategory}
                    >
                        <li className="elevator">
                            <CategoryBtn>
                                <img src={elevatorIcon} alt="elevator-icon" />
                                <span>엘리베이터</span>
                            </CategoryBtn>
                        </li>
                        <li className="escalator">
                            <CategoryBtn>
                                <img src={escalatorIcon} alt="escalator-icon" />
                                <span>에스컬레이터</span>
                            </CategoryBtn>
                        </li>
                        <li className="wheelchair_lift">
                            <CategoryBtn>
                                <img
                                    src={wheelchairLiftIcon}
                                    alt="wheelchair-lift-icon"
                                />
                                <span>휠체어리프트</span>
                            </CategoryBtn>
                        </li>
                        <li className="toilet">
                            <CategoryBtn>
                                <img src={toiletIcon} alt="toilet-icon" />
                                <span>화장실</span>
                            </CategoryBtn>
                        </li>
                        <li className="dif_toilet">
                            <CategoryBtn>
                                <img
                                    src={difToiletIcon}
                                    alt="dif-toilet-icon"
                                />
                                <span>장애인 화장실</span>
                            </CategoryBtn>
                        </li>
                        <li className="nursing_room">
                            <CategoryBtn>
                                <img
                                    src={nursingRoomIcon}
                                    alt="nursing-room-icon"
                                />
                                <span>수유실</span>
                            </CategoryBtn>
                        </li>
                        <li className="atm">
                            <CategoryBtn>
                                <img src={atmIcon} alt="atm-icon" />
                                <span>ATM</span>
                            </CategoryBtn>
                        </li>
                        <li className="aed">
                            <CategoryBtn>
                                <img src={aedIcon} alt="aed-icon" />
                                <span>제세동기</span>
                            </CategoryBtn>
                        </li>
                        <li className="wheelchair_charger">
                            <CategoryBtn>
                                <img
                                    src={wheelchairChargerIcon}
                                    alt="wheelchair-charger-icon"
                                />
                                <span>전동 휠체어</span>
                                <span>충전</span>
                            </CategoryBtn>
                        </li>
                        <li className="customer_service">
                            <CategoryBtn>
                                <img
                                    src={customerServiceIcon}
                                    alt="customer-service-icon"
                                />
                                <span>고객센터</span>
                            </CategoryBtn>
                        </li>
                    </CategoryContainer>
                </CategoryWrapper>
                <ChatWrapper>
                    <h3>채팅 바로가기</h3>
                    <ChatContainer>
                        <li className="capital_chat">
                            <ChatBtn>
                                <span>수도권</span>
                                <img
                                    src={seoulMetroIcon}
                                    alt="seoul-metro-icon"
                                />
                            </ChatBtn>
                        </li>
                        <li className="busan_chat">
                            <ChatBtn>
                                <span>부산</span>
                                <img
                                    src={busanMetroIcon}
                                    alt="busan-metro-icon"
                                />
                            </ChatBtn>
                        </li>
                        <li className="daejeon_chat">
                            <ChatBtn>
                                <span>대전</span>
                                <img
                                    src={daejeonMetroIcon}
                                    alt="daejeon-metro-icon"
                                />
                            </ChatBtn>
                        </li>
                        <li className="daegu_chat">
                            <ChatBtn>
                                <span>대구</span>
                                <img
                                    src={daeguMetroIcon}
                                    alt="daegu-metro-icon"
                                />
                            </ChatBtn>
                        </li>
                        <li className="gwangju_chat">
                            <ChatBtn>
                                <span>광주</span>
                                <img
                                    src={gwangjuMetroIcon}
                                    alt="gwangju-metro-icon"
                                />
                            </ChatBtn>
                        </li>
                    </ChatContainer>
                </ChatWrapper>
                <LocationTracker />
            </MainWrapper>
            <MenuBar />
        </>
    );
};

export default MainPage;