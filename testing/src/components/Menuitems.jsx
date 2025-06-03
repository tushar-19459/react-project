const sidemenu = [
    {
        lable: "Home",
        to: "/"
    },
    {
        lable: "profile",
        to: "/profile",
        children: [
            {
                lable: "details",
                to: "/details",
                children: [
                    {
                        lable: "location",
                        to: "/location"
                    }
                ]
            }
        ]
    },
    {
        lable: "settings",
        to: "/settings",
        children: [
            {
                lable: "account",
                to: "/account"
            },
            {
                lable: "security",
                to: "/security",
                children: [
                    {
                        lable: "login",
                        to: "/login"
                    },
                    {
                        lable: "signup",
                        to: "/signup"
                    }
                ]
            }
        ]
    }
] 

export default sidemenu