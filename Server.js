const express = require('express');
const MusResponse = require('./Responses/MusResponse.js');
const UserLogin = require('./Responses/UserLogin.js');
const app = express();
const port = 8080;
const config = require('./config.json')
app.use(express.json());
app.post('/rest/passport/v2/login', (req, res) => {
    if(config.IsLoginDisabled)
    {
        const response = new MusResponse('403', 'Logging in, is temporarily disabled', 'Error', true, false, null, false, Date.now());
        res.json(response.toObject());
    
    }else {
        const response = new MusResponse('200', 'ok', 'ok', false, false, new UserLogin.Result(
            new UserLogin.UserProfile(
                1, // user id
                '1', // UserId in string
                'bid1', // UserIdBid????
                true, // IsEmailVerified?
                'ZRD', // nickname
                'ZRD', //displayname
                'https://i.ibb.co/82tTXyn/image.png', // icon?
                false, // IsFeatured?
                false, // IsPrivateAccount?
                false, // AddFriendWithoutConfirmation
                'Live with passion, live musical.ly', // User description
                false, // IsDisabled?
                "ZRD", // UserHandle, aka username????
                0, // InsertTime
                1337, // Follows Amount
                1337, // Fans Amount
                0, // Public Musical Num
                1, // Private Musical Num
                1337, // MusicalLikedNum
                1337, // LikesNum
                0, // LivelyHearts
                "Idk", // DirectAccount
                false, //IsSuspicious
                'ShareURL', // ShareUrl
                0, // LikesNumSelf
                'https://i.ibb.co/82tTXyn/image.png', // VideoIconUrl
                false, // HideMessagePreview
                false, // DisallowFindMeByHandle?
                false, // DisallowFindMeByNO?
                false, // DisallowFindMeByEmail?
                false, // DisallowFindMeByPhone
                true, // Age Verified
                [], // ThirdUsers???
                'Male', // Gender
                true, // IsVerified?
                false, // IsReviever????
                true, // IsAdmin
                true, // HideLoaction
                false, // IsPrivateChat???
                1, // PolicyVersion
                'US', // CountryCode
                'pl_pl', // LanugageCode
                'UTC', // TimeZone????
                0, // Source???
                0, // LikeVisibleSetting?
                'account@musical.ly', // Email
                [], // thirdUserDTOList - seems like users settings???
                0, // SecureEmailStatus
                [], // UserApp, it is 99.9% that it is users connected social media
                0, // AccountSecurityRisk
            ), true).toObject(), true, Date.now());
        res.json(response.toObject());

    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
