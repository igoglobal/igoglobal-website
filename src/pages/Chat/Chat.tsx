import ChatBot from 'react-chatbotify';
import Title from '../../core/utils/Title';

interface ParamProps {
    userInput: string,
}

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
            options: ["company", "products", "services"],
            chatDisabled: true,  
            path: (param : ParamProps) => `comp:${param.userInput}`
        },

        //COMPANY
        "comp:company": {
            message: "Our beliefs are:",
            options: ["vision", "mission"],
            path: (param : ParamProps) => `companies:${param.userInput}`
        },
        "comp:products": {
            message: "We currently have two products",
            options: ["iroko", "pure virgin"],
            path: (param : ParamProps) => `product:${param.userInput}`
        },
        "comp:services": {
            message: "We offer the following:",
            options: ["health", "wellness", "education", "technology", "real estate"],
            path: (param : ParamProps) => `services:${param.userInput}`
        },

        // COMPANY >> companies
        "companies:vision": {
            message: "Our vision is to promote healthy living and increased health for individuals across africa, and beyong",
            // path: `:${}`
        },
        "companies:mission": {
            message: "built on the core of excellence, we thrive to create the best product and deliver outstanding services to all our clients",
            // path: `:${}`
        },

        // products -- iroko
        "product:iroko": {
            message: "Iroko is a health drink made from african roots",
            options: ["<< prev", "start ⬆"],
            path: (param : ParamProps) => `prodInfo:${param.userInput}`
        },
        // products -- pure virgin
        "product:pure virgin": {
            message: "Pure virgin is a cream that helps improve the female libido, tighten the vaginal muscle and sensitize intimacy",
            options: ["<< prev", "start ⬆"],
            path: (param : ParamProps) => `prodInfo:${param.userInput}`
        },
        "prodInfo:<< prev": {
            path: "company:products"
        },
        "prodInfo:start ⬆": {
            path: "select"
        },

        // SERVICES
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
        <>
            <Title 
                title="Welcome"
                sectionName="chat"
            />
            <ChatBot
                options={options}
                flow={flow}
            />
        </>
    )
}

export default Chat;