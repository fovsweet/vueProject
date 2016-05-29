import Mock from 'mockjs';
const data = Mock.mock(/\.json/,{
    "helpInfoVo": {
        "appId": string,
        "btnFlag|1-5": 3,
        "btnName": string,
        "finishedNum": number,
        "raReplyVoLists": {
            "userImageUrl": string,
            "userName": string
        },
        "replyAlertMessage": string,
        "replyNum": number,
        "replyRandomnum": number,
        "unfinishedNum": number
    },
    "shareUrl": string,
    "success": boolean
})