// userLogin.js
class UserLogin {
    constructor(success = false, fallback = false, result = null, timestamp = Date.now(), fail = false) {
        this.success = success;
        this.fallback = fallback;
        this.result = result;
        this.timestamp = timestamp;
        this.fail = fail;
    }
    toObject() {
        return {
            success: this.success,
            fallback: this.fallback,
            result: this.result ? this.result.toObject() : null,
            timestamp: this.timestamp,
            fail: this.fail
        };
    }

    static createMock() {
        return new UserLogin(
            true,
            false,
            Result.createMock(),
            Date.now(),
            false
        );
    }
}

class Result {
    constructor(userProfile = null, registered = false) {
        this.userProfile = userProfile;
        this.registered = registered;
    }

    toObject() {
        return {
            userProfile: this.userProfile ? this.userProfile.toObject() : null,
            registered: this.registered
        };
    }

    static createMock() {
        return new Result(UserProfile.createMock(), true);
    }
}

class UserProfile {
    constructor(
        userId = 0,
        userIdStr = '',
        userIdBid = '',
        emailVerified = false,
        nickName = '',
        displayName = '',
        icon = '',
        isFeatured = false,
        isPrivateAccount = false,
        addFriendWithoutConfirm = false,
        userDesc = '',
        disabled = false,
        handle = '',
        insertTime = Date.now(),
        followNum = 0,
        fansNum = 0,
        musicalNum = 0,
        privateMusicalNum = 0,
        musicalLikedNum = 0,
        likesNum = 0,
        livelyHearts = 0,
        directAccount = '',
        suspicious = false,
        shareUri = '',
        likesNumSelf = 0,
        videoIconURI = '',
        hideMessagePreview = false,
        disallowFindMeByHandle = false,
        disallowFindMeByNO = false,
        disallowFindMeByEmail = false,
        disallowFindMeByPhone = false,
        ageVerified = false,
        thirdUsers = [],
        gender = '',
        verified = false,
        reviewer = false,
        admin = false,
        hideLocation = false,
        isPrivateChat = false,
        policyVersion = 0,
        countryCode = '',
        languageCode = '',
        timeZone = '',
        source = 0,
        likeVisibleSetting = 0,
        email = '',
        thirdUserDTOList = [],
        secureEmailStatus = 0,
        userApp = [],
        accountSecurityRisk = 0
    ) {
        this.userId = userId;
        this.userIdStr = userIdStr;
        this.userIdBid = userIdBid;
        this.emailVerified = emailVerified;
        this.nickName = nickName;
        this.displayName = displayName;
        this.icon = icon;
        this.isFeatured = isFeatured;
        this.isPrivateAccount = isPrivateAccount;
        this.addFriendWithoutConfirm = addFriendWithoutConfirm;
        this.userDesc = userDesc;
        this.disabled = disabled;
        this.handle = handle;
        this.insertTime = insertTime;
        this.followNum = followNum;
        this.fansNum = fansNum;
        this.musicalNum = musicalNum;
        this.privateMusicalNum = privateMusicalNum;
        this.musicalLikedNum = musicalLikedNum;
        this.likesNum = likesNum;
        this.livelyHearts = livelyHearts;
        this.directAccount = directAccount;
        this.suspicious = suspicious;
        this.shareUri = shareUri;
        this.likesNumSelf = likesNumSelf;
        this.videoIconURI = videoIconURI;
        this.hideMessagePreview = hideMessagePreview;
        this.disallowFindMeByHandle = disallowFindMeByHandle;
        this.disallowFindMeByNO = disallowFindMeByNO;
        this.disallowFindMeByEmail = disallowFindMeByEmail;
        this.disallowFindMeByPhone = disallowFindMeByPhone;
        this.ageVerified = ageVerified;
        this.thirdUsers = thirdUsers;
        this.gender = gender;
        this.verified = verified;
        this.reviewer = reviewer;
        this.admin = admin;
        this.hideLocation = hideLocation;
        this.isPrivateChat = isPrivateChat;
        this.policyVersion = policyVersion;
        this.countryCode = countryCode;
        this.languageCode = languageCode;
        this.timeZone = timeZone;
        this.source = source;
        this.likeVisibleSetting = likeVisibleSetting;
        this.email = email;
        this.thirdUserDTOList = thirdUserDTOList;
        this.secureEmailStatus = secureEmailStatus;
        this.userApp = userApp;
        this.accountSecurityRisk = accountSecurityRisk;
    }

    toObject() {
        return {
            userId: this.userId,
            userIdStr: this.userIdStr,
            userIdBid: this.userIdBid,
            emailVerified: this.emailVerified,
            nickName: this.nickName,
            displayName: this.displayName,
            icon: this.icon,
            isFeatured: this.isFeatured,
            isPrivateAccount: this.isPrivateAccount,
            addFriendWithoutConfirm: this.addFriendWithoutConfirm,
            userDesc: this.userDesc,
            disabled: this.disabled,
            handle: this.handle,
            insertTime: this.insertTime,
            followNum: this.followNum,
            fansNum: this.fansNum,
            musicalNum: this.musicalNum,
            privateMusicalNum: this.privateMusicalNum,
            musicalLikedNum: this.musicalLikedNum,
            likesNum: this.likesNum,
            livelyHearts: this.livelyHearts,
            directAccount: this.directAccount,
            suspicious: this.suspicious,
            shareUri: this.shareUri,
            likesNumSelf: this.likesNumSelf,
            videoIconURI: this.videoIconURI,
            hideMessagePreview: this.hideMessagePreview,
            disallowFindMeByHandle: this.disallowFindMeByHandle,
            disallowFindMeByNO: this.disallowFindMeByNO,
            disallowFindMeByEmail: this.disallowFindMeByEmail,
            disallowFindMeByPhone: this.disallowFindMeByPhone,
            ageVerified: this.ageVerified,
            thirdUsers: this.thirdUsers,
            gender: this.gender,
            verified: this.verified,
            reviewer: this.reviewer,
            admin: this.admin,
            hideLocation: this.hideLocation,
            isPrivateChat: this.isPrivateChat,
            policyVersion: this.policyVersion,
            countryCode: this.countryCode,
            languageCode: this.languageCode,
            timeZone: this.timeZone,
            source: this.source,
            likeVisibleSetting: this.likeVisibleSetting,
            email: this.email,
            thirdUserDTOList: this.thirdUserDTOList,
            secureEmailStatus: this.secureEmailStatus,
            userApp: this.userApp,
            accountSecurityRisk: this.accountSecurityRisk
        };
    }

    static createMock() {
        return new UserProfile(1,'1','bid1',true,'ZRD','ZRD','icon.png',false,false,true,'idk, im shitting rn',false,'ZRD',0,1337,1337,0,0,0,1337,0,'idk',false,'shareurl',0,'icon.png',true,true,true,true,true,true, [], 'male',true,true,true,true,false,1,'PL','PL','UTC',1,1,'test@zrd.ovh',[],1,[],1);
    }
}


module.exports = {UserLogin, Result, UserProfile};
