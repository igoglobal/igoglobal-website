import ChatBot from 'react-chatbotify';

function ChatHeader () {
    return (
        <div style={{fontSize: "19px", fontFamily: "cursive"}}>
            Igogloal bot
        </div>
    )
}

function ChatFooter () {
    return (
        <div style={{fontSize: "14px", fontWeight: "bold"}}>
            © igoglobal inc
        </div>
    )
}

function Chat () {
    const flow = {
        start: {
            message: "Hey there 👋, I'm igoBot. Nice to meet you",
            path: "select"
        },
        select: {
            message: "How may I be of help?",
            options: ["comp", "products", "services"],
            chatDisabled: true,  
            path: (param) => `company:${param.userInput}`
        },

        //company
        "company:comp": {
            message: "you chose product 1",
            options: ["vision", "mission"],
            path: (param) => `comp:${param.userInput}`
        },
        "company:products": {
            message: "We currently have two products",
            options: ["iroko", "pure virgin"],
            path: (param) => `product:${param.userInput}`
        },
        "company:services": {
            message: "We offer the following",
            options: ["health", "wellness", "education", "technology", "real estate"],
            path: (param) => `services:${param.userInput}`
        },

        // comp
        "comp:vision": {
            message: "Our vision is to promote healthy living and increased health for individuals across africa, and beyong",
            path: "select"
        },
        "comp:mission": {
            message: "built on the core of excellence, we thrive to create the best product and deliver outstanding services to all our clients",
        },

        // products -- iroko
        "product:iroko": {
            message: "Iroko is a health drink made from african roots",
            options: ["<< prev", "start ⬆"],
            path: (param) => `prodInfo:${param.userInput}`
        },
        // products -- pure virgin
        "product:pure virgin": {
            message: "Pure virgin is a cream that helps improve the female libido, tighten the vaginal muscle and sensitize intimacy",
            options: ["<< prev", "start ⬆"],
            path: (param) => `prodInfo:${param.userInput}`
        },
        "prodInfo:<< prev": {
            path: "company:products"
        },
        "prodInfo:start ⬆": {
            path: "select"
        },

        // services
        "services:health": {
            message: "The health of every human can be maintained easily if enough attention is paid",
            options: ["back"],
            path: "select"
        },
        "services:technology": {
            message: "We also offer real estate business to boost wealth in the marketing industry",
            options: ["back"],
            path: "select"
        },

        "company:info": {
            // message: (param) => `text from before is: ${param.userInput}`,
            message: "Igoglobal is a renowned company with expertise in health, wellness and nature's extract to improve healthcare",
            path: "start"
        },
        "company:prod": {
            // message: (param) => `text from before is: ${param.userInput}`,
            message: "Igoglobal is a renowned company with expertise in health, wellness and nature's extract to improve healthcare",
            path: "start"
        },
    }

    const options = {
		theme: {
			primaryColor: "#6767E7",
			secondaryColor: "#028f0c"
		},
        header: {
            title: <ChatHeader />,
            closeChatIcon: "./assets/img/chat/close-icon.png"
        },
        footer: {
            text: <ChatFooter/>
        },
		chatHistory: {
			storageKey: "example_theming"
		},
		sendButtonStyle: {
		    backgroundColor: "#6767E7",
		},
		sendButtonHoveredStyle: {
		    backgroundColor: "#5b5bce",
		}
    }

    return (
        <ChatBot
            options={options}
            flow={flow}
        />
    )
}

export default Chat;