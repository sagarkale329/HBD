// config.js - The Control Center for your Birthday Page
const CONFIG = {
    // --- Intro Screen Settings ---
    intro: {
        backgroundImg: "MyImage10.jpg", // File name in your GitHub repo
        // Use the "|" symbol to define where the text breaks for the animation
        message: "A special message | for a special person | is just a click away | Happy Birthday! | Let's celebrate!", 
        buttonText: "Open My Wish"
    },

    // --- Main Screen Settings ---
    main: {
        backgroundImages: [
            "MyImage1.jpg",
            "MyImage2.jpg",
            "MyImage3.jpg",
            "MyImage4.jpg",
            "MyImage5.jpg"
        ],
        birthdayMessage: "Happy Birthday!",
        subMessage: "Wishing you a year full of joy, success, and endless smiles.",
        musicUrl: "MyMusic.mp3" // Ensure this is uploaded to the same folder
    },

    // --- Flip Gallery (6-8 images) ---
    // These appear as cards that flip when tapped
    gallery: [
        { image: "MyImage1.jpg", note: "Add a personalized memory message here!" },
        { image: "MyImage2.jpg", note: "You can mention a specific date or event." },
        { image: "MyImage3.jpg", note: "Another beautiful moment captured." },
        { image: "MyImage4.jpg", note: "Your words make this feel premium." },
        { image: "MyImage5.jpg", note: "Keep the notes short and sweet." },
        { image: "MyImage6.jpg", note: "Almost there, one more memory!" },
        { image: "MyImage7.jpg", note: "This one is my favorite photo!" },
        { image: "MyImage8.jpg", note: "Ending the gallery with a smile." }
    ],

    // --- Video Reels (Instagram Style) ---
    // Add the filenames of your vertical videos
    videos: [
        "MyVideo4.mp4",
        "MyVideo4.mp4",
        "MyVideo4.mp4"
    ],

    // --- Final Message at the bottom ---
    finalMessage: "Made with ❤️ just for you. Have the best day ever!",

    // --- Premium Styling ---
    colors: {
        primary: "#FFD700",    // Gold for that premium feel
        secondary: "#FF69B4",  // Joyful pink
        accent: "#FFFFFF"      // Clean white
    }
};
