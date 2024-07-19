type RelationShip = "친구" | "지인" | "동료" | "가족";
type Font = "Noto Sans" | "Pretendard" | "나눔 명조" | "나눔손글씨" | "손편지체";

export type MessageCreate = {
    team: string,
    recipientId: number,
    sender: string,
    profileImageURL: string | null,
    relationship: RelationShip,
    content: string,
    font: Font,
}