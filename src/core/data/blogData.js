const blogData = [
    {
        id: "4567",
        tag: "Feminine Health",
        date: "14 Jul, 2023",
        content: `In today's world, where natural and effective solutions are highly sought after, Pure Virgin stands out as a breakthrough product 
                for feminine health. Crafted meticulously to alleviate common discomforts such as yeast infections and vaginal dryness, Pure Virgin is enriched 
                with the natural goodness of Aloe Vera, Cocoa Pod, Hyssop, and Cam Wood. This unique blend offers a comprehensive solution for feminine care, making it a must-have for women seeking relief and confidence.
				`,
		quote: `
				“As a woman, be very intentional about your private life”
				`,
		header: "Pure Virgin Helps revitalize your youthful days",
		statement: `In a market flooded with synthetic products, Pure Virgin offers a natural, effective, and safe alternative. Its carefully selected 
                    ingredients have been used for centuries in traditional medicine, ensuring their efficacy and safety. Pure Virgin not only addresses 
                    the symptoms but also enhances overall feminine health, making it a comprehensive solution for women.
                `,
        img: "https://igogolobal-assets.s3.eu-west-2.amazonaws.com/images/wellness",
        title: "The Ultimate Natural Solution For Feminine Health",
        get link () {
            return `${this.id}`
        }
    },
    {
        id: "8634",
        tag: "Health",
        date: "11 Dec, 2023",
        content: `In the realm of natural health remedies, the Iroko African Root stands out as a potent source of numerous health benefits. Known for its rich medicinal properties, this root has been used 
				for centuries in traditional African medicine to treat a variety of ailments. With the growing interest in natural and holistic health solutions, the Iroko African Root is gaining recognition 
				worldwide for its remarkable therapeutic potential. In this comprehensive blog post, we explore the advantages of consuming Iroko African Root daily and why it should be a staple in your health regimen.
				`,
		quote: `
				“It’s good to have money and the things that money can buy, but it’s good,to  check up once in a while and make sure that you haven’t lost the things that money can’t buy.”
				`,
		header: "Health Should Not Be Taken for Granted",
		statement: "Informative and interactive financial blog is all about finance, taxation, investment, career, accounting, & global trending topics. If you are planning to enhance your financial knowledge, <strong>“this platform is for you”</strong> . Additionally, it you can share yourcussions on any finance topic of your choice.",
        img: "https://igogolobal-assets.s3.eu-west-2.amazonaws.com/images/happy",
        title: "Why Daily Consumption of Iroko African Root is a Game-Changer for Health",
        get link () {
            return `${this.id}`
        }
    },
    {
        id: "5678",
        tag: "Herbal Medicine",
        date: "14 Aug, 2024",
        content: `In the realm of natural health remedies, the Iroko African Root stands out as a potent source of numerous health benefits. Known for its rich medicinal properties, this root has been used 
				for centuries in traditional African medicine to treat a variety of ailments. With the growing interest in natural and holistic health solutions, the Iroko African Root is gaining recognition 
				worldwide for its remarkable therapeutic potential. In this comprehensive blog post, we explore the advantages of consuming Iroko African Root daily and why it should be a staple in your health regimen.
				`,
		quote: `
				“It’s good to have money and the things that money can buy, but it’s good,to  check up once in a while and make sure that you haven’t lost the things that money can’t buy.”
				`,
		header: "See How Traditional Medicine still stands out",
		statement: "Informative and interactive financial blog is all about finance, taxation, investment, career, accounting, & global trending topics. If you are planning to enhance your financial knowledge, <strong>“this platform is for you”</strong> . Additionally, it you can share yourcussions on any finance topic of your choice.",
        img: "https://igogolobal-assets.s3.eu-west-2.amazonaws.com/images/tech",
        title: "13 Reasons Why Herbal Medicine is a Better Option Any Day",
        get link () {
            return `${this.id}`
        }
    }
]

export default blogData;