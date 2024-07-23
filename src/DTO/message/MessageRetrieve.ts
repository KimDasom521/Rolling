type RelationShip = "친구" | "지인" | "동료" | "가족";
type Font = "Noto Sans" | "Pretendard" | "나눔명조" | "나눔손글씨 손편지체";

export interface MessageRetrieve {
    id : number;
    recipientId : number;
    sender : string;
    profileImageURL : string;
    relationship : RelationShip;
    content : string;
    font : Font;
    createdAt? : Date;
}